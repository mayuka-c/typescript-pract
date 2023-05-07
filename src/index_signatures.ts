// Index Signatures

interface TransactionObj {
    [index: string]: number // Index signature
    Pizza: number
    Books: number
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza) // -10
console.log(todaysTransactions['Pizza']) // -10

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]) // -10 (To do this need to add index signature)

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        console.log(transaction)
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions)) // 35

//////////////////////////////////////////
interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}

const stud: Student = {
    name: "Doug",
    GPA: 3.4,
    classes: [100, 200]
}

// It allows to access property which does not exist
// console.log(stud.test) // undefined (since index signatures is commented, we cannot access undefined prop)

// Here we will use assertions to loop as we have commented index signatures
for (const key in stud) {
    console.log(`${key}: ${stud[key as keyof Student]}`) // Student type as we know object is of that type
    console.log(`${key}: ${stud[key as keyof typeof stud]}`) // To implicitly take object Type if we dont know the object type
}

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(stud, 'name')

///////////////////////////////////////////////
// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

// utility type Record
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}