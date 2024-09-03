import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://doadmin:v84KSy2J9j3t016F@profit-pulse-db-ac4cb8e0.mongo.ondigitalocean.com/admin?replicaSet=profit-pulse-db&tls=true&authSource=admin";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn && cached.conn.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        console.log("MongoDB connected");
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error.message);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
