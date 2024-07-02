const { database, productsCollection } = require("../database/db.js");

const getProducts = async (req, res) => {
    const products = await productsCollection.find().toArray();
    res.json({
        status: "Success",
        data: {
            products: products,
        }
    })
}

module.exports = {
    getProducts
}