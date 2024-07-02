require("dotenv").config();
const express = require("express");
require("./database/db")
const app = express();
const { database, productsCollection } = require("./database/db.js");
app.use(express.json());
const { getProducts } = require("./controllers/productscontroller.js")


app.get("/products", getProducts);

app.post("/products", async (req, res) => {
    const body = req.body;
    if (!body.title || !body.price) {
        res.status(400);
        res.json({
            status: "fail",
            message: "Title and Price are Required",
        });
        return;
    }
    const result = await productsCollection.insertOne(body);
    res.json({
        status: "Success",
        data: {
            products: result,
        }
    });
});
app.listen(process.env.PORT, () => {
    console.log("------Server Started------")
})
