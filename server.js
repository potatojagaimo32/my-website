const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { URL } = require("node:url");

const port = Number(process.env.PORT || 3000);
const host = "webservices.amazon.co.jp";
const region = "us-west-2";
const service = "ProductAdvertisingAPI";
const endpoint = `https://${host}/paapi5/searchitems`;
const root = __dirname;

function hash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function hmac(key, value) {
  return crypto.createHmac("sha256", key).update(value).digest();
}

function signingKey(secret, date) {
  const dateKey = hmac(`AWS4${secret}`, date);
  const regionKey = hmac(dateKey, region);
  const serviceKey = hmac(regionKey, service);
  return hmac(serviceKey, "aws4_request");
}

function signedHeaders(payload) {
  const accessKey = process.env.AMAZON_ACCESS_KEY;
  const secretKey = process.env.AMAZON_SECRET_KEY;
  const partnerTag = process.env.AMAZON_PARTNER_TAG;
  if (!accessKey || !secretKey || !partnerTag) throw new Error("Amazon API credentials are missing");

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const date = amzDate.slice(0, 8);
  const canonicalHeaders = `content-encoding:amz-1.0\ncontent-type:application/json; charset=utf-8\nhost:${host}\nx-amz-date:${amzDate}\nx-amz-target:com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems\n`;
  const signedHeaderNames = "content-encoding;content-type;host;x-amz-date;x-amz-target";
  const canonicalRequest = `POST\n/paapi5/searchitems\n\n${canonicalHeaders}\n${signedHeaderNames}\n${hash(payload)}`;
  const scope = `${date}/${region}/${service}/aws4_request`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${scope}\n${hash(canonicalRequest)}`;
  const signature = crypto.createHmac("sha256", signingKey(secretKey, date)).update(stringToSign).digest("hex");

  return {
    "Content-Encoding": "amz-1.0",
    "Content-Type": "application/json; charset=utf-8",
    "Host": host,
    "X-Amz-Date": amzDate,
    "X-Amz-Target": "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems",
    Authorization: `AWS4-HMAC-SHA256 Credential=${accessKey}/${scope}, SignedHeaders=${signedHeaderNames}, Signature=${signature}`
  };
}

async function searchAmazon(query) {
  const payload = JSON.stringify({
    Keywords: query,
    SearchIndex: "Books",
    ItemCount: 10,
    PartnerTag: process.env.AMAZON_PARTNER_TAG,
    PartnerType: "Associates",
    Resources: [
      "Images.Primary.Large",
      "ItemInfo.Title",
      "ItemInfo.ByLineInfo",
      "Offers.Listings.Price",
      "Offers.Listings.Availability.Message"
    ]
  });
  const response = await fetch(endpoint, { method: "POST", headers: signedHeaders(payload), body: payload });
  const data = await response.json();
  if (!response.ok) throw new Error(data.Errors?.[0]?.Message || "Amazon API request failed");
  return (data.SearchResult?.Items || []).map((item) => ({
    title: item.ItemInfo?.Title?.DisplayValue || "タイトル不明",
    author: item.ItemInfo?.ByLineInfo?.Contributors?.[0]?.Name || "著者不明",
    price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount || "価格確認中",
    image: item.Images?.Primary?.Large?.URL || "",
    url: item.DetailPageURL,
    query,
    category: query
  }));
}

function sendJson(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" });
  response.end(JSON.stringify(body));
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  if (requestUrl.pathname === "/api/amazon-books") {
    const query = requestUrl.searchParams.get("q")?.trim();
    if (!query) return sendJson(response, 400, { error: "q is required" });
    try { return sendJson(response, 200, { items: await searchAmazon(query) }); }
    catch (error) { return sendJson(response, 502, { error: error.message }); }
  }

  const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = path.join(root, requestedPath);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404); return response.end("Not found");
  }
  const extension = path.extname(filePath);
  const contentTypes = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8" };
  response.writeHead(200, { "Content-Type": contentTypes[extension] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, () => console.log(`BOOKMARKET running at http://localhost:${port}`));
