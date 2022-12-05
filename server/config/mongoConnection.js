const { MongoClient } = require("mongodb");
// Connection URI
// const uri = "mongodb://localhost:27017";
let rahasia = process.env.Code;
const uri = `mongodb+srv://nurmizwari:${rahasia}@cluster0.jpkuawx.mongodb.net/?retryWrites=true&w=majority`;
// Create a new MongoClient
const client = new MongoClient(uri);
async function connectDB() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    const db = client.db("user");
    dbConnection = db;
    return db;
  } catch (error) {
    await client.close();
    console.log(error);
  }
}

function getDB(params) {
  return dbConnection;
}

module.exports = { connectDB, getDB };
