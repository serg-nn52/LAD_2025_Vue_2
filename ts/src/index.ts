import { price } from "./union"

console.log('Hello, typescript!')
console.log('Hello, javascript!')

console.log(price);

const h2 = document.createElement('h2');
h2.innerText = 'Subtitle';
document.body.append(h2);

h2.addEventListener('click', (event) => {
    console.log(event.target)
})