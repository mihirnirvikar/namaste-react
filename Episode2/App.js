import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {id: "title"}, "Hello World from React");
const Title = () => {
    return <h1 id="title">Hello World from React Functional Component</h1>;
}
root.render(heading);
