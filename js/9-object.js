/*
OBJECT - objektas, (kituosekalbose siek tiek panasus i : hashmap, dictionary)
*/

const empty = {};
console.log(empty);

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(person);

// Sveiki, mano vardas X.
console.log(`Sveiki, mano vardas ${person['name']}.`);

// Man yra X metu.
console.log(`Man yra ${person['age']} metu.`);

// Standartine sintakse, kaip paimti reiksme
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

// Supaprastinta sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = {
    'color': 'red',  // VISI RAKTAI YRA STRINGAI
    '5': 77,
    '55': 7777,
    'is married': true,
};


console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);
console.log(demo['55']);
console.log(demo[55]);
console.log(demo['is married']);

console.log(demo.color);

console.clear();

const pc = {
cpuCores: 8,
ram: 16,
diskSpace: 512,
diskType: 'ssd',
os: 'win10',
};

console.log(pc.cpuCores);

pc.ram= 32;
console.log(pc);

pc.os = 'win98';
console.log(pc);

// This PC has X cores.
const s1 = `This PC has ${pc.cpuCores} cores.`;
const s2 = `This PC has ${pc.cpuCores} cores.`;

console.log(s1);
console.log(s2);

console.clear();

const student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phoneNumbers: [],
    parents: [{
        name: 'Petras',
        age: 77,
        phoneNumbers: [111111111, 3333333333]
    },
{
    name: 'One',
    age:66,
    phoneNumbers: [22222222222, 44444444444]
},]
};

console.log(student.name);
console.log(student.phoneNumbers.length);
console.log(student.parents.length);
console.log(student.parents[0].name);
console.log(student.parents[1].name);
console.log(student.parents[1].phoneNumbers.length);
console.log(student.parents[1].phoneNumbers[1]);


console.clear();


const studentName1 = 'Jonas';
const studentAge1 = 99;
const studentIsMarried1 = true;
const studentName2 = 'Maryte';
const studentAge2 = 88;
const studentIsMarried2 = false;

//                name, age, isMarried
const student1 = ['Jonas', 99, true];
const student2 = ['Maryte', 88, false];
const student3 = ['Petras', false, 77];
const student4 = [true, 66, 'Ona'];

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const stud2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

console.log(stud1.name);
console.log(stud2.name);

















