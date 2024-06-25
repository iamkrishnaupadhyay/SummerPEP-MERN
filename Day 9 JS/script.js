//!Destructuring
// const students = {
//     name: "Aman",
//     rollNo: "24001",
//     city: "Delhi",
//     hobbies: ['Painting', 'Styling', 'Drawing']
// }

// const { hobbies } = students;
// hobbies[0] = 'Studying';
// console.log(hobbies);
// console.log(students);
// console.log(name, city);

//*Rest -->to pack the value
//*Spread--> to unpack the value
// const s1 = {
//     name: "Aman",
//     rollNo: "24001",
//     city: "Delhi",
//     hobbies: ['Painting', 'Styling', 'Drawing']
// }

// const s2 = { ...s1 };
// s2.name = 'Ajay';
// s2.hobbies[0] = 'Playing';

// console.log(s1);
// console.log(s2);

// //!HW-->reduce padhna hai

// function Sum(...arr) {
//     const sum = arr.reduce((acc, elem, idx) => {
//         console.log(acc, elem, idx);
//         return acc + elem;
//     }, -1);

//     console.log("==>", sum)
// }

// Sum(1);
// Sum(2, 3);
// Sum(2, 3, 5);
// Sum(2, 3, 5, 6);
// Sum(2, 3, 5, 6, 7);


// function getData() {
//     const pr = fetch('https://dummyjson.com/products');
//     pr.then((res) => {
//         const pr2 = res.json();
//         pr2.then((data) => {
//             console.log(data);
//         });
//     });
// }

// getData();

async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
}

getData();