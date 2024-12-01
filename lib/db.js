// lib/db.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://ktejash79:8cg1jYpjrVuD5yy3@the-feed.cmkyu.mongodb.net/?retryWrites=true&w=majority&appName=the-feed';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongo;

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongo = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;