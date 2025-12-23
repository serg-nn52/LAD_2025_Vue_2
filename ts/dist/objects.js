const user = {
    name: "Sergey",
    age: 40,
};
// user.car = "Geely";
user.age = "41";
user.age = 41;
user.car = "Geely";
const admin = {
    name: "Ilya",
    age: 30,
    isAdmin: true,
    car: "BMW",
    role: "boss",
};
window.result = "test result";
//array
const fruits = ["apple", "banana", "cherry", null];
const otherFruits = ["apple", "banana", "cherry", null];
const usersList = [
    {
        name: "Ivan",
        age: 25,
    },
    {
        name: "Darya",
        age: 18,
        car: "Audi",
    },
];
const human = {
    gender: "male",
    age: null,
};
const newHuman = {
    gender: "female",
    age: "35",
};
const obj = {
    country: "Belarus",
    ertertert: 12,
};
//function
//void
function sayHi(name) {
    console.log(`Hi, ${name}`);
}
const sayHiArrow = (name) => {
    console.log(`Hi, ${name}`);
};
//есть возвращаемое значение
const sum = (a, b) => {
    return String(a + b);
};
//never
const showError = (message) => {
    throw new Error(message);
};
const car = {
    label: "BMW",
    year: 2025,
    showYear: function (msg) {
        return `${msg} ${this.year}`;
    },
};
export {};
