// const title=document.getElementsByTagName('section')[1].getElementsByTagName('h1')[0];
// title.innerText="Hello world";

// const title=document.querySelector("section>h1");
// title.style.color='brown'
// title.className='cs1'  // it create class names as cs1 under h1 tag


//!adding element in section tag from here
// const p=document.createElement("p");
// p.innerText="Hello I am created from DOM"
// const sec=document.getElementsByTagName("section")[0];
// sec.appendChild(p);
// sec.append("Hello mr how do you do");
// sec.appendChild("New World hello")


//*Event Listeners
// function printHello(){
//     alert("Hello")
// }

// function inputClicked(){
// console.log("inputClicked")
// }

// function inputKeyDown(e){
//     console.log("inputKeyDown")
//     console.log(e.target.value)

// }

// function inputChanged(e){
//     console.log("inputChanged")
//     console.log(e.target.value)
// }

// function handleUserName(e){
//     console.log("Name",e.target.value)
// }

// function handleUserAge(e){
//     console.log("Age",e.target.value)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     console.log("Form Submit",e.target.value)
//     const arr=e.target;
//     const name=arr[0].value;
//     const age=arr[1].value;

//     console.log("Your username is" ,name)

//     const form=document.getElementsByTagName("form")[0];
//     form.style.display="none"
//     renderCard(name,age);

// }

// const renderCard=(n,e)=>{
//     const root=document.getElementById("root");
//     root.innerHTML=
//         `<h2>This is your name ${n}</h2>
//         <h2>This is your age ${e}</h2>
//         `
// }


//Callback

// const showResult=(res)=>{
//     console.log(res);
//     const root=document.getElementById('root');
//     root.innerText=res
//     printPretty(res)
// }

// const Sum=(a,b)=>{
//     const res=a+b;
//     showResult(res);
// }

// const Mul=(a,b)=>{
//     const res=a*b;
//     showResult(res);
// }

// const printPretty=(res)=>{
//     const root=document.getElementById('root');
//     root.style.color='green'
//     root.innerText=res;
// }


//!Main Call Back
// function paywithRazorpay(){
//     console.log("Payment processing with razorpay..")
// }

// function paywithPaytm(){
//     console.log("Payment processing with Paytm..")
// }

// const userDetails=(name,age,seat,processPayment)=>{
//     console.log(`Booking for name: ${name} whose age is ${age} and Seat is ${seat}`)
//     processPayment();
// }

// userDetails('Krishna',20,'SL',paywithPaytm)


//Array
const arr=[10,20,30,40]
// console.log(arr)
// arr.shift();
// console.log(arr);
// arr.unshift("20")
// console.log(arr);
// arr.push("50")
// console.log(arr);
// arr.pop()
// console.log(arr);

// const printValues=(a,b,c)=>{
//     console.log("value",a)
//     console.log("index",b)
//     console.log("array",c)
//     console.log("-----------------------")
// }

// for(let i=0;i<arr.length;i++){
//     printValues(arr[i],i,arr)
// }



// let sum=0
// arr.forEach((a,b)=>{
//     sum+=a;
// })
// console.log(sum)



const isEven=(x)=>{
    if(x%2==0) return true;
    else return false;
}

const res=arr.filter(isEven);
console.log("res",res)