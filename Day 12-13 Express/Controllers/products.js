const { error } = require("console");
const fsPromises = require("fs/promises");

const validateForTitleAndPrice = (req, res, next) => {
    const body = req.body;
    if (!body.title || !body.price) {
        res.json({
            status: "fail",
            message: "!! Title and Price is required",
        });
        return;
    }
    next();
};

const getDataMiddleware = async (req, res, next) => {
    try {
        const text = await fsPromises.readFile("./data.json", { encoding: "utf-8" });
        req.products = JSON.parse(text);
    } catch (error) {
        req.products = [];
    }
    next();
}

const validID=(req,res,next)=>{
    const params=req.params
    const {products}=req;
    
}


const getData = async () => {
    try {
        const text = await fsPromises.readFile("./data.json", { encoding: "utf-8" });
        return JSON.parse(text);
    } catch {
        return [];
    }
};

const getProducts = async (req, res) => {
    try {
        const text = await fsPromises.readFile("./data.json", { encoding: "utf-8" });
        const products = JSON.parse(text);
        res.json({
            status: "Successful",
            message: "Server is running",
            data: {
                products: products,
            },
        });
    } catch (err) {
        res.json({
            status: "Hello",
            message: "Server is running",
            data: {
                products: [],
            },
        });
    }
}

const postProducts = async (req, res) => {
    const body = req.body;
    const products = await getData();
    products.push(body);

    await fsPromises.writeFile("./data.json", JSON.stringify(products));
    res.status(201).json({
        status: "successful",
        data: {
            product: body,
        },
    });
}

const putProducts = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    let products = await getData();

    const prIdx = products.findIndex((elem) => elem.id == id);
    if (prIdx === -1) {
        res.status(400).json({
            status: "fail",
            message: "Product not found",
        });
        return;
    }
    products[prIdx] = { ...products[prIdx], ...body };
    await fsPromises.writeFile("./data.json", JSON.stringify(products));
    res.json({
        status: "successful",
        data: {
            product: products[prIdx],
        },
    });
}
const deleteProducts = async (req, res) => {
    const params = req.params;
    // const body=req.body;
    const products = await getData();
    const prIdx = products.findIndex((elem) => {
        if (elem.id == params.id) return true;
        return false;
    });

    if (prIdx === -1) {
        res.status(400);
        res.json({
            status: "Fail",
            message: "Invalid Product Id",
        })
        return;
    }

    products.splice(prIdx, 1);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));
    res.status(204);
    res.json({
        status: "Success",
        data: {
            product: null,
        },
    })
    return;

}

const patchProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const products = await getData();

        const prIdx = products.findIndex((elem) => elem.id == id);

        if (prIdx === -1) {
            res.status(400).json({
                status: "Fail",
                message: "Invalid Product Id",
            });
            return;
        }

        const newOB = {
            ...products[prIdx],
            ...body
        };

        products[prIdx] = newOB;
        await fsPromises.writeFile("./data.json", JSON.stringify(products, null, 2), { encoding: "utf-8" });

        res.json({
            status: "Success",
            message: "Product updated successfully",
            data: {
                product: products[prIdx],
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: "Internal Server Error",
            error: err.message,
        });
    }
}
module.exports = {
    getProducts,
    postProducts,
    putProducts,
    deleteProducts,
    patchProducts,
    validateForTitleAndPrice,
    getDataMiddleware
}