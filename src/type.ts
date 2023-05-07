// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type GuitarListType = {
    name: string
    active: boolean
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myApp: 'App' // myName can be assigned a value with only 'App'

let userName: 'App' | 'Mang' | 'Any'
userName = "Mang" // userName can be either 'App' | 'Mang' | 'Any'
