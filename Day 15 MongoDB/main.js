require("dotenv").config();
require("./config/db.js")
const express = require("express");
const productRouter = require("./routes/productsRoutes");
const app = express();


app.use(express.json());
app.use("/products", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`------Server Started: ${process.env.PORT}-------`)
})