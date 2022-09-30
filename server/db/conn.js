const { MongoClient } = require("mongodb");

const Db = process.env.ATLAS_URI;
const port = process.env.PORT;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var database;

async function runDB() {
  try {
    await client.connect();
    database = client.db("petbio");
    console.log(`Server is running on port: ${port}`);
  } catch (err) {
    console.log(err.stack);
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  runDB,
  getDatabase,
};
