"use strict";
// Index signature and keyof assertions
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 40,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
// console.log(todaysTransactions[prop])
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Paul",
    GPA: 3.4,
    classes: [20, 40],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 320,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
