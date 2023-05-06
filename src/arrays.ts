let fruitArr = ["Apple", "Mango", "Jackfruit"]
let mixedData = ['EVH', 1984, true]

// fruitArr can have only string types and if we add any other type, compiler will not allow
// mixedData can have either string|number|boolean values in it

fruitArr[0] = "Banana"
mixedData[0] = false

console.log(fruitArr) // ['Banana', 'Mango', 'Jackfruit']
console.log(mixedData) //  [false, 1984, true]

let test = [] // any data type list

let bands: string[] = [] // string data type list
bands.push("Van Halen")
console.log(bands) // ['Van Halen']

// Tuple
let myTuple: [string, number, boolean] = ["Apple", 20, true]
console.log(myTuple) // ['Apple', 20, true]
myTuple[0] = "Mango"
console.log(myTuple) // ['Mango', 20, true]