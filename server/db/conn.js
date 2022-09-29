const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const port = process.env.PORT;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function runDB() {
    try {
        await client.connect();
        console.log(`Server is running on port: ${port}`);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

module.exports = {
    runDB
}