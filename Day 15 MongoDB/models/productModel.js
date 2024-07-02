const mongoose = require("mongoose")

//*We are creating Schema for out post request
//*SummerPEP-Mern
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    }, thumbnail: {
        type: String,
    },
    description: String,
    Images: [],
    metaData: {},
    createdAt: {
        type: String,
        default: Date.now(),
    },
    updatedAt: {
        type: String,
        default: Date.now(),
    },
});

//*SummerPEP-Mern
const productModel = mongoose.model("products", productSchema);



// const productSchema = new mongoose.Schema({
//     pizza_name: String,
//     pizza_category: String,
//     pizza_size: String,
//     pizza_price: Number,
// });

// const productModel = mongoose.model("pizzas", productSchema);


module.exports = productModel;