import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import NodeCache from "node-cache";

dotenv.config();

export const cacheDuration = process.env.CACHE_DURATION || 300;

export const cache = new NodeCache();

/**
 * Middleware function to cache GET requests and serve cached content when available.
 *
 * @param {Request} req - The request object from Express.
 * @param {Response} res - The response object from Express.
 * @param {NextFunction} next - The next middleware function in the stack.
 */
function caching(req: Request, res: Response, next: NextFunction) {
  // Bypass caching for non-GET requests.
  if (req.method !== "GET") {
    return next();
  }

  // Construct a unique cache key based on the request URL.
  const key = "__express__" + req.originalUrl || req.url;
  const cachedResponse = cache.get(key);

  // If a cached response exists, send it to the client and skip further processing.
  if (cachedResponse) {
    res.send(cachedResponse);
    return;
  } else {
    // If there's no cached response, override the res.send method.
    const originalSend = res.send.bind(res);
    res.send = (body) => {
      cache.set(key, body, 300);
      return originalSend(body);
    };
  }
  // Proceed to the next middleware function if the response wasn't served from cache.
  next();
}

export default caching;
