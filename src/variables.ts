let myName: string = "May"
let age: number
let isMad: boolean = true
let album: string | number = 32 // Union operator can be either string or number
let id: any // can have value of any datatype

console.log(myName) // May
console.log(isMad) // true

myName = "aBc"
console.log(myName) // aBc

age = 42
console.log(age) // 42

const sum = (a: number, b: number) => {
    return a + b
}

console.log(sum(3, 6)) // 9

let re: RegExp = /\w+/g // RegExp type