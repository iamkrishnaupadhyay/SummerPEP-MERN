//custom modules
// external modules
//-->internal modules
//!Syncronous

//*Read Sync
// const fs = require("fs");
// const data1 = fs.readFileSync("./text.txt");
// const text1 = data1.toString();
// console.log(text1);
// const data2 = fs.readFileSync("./text.txt", "utf-8")
// console.log(data2);


//*Write Sync
// const fs = require("fs");
// console.log("Start");
// const res = fs.writeFileSync("./NewFile.txt", "Hello");
// console.log(res);





//!Asyncronous


//*Read Async
// console.log("Start");
// const fs = require("fs");
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error occured", err);
//     }
//     else console.log(data);
// })
// console.log("end");

//*Write Async
// const fs = require("fs");
// console.log("Start");
// const res = fs.writeFile("./NewFile.txt", "Hello", (err, data) => {
//     console.log(err, data);
// });
// console.log(res);

//*Using Promises Read
// const fsPromises = require("fs/promises");
// console.log("start");
// fsPromises.readFile("./text.txt", "utf-8").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Error", err);
// })
// console.log("End")


//*Using Promises Write
// const fsPromises = require("fs/promises");
// console.log("start");
// fsPromises.writeFile("./WriteText.txt", "Hello").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Error", err);
// })
// console.log("End")


//*Using Promises Append
// const fsPromises = require("fs/promises");
// console.log("start");
// fsPromises.appendFile("./Append.txt", "Hello").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Error", err);
// })
// console.log("End")


const fsPromises = require("fs/promises");
const pr = fsPromises.readFile("./Data.json");
pr.then((bf) => {
    const text = bf.toString();
    const arr = JSON.parse(text);
    let mt = 0, st = 0;
    for (let i = 0; i < arr.length; i++) {
        mt += arr[i].MathsScore;
        st += arr[i].ScienceScore;
    }

    console.log("Maths score is", mt);
    console.log("Science score is", st);
})
    .catch(console.log);
