const express = require("express");
const {
    getProducts,
    postProducts,
    putProducts,
    patchProducts,
    deleteProducts,
    validateForTitleAndPrice,
    getDataMiddleware,
} = require("../Controllers/products.js");

const productRouter = express.Router();

// app.get("/products", getProducts);
// app.post("/products", createProduct);
productRouter.route("/products")
    .get(getProducts)
    .post(validateForTitleAndPrice, postProducts);

// app.put("/products/:id",putProducts);
// app.patch("/products/:id", patchProducts);
// app.delete("/products/:id", deleteProducts);
productRouter
    .route("/:id")
    .put(validateForTitleAndPrice, putProducts)
    .patch(patchProducts)
    .delete(deleteProducts);

module.exports = productRouter;