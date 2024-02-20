import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import NodeCache from "node-cache";

dotenv.config();

export const cacheDuration = process.env.CACHE_DURATION || 300;

export const cache = new NodeCache();

function caching(req: Request, res: Response, next: NextFunction) {
  if (req.method !== "GET") {
    return next();
  }

  const key = "__express__" + req.originalUrl || req.url;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    res.send(cachedResponse);
    return;
  } else {
    const originalSend = res.send.bind(res);
    res.send = (body) => {
      cache.set(key, body, 300);
      return originalSend(body);
    };
  }
  next();
}

export default caching;
