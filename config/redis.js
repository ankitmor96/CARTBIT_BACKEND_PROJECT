import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config({path:"./.env"});

console.log("REDIS URL EXISTS:", !!process.env.REDIS_URL);
console.log("REDIS HOST:", process.env.REDIS_URL?.split("@")[1]);

const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on("error", (err) => {
    console.error("Redis Error:", err);
});

await redisClient.connect();

console.log("Redis Connected");

export default redisClient; 