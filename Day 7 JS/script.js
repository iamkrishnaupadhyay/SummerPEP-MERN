// const button=document.getElementsByTagName('button')[0];
// button.addEventListener('click',cb);

// function cb(){
//     alert("Button is Clicked");
// }


// const input = document.getElementsByTagName('input')[0];
// input.addEventListener('keyup',cb);

// const cb =(ev)=>{
//     console.log("input is",ev.target.value)
// }


// console.log("Start");
// // const delay=5000;
// // const cb=()=>{
// //     console.log("cb called")
// // }
// setTimeout((()=>{
//     console.log("CB called")
//     setTimeout(()=>{
//         console.log("Internal CB Called")
//     },0)
// }),0);
// console.log("End")




//!Promises
// const pr=fetch("");
// console.log('pr');

// const pr= fetch('https://api.github.com//users/likbalpande');

// pr.then((res)=>{
//     const pr2=res.json();
//     pr2.then((data)=>{
//         console.log(data);
//     });
// }).catch((e)=>{
//     console.log('fetch=');
// })


const request = fetch("https://dummyjson.com/products");

request.then((result) => {
    const convertData = result.json();
    convertData.then((data) => {
        console.log(data);
        renderUI(data.products);
        setupSearch(data.products);
    });
}).catch((error) => {
    alert(error);
});

const root = document.getElementById('root');

const renderUI = (products) => {
    root.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.price}</p>`;
        root.appendChild(card);
    });
};

const setupSearch = (products) => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (event) => {
        const searchQuery = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );
        renderUI(filteredProducts);
    });
};


