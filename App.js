let heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am a H1 tag")));
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);