//*MongoDB
// const { productsCollection } = require("../config/db");
//*Mongoose
const productModel = require("../models/productModel.js");

const checkId = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await productModel.findById(id);
        if (!product) {
            response.status(404);
            res.json({
                status: "Fail",
                message: "Invalid Product ID",
            })
            return;
        }
        next();
    }
    catch (err) {
        if (err.name === "CatchError") {
            res.json({
                status: "Fail",
                message: "Product Id not found",
            });
            return;
        }
        res.json({
            status: "Fail",
            message: err.message

        })
    }

};

const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.send({
        status: "Success",
        data: {
            products: products,
        }
    })
    //*MongoDB
    // const products = await productsCollection.find().toArray();
    // res.send({
    //     status: "Success",
    //     data: {
    //         products: products
    //     }
    // });
};

const postProducts = async (req, res) => {
    try {
        const body = req.body;
        const newProducts = await productModel.create(body);
        res.json({
            status: "Success! Product is Created",
            data: {
                products: newProducts,
            }
        })
    }
    catch (err) {
        res.json({
            status: "Failed",
            Message: "Failed to Create Products",
        })
    }
    //*MongoDB
    // const body = req.body;
    // const newProducts = await productsCollection.insertOne(body);
    // res.json({
    //     status: "Success",
    //     data: {
    //         products: body
    //     }
    // })
};

const putProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        // console.log(id);
        const newProducts = await productModel.findOneAndReplace({ _id: id }, body);
        res.json({
            status: "Success! Product is Updated",
            data: {
                products: body,
            }
        })
    }
    catch (err) {
        res.json({
            status: "Failed",
            Message: "Failed to Update Products",
        })
    }
};

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const newProducts = await productModel.findOneAndDelete({ _id: id });
        res.json({
            status: "Success! Product is Deleted",
            data: {
                products: newProducts,
            }
        })
    }
    catch (err) {
        res.json({
            status: "Failed",
            Message: "Failed to Delete Products",
        })
    }
};

const patchProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const updateProducts = await productModel.findByIdAndUpdate({ _id: id }, body);
        res.json({
            status: "Success",
            data: {
                products: updateProducts,
            }
        })
    }
    catch (err) {
        res.status(500);
        res.json({
            status: "Fail",
            Message: "Internal Server Error",
            info: err,
        })
    }
};

//* price[$lte]=2499 it is query from post api where in bracket it lte which means less than equal to
const listProducts = async (req, res) => {
    console.log("--->", req.query)
    const { limit = 10, q = "", fields = "", sort = "price", page = 1, ...filters } = req.query;
    const selectionFields = fields.split('_').join(' ');
    console.log(selectionFields);
    const sortFields = sort.split('_').join(" ");
    let pizzasQuery = productModel.find(filters);
    //*Search Query
    pizzasQuery = pizzasQuery.where("title").regex(q);
    pizzasQuery = pizzasQuery.select(selectionFields);
    //*Sorting
    pizzasQuery = pizzasQuery.sort(sortFields);
    //*Total Counting for Paging
    const countQuery = pizzasQuery.clone();
    const totalData = await countQuery.countDocuments();
    //*Paging
    pizzasQuery = pizzasQuery.skip((page - 1) * limit);

    const limitedPizzas = await pizzasQuery.limit(limit);

    res.json({
        status: "success",
        totalData: totalData,
        results: limitedPizzas.length,
        data: {
            pizzas: limitedPizzas,
        },
    });
};

module.exports = {
    getProducts,
    postProducts,
    putProducts,
    deleteProducts,
    patchProducts,
    checkId,
    listProducts,
}