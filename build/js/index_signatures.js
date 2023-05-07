"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // -10 (To do this need to add index signature)
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        console.log(transaction);
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions)); // 35
const stud = {
    name: "Doug",
    GPA: 3.4,
    classes: [100, 200]
};
// It allows to access property which does not exist
// console.log(stud.test) // undefined (since index signatures is commented, we cannot access undefined prop)
// Here we will use assertions to loop as we have commented index signatures
for (const key in stud) {
    console.log(`${key}: ${stud[key]}`); // Student type as we know object is of that type
    console.log(`${key}: ${stud[key]}`); // To implicitly take object Type if we dont know the object type
}
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(stud, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
