// // lib/db.js
// // import mongoose from 'mongoose';

// import { MongoClient, ServerApiVersion } from "mongodb";
// // import { New_Amsterdam } from 'next/font/google';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// const uri = process.env.MONGODB_URI;
// const options = {
//   serverApi:{
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// };

// let client;
// let clientPromise;

// if (process.env.NODE_ENV === "development") {
//   let globalWithMongo = global;
//   globalWithMongo._mongoClientPromise = undefined;

//   if (!globalWithMongo._mongoClientPromise){
//     client = new MongoClient(uri._options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;



// // let cached = global.mongoose;

// // if (!cached) {
// //   cached = global.mongoose = { conn: null, promise: null };
// // }

// // export async function connectToDB() {
// //   if (cached.conn) {
// //     return cached.conn;
// //   }

// //   if (!cached.promise) {
// //     const opts = {
// //       bufferCommands: false,
// //     };

// //     cached.promise = mongoose.connect(MONGODB_URI, opts)
// //       .then((mongoose) => {
// //         return mongoose;
// //       });
// //   }
  
// //   cached.conn = await cached.promise;
// //   return cached.conn;
// // }

// lib/db.js
import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global;

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Helper function to get a database instance
export async function getDb() {
  const client = await clientPromise;
  return client.db("numenofbanda"); // Use your actual database name
}
