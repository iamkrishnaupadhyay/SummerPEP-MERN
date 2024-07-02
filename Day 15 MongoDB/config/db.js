//*MongoDB
// const { MongoClient } = require("mongodb");

//*Mongoose
const mongoose = require("mongoose");


const uri =
    "mongodb+srv://<username>:<password>@cluster0.6kzwkfo.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0"

let dbURL = uri;
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbname>", process.env.DB_NAME);

//*MongoDB
// const client = new MongoClient(dbURL);

// const database = client.db(process.env.DB_NAME);
// const productsCollection = database.collection("products");

// module.exports = {
//     productsCollection,
// };

//*Mongoose
mongoose
    .connect(dbURL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("DB Connect Failed");
        console.log(err);
    })


