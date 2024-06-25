// const pr = fetch("https://dummyjson.com/products");
// pr.then((res) => {
//     const pr2 = res.json();
//     pr2.then((data) => {
//         createUI(data);
//     })
// }).catch((error) => {
//     alert(error);
// });

// const main = document.getElementById("root")

// function createUI(data) {
//     const products = data.products;
//     main.innerHTML = "";
//     for (let i = 0; i < products.length; i++) {
//         const newCard = document.createElement('div');


//         // const title = document.createElement('h3');
//         // title.innerText = products[i].title;
//         // newCard.appendChild(title);

//         // const img = document.createElement('img');
//         // img.setAttribute('src', products[i].thumbnail);
//         // newCard.appendChild(img);

//         // const price = document.createElement('p');
//         // price.innerText = products[i].price;
//         // newCard.appendChild(price);

//         newCard.innerHTML = `
//             <div>
//                 <h3>${products[i].title}</h3>
//                 <img src="${products[i].thumbnail}"></img>
//                 <p>${products[i].price}</p>
//             </div>`

//         main.appendChild(newCard);
//     }
// }

// function searchProduct(e) {
//     const searchText = e.target.value;
//     const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
//     pr.then((res) => {
//         const pr2 = res.json();
//         pr2.then((data) => {
//             createUI(data);
//         })
//     })
// }




//!Promises
// const pr = new Promise((resolve, reject) => {
//     let flag = true;

//     if (flag == true) {
//         setTimeout(() => {
//             resolve(["apple", "banana"])
//         }, 4000)
//     }
//     else {
//         reject("Not Done")
//     }
// });

// setTimeout(() => {
//     console.log("done");
// }, 5000)

// pr.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err);
// });


const cb = () => {
    console.log("Done");
}
setInterval(cb, 3000)