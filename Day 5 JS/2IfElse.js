// if(100==10){
//     console.log("True");
// }
// else{
//     console.log("No")
// }


function Sum(a,b){
    if(a>0 && b>0){
        console.log(a+b)
    }
    else if(a>0){
        console.log(a)
    }
    else{
        console.log("0")
    }
}
Sum();
Sum(10);
Sum(10,20)

//We can do with default argument
function Sum2(a=0,b=0){
    console.log(a+b);
}
Sum2();
Sum2(10);
Sum2(10,20);



