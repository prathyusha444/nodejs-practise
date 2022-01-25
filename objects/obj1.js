const person = {
    name:   'Raj',
    age : 30,
    ciyt : 'HYD'
}

console.log(person.name);
console.log(person.age);
console.log(person['age']);

person.pincode  = 560068;
console.log(person);

person['degree'] = 'Btech';
console.log(person);

person.degree = 'Mtech';
console.log(person);

delete person.degree;
console.log(person);

for (let i in person) {
    console.log(`i value is : ${i}`);
    console.log(`person[i] is  : ${person[i]}`);
}