import server from "../dist/server/server.js";

export default async function handler(req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers["host"] || "localhost";
    const url = new URL(req.url, `${protocol}://${host}`).toString();

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          for (const val of value) {
            headers.append(key, val);
          }
        } else {
          headers.set(key, value);
        }
      }
    }

    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      body = req;
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
      duplex: body ? "half" : undefined,
    });

    const response = await server.fetch(request);

    res.statusCode = response.status;
    res.statusMessage = response.statusText;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error("Adapter error:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}
