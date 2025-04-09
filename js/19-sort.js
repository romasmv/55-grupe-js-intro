
// .sort - surikiuoja masyvo elementus 
// su Stringais - pakeicia ju vietas, didzioji reide pirmiau paskui abeceles tvarka, mazoji reide paskui didziosios abeceles tvarka ['A','AAa','AAb' 'B', 'C', 'a', 'b','bcb','c']

/* 
people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
console.log(people);
*/

// su skaiciais - surikiuoja maziausias iki didziausio [0, 1, 11, 12, 2, 22, 23, 24, 3, 4, 42, 5]

/*
const numbers = [10, 2, 8, 4, 6];
numbers.sort((a, b) => a - b); // [2, 4, 6, 8, 10]- didejancia tvarka
console.log(numbers);

numbers.sort((a, b) => b - a); // [10, 8, 6, 4, 2] - mazejancia tvarka
console.log(numbers);*/


const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda'];
console.log(texts);

texts.sort();
console.log(texts);

const pseudo = ['d', 'b', 'ca', 'bf', 'ba', 'cc', 'db', 'baa', 'bac'];
pseudo.sort();

console.log(pseudo);

console.clear();

const numbers = [10, 2, 8, 8, 1, 12, 23, 4, 6];

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: false },
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: true },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
console.log(people);

people.sort((a, b) => a.isMarried > b.isMarried ? 1 : a.isMarried === b.isMarried ? 0 : -1);
console.log(people);








