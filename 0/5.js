const users = [
    { name: "Kruz", age: 18 },
    { name: "mike", age: 19 },
    { name: "zedd", age: 20 },
];

// const modUser = users.map((user) => user);
// console.log(modUser);

// const modUserName = users.map((user) => user.name);
// console.log(modUserName);

// const modUserAge = users.map((user) => (user.age = 19));
// console.log(modUserAge);

const filterUser = users.filter((user) => user.age === 18);
console.log(filterUser);
