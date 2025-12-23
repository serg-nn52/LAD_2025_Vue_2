//1. type
type TUser = {
    name: string;
    age: number | string;
    car?: string;
};

//2. interface
interface IUser {
    name: string;
    age: number | string;
    car?: string;
}

const user: IUser = {
    name: "Sergey",
    age: 40,
};

// user.car = "Geely";

user.age = "41";
user.age = 41;
user.car = "Geely";

interface IAdmin extends IUser {
    isAdmin: boolean;
}

interface IAdmin {
    role: "admin" | "boss";
}

const admin: IAdmin = {
    name: "Ilya",
    age: 30,
    isAdmin: true,
    car: "BMW",
    role: "boss",
};

declare global {
    interface Window {
        result: string;
    }
}

window.result = "test result";

//array

const fruits: (string | null)[] = ["apple", "banana", "cherry", null];
const otherFruits: Array<string | null> = ["apple", "banana", "cherry", null];

const usersList: IUser[] = [
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

interface IHuman<T> {
    gender: "male" | "female";
    age: T;
}

const human: IHuman<number | null> = {
    gender: "male",
    age: null,
};

const newHuman: IHuman<string> = {
    gender: "female",
    age: "35",
};

interface IRecord {
    country?: string;
    [key: string]: number | string;
}

const obj: IRecord = {
    country: "Belarus",
    ertertert: 12,
};

//function

//void

function sayHi(name: string): void {
    console.log(`Hi, ${name}`);
}

const sayHiArrow = (name: string): void => {
    console.log(`Hi, ${name}`);
};

//есть возвращаемое значение

const sum = (a: number, b: number): string => {
    return String(a + b);
};

//never

const showError = (message: string): never => {
    throw new Error(message);
};

interface ICar {
    label: string;
    year: number;
    showYear: (msg: string) => string;
}

const car: ICar = {
    label: "BMW",
    year: 2025,
    showYear: function (msg: string) {
        return `${msg} ${this.year}`;
    },
};
