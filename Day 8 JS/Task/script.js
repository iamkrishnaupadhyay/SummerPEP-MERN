let a;

const pr = fetch("https://dummyjson.com/products");
pr.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
        a = data;
        createUI(data);
    })
}).catch((error) => {
    alert(error);
});

const main = document.getElementById("root")

function createUI(data) {
    const products = data.products;
    main.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const newCard = document.createElement('div');
        newCard.classList.add('product-card');
        newCard.innerHTML = `
            <div>
                <img src="${products[i].thumbnail}" alt="${products[i].title}">
                <h3>${products[i].title}</h3>
                <p>Rs.${products[i].price}</p>
                <p>Description: ${products[i].description}</p>
            </div>`
        main.appendChild(newCard);
    }
}

function searchProduct(e) {
    const searchText = e.target.value;
    const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            createUI(data);
        })
    })
}

function Home() {
    createUI(a);
}