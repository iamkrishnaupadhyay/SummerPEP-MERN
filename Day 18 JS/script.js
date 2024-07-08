// console.log("Hello");

// const parent = document.getElementById("root");

// const list = document.createElement("ul");

// const listItem1 = document.createElement("li");
// listItem1.innerText="Item1";
// list.appendChild(listItem1);

// const listItem2 = document.createElement("li");
// listItem2.innerText="Item2";
// list.appendChild(listItem2);

// parent.appendChild(list);

//*React
// const parent = document.getElementById("root");
// const listItem1 = React.createElement("li", {}, "item1")
// const listItem2 = React.createElement("li", {}, "item2")
// const list = React.createElement("ul", {}, [listItem1, listItem2]);

// const root=ReactDOM.createRoot(parent);
// root.render(list);


//*JSX
// const parent = document.getElementById("root");
// const listItem1 = <li>Item1</li>;
// const list = <ul>{listItem1}</ul>;
// const root = ReactDOM.createRoot(parent);
// root.render(list);


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
//Jsx element must have a parent
// const divHello = <div>Hello</div>;
// const divReact = <div>React</div>;
const textHello = <h3>Hello</h3>;
const TextFrom = () => {
    return <h3>From</h3>
}
const textReact = () => {
    return <h3>React</h3>
};
const container = (
    <div>
        {textHello}
        <TextFrom/>
        {textReact()}
    </div>
)
root.render(container);


