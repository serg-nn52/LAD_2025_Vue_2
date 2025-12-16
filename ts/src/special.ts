// any, unknown

// const age = 35.5
// //age.slice() - ошибка
// console.log(age.toFixed())

// let user: any = 'Sergey'

// user = 5
// user = null

// console.log(user.slice(0, 1))

let user: unknown = 'Sergey'

user = 5
if(typeof user === 'string') {
    console.log(user.slice(0, 1))
}
if(typeof user === 'number') {
    console.log(user.toFixed())
}