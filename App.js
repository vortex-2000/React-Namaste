import React from "react";
import ReactDOM from "react-dom";

    const parent = React.createElement
    (
        "div",
        {id:"div"},
        [
            React.createElement("h1",{id:"h1kacolor1"},"H1 elemen of react"),
            React.createElement("h1",{id:"h1kacolor2"},"H1 element of react sister")
        ]
    );

    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);

