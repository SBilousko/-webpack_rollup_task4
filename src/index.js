import "../index.css";

import JS_IMAGE from "../assets/js.png";

console.log("Hello World!");

const jsImage = document.createElement("img");
jsImage.className = "js-image";
jsImage.src = JS_IMAGE;

document.body.append(jsImage);
