import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React"
);

// const HeadingComponent = () => {
//     return <h1>Hello World</h1>
// }

// const HeadingComponent = () => <h1>Hello World</h1>

// const HeadingComponent = () => (
//     <h1>Hello World</h1>
// )

// const HeadingComponent = () => {
//   return ( 
//   <h1>Hello World</h1>
// )};

// All functional components must start with a capital letter
// Functional component are just js normal functions that return JSX
// JSX is a syntax extension to JS
// JSX makes it easier to write and add HTML in React
// Babel is a JS compiler that converts JSX to React.createElement calls
// Babel is used behind the scenes when we use create-react-app
// Babel is also used in code sandboxes and other online editors


// Functional component can also return multiple elements but they must be wrapped in a single parent element
// We can use React.Fragment or empty tags <> </> to wrap multiple elements
// We can also use div or any other HTML element to wrap multiple elements

// Component composition - A component can call another component and use it inside its JSX
// We can call a component in 3 ways
// 1. As a normal function call - Title()
// 2. As a JSX element - <Title />
// 3. As a JSX element with props - <Title />I am Title</Title>

// We can pass props to a component and use it inside the component
// Props are read-only and cannot be modified inside the component
// Props are used to pass data from parent to child component

const Title = () => {
  return <h1>Hello World form Title</h1>;
};

const HeadingComponent = () => {
    return (
        <div>
            {Title()}
            {<Title />}
            {<Title></Title>}
            {<Title>I am Title</Title>}

            <h1>Hello World from HeadingComponent</h1>
            <h2>This is a subheading</h2>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
