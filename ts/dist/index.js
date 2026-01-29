import { price } from "./union.js";
console.log("Hello, typescript!");
console.log("Hello, javascript!");
console.log(price);
if (typeof document !== "undefined") {
    const h2 = document.createElement("h2");
    h2.innerText = "Subtitle";
    document.body.append(h2);
    h2.addEventListener("click", (event) => {
        console.log(event.target);
    });
}
var Books;
(function (Books) {
    Books["JS"] = "JS Book";
    Books["TS"] = "TS Book";
    Books["HTML"] = "HTML Book";
})(Books || (Books = {}));
const htmlBook = Books.HTML;
console.log("htmlBook", htmlBook);
