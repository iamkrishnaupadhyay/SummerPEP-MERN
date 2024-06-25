function form(e){
        e.preventDefault();
        const arr=e.target;
        const name=arr[0].value;
        const username=arr[1].value;
        const email=arr[2].value;
        const age=arr[3].value;
        const phone=arr[4].value;
        const form=document.getElementsByTagName("form")[0];
        form.style.display="none"
        renderCard(name,username,email,age,phone);
}

const renderCard=(n,u,e,a,p)=>{
const root=document.getElementById("root");
root.innerHTML=
        `<h2>Name :${n}</h2>
        <h2>Username :${u}</h2>
        <h2>Email :${e}</h2>
        <h2>Age :${a}</h2>
        <h2>Number :${p}</h2>
        `
}