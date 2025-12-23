import { price } from "./union";

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

enum Books {
    JS = "JS Book",
    TS = "TS Book",
    HTML = "HTML Book",
}

const htmlBook = Books.HTML;
console.log("htmlBook", htmlBook);
