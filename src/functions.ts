const mult = (a:number, b:number) => {
    return (a * b)
}

console.log(mult(3, 5)) // 15

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!') // "Hello!"
logMsg(mult(5,4)) // 20

let sub = function(c: number, d: number): number {
    return (c - d)
}

logMsg(sub(5,4)) // 1

// We can use either type or interface
type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }
 
let div: mathFunction = function (c, d) {
    return (c / d)
}

logMsg(div(5,4)) // 1.25

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2,3,2)) // 7
logMsg(addAll(2,3)) // 5
logMsg(sumAll(2,3)) // 7
logMsg(sumAll(2,3,2)) // 7
logMsg(sumAll(undefined, 3)) // 15

// Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4,5,6,7)) // 28

// createErr is of `never` type 
const createErr = (errMsg: string) => {
    throw new Error(errMsg)
}

// infinite is of `never` type if break was not there
const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 10) break
    }
}