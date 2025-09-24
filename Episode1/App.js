const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "header" }, "I'm the h1 tag"),
    React.createElement("h2", { id: "header" }, "I'm the h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "header" }, "I'm the h1 tag"),
    React.createElement("h2", { id: "header" }, "I'm the h2 tag"),
  ]),
]);

root.render(parent);
