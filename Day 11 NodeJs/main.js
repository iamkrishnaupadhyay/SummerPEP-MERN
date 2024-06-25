
const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");


const dataText = fs.readFileSync(`${__dirname}/data.json`);
const data = JSON.parse(dataText);


const app = http.createServer(async (req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html",
    })
    // const route = req.url;
    const { query, pathname } = url.parse(req.url, true);
    switch (pathname) {
        case "/": {
            const bf = await fsPromises.readFile(`${__dirname}/Pages/homepage.html`)
            res.end(bf);
            break;
        }
        case "/products": {
            const bf = await fsPromises.readFile(`${__dirname}/Pages/product.html`)
            let text = bf.toString();
            let productText = "";
            for (let i = 0; i < data.products.length; i++) {
                productText +=
                    `<div class="product-card">
                        <h1>${data.products[i].title}</h1>
                        <img src=${data.products[i].thumbnail}>
                        <h4>${data.products[i].description}</h4>
                        <a href="/view?id=${data.products[i].id}", target="_blank">More</a>
                    </div>`
            }
            text = text.replace("$PRODUCT$", productText)
            res.end(text);
            break;
        }
        case "/view": {
            const product = data.products.find((elem) => {
                if (elem.id == query.id) return true;
                else return false;
            });

            const bf = await fsPromises.readFile(`${__dirname}/Pages/view.html`);
            let text = bf.toString();
            text = text.replace("$VIEW$",
                `<div>
                <h2>${product.title}</h2>
                <img src="${product.thumbnail}" height='300'>
                <h3>Rs. ${product.price}</h3>
                <h4>${product.description}</h4>
                </div>`)
            res.end(text);
            break;
        }
        default: {
            res.end("<h2>Oops page not Found</h2>");
        }
    }
});

app.listen(3000, () => {
    console.log("-----Server Started-----")
})