import React from "react";
import ReactDOM from "react-dom/client";

//const heading=React.createElement("h1",{id:"title",key:"h1"},"Heading 1");
//console.log(heading)

//React.createElement --> Object --> HTML(DOM)

//JSX? is like a HTML like syntax
//but not HTML
const heading=(<h1 id="title" key="h2">Namaste React</h1>); //React element is an object
//const container=React.createElement("div",{id:"container",},[heading,heading2]);

// React Component
//-Functional component -New
const HeaderComponent=()=>
    (<div>
        {heading}
        {console.log("This is power of JSX")}
        <h1>Namaste React Functional Component</h1>
        <h2>This is react</h2>
        </div>); //functional component is a fucntion

//-Class based component -Old
const root=ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside root
//async defer

root.render(<HeaderComponent/>);

