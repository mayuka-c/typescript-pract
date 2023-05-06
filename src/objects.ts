let myObj: object
myObj = [] // Array is also an object
console.log(typeof myObj)

myObj = {}

const exampleObj = {
    prop1: "Apple",
    prop2: 20
}
console.log(exampleObj) // {prop1: 'Apple', prop2: 20}
// exampleObj.prop1 = true - Not allowed as it is already intact to string

type GuitarList = {
    name: string
    active: boolean
    albums: (number | string)[]
}

// All three fields are required below
let evh: GuitarList = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}

console.log(evh) // {name: 'Eddie', active: false, albums: Array(3)}

// Below does not work, as there is no age propert under GuitarList
// evh.age = 29

// We can use interface or type while defining object type
interface Fruit {
    name: string
    price?: number // here price is made optional
}

// price field is optional
let fruit1: Fruit = {
    name: "Apple"
}

console.log(fruit1) // {name: 'Apple'}

const greetGuitarist = (guitarist: GuitarList) => {
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(evh)) // Hello Eddie