

function empty (){
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'labas!';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name){
    // return 'labas,'+name+'!';
    return`Labas, ${name}`;
}
 console.log(hiPerson('Jonas'));
 console.log(hiPerson('Maryte'));
 console.log(hiPerson('Petras'));
 console.log(hiPerson('Onas'));
 console.log();
 
// 2+2 = 4
// 7+5 = 12 
function sum(a, b) {
   return a+b; 
}

const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f);


const g = sum(-7, 15);
console.log(g);

console.clear();

// 100 -> 121 Eur
// 200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVat(price) {
   const updatedPrice = price*1.21
    return updatedPrice + ' Eur';
}

const p1 = priceWithVat(100);
console.log(p1);

const p2 = priceWithVat(200);
console.log(p2);

const p3 = priceWithVat(73);
console.log(p3);
 
console.clear()

// Jonas -> Zodis "jonas" yra sudarytas is 5 raidziu.
// Maryte -> Zodis "Maryte" yra sudarytas is 6 raidziu.
// Petras -> Zodis "Petras" yra sudarytas is 6 raidziu.
// Ona -> Zodis "Ona" yra sudarytas is 3 raidziu.

function nameLenght(name) {
    const size = name.length;
    return `Zodis "${name}" yra sudarytas is ${size} raidziu.`; 
}

const nl1 = nameLenght('Jonas');
const nl2 = nameLenght('Maryte');
const nl3 = nameLenght('Petras');
const nl4 = nameLenght('Ona');
console.log(nl1);
console.log(nl2);
console.log(nl3);
console.log(nl4);

console.clear();

 // 5 -> gautas skaicius: 5.
 //-13 -> Gautas skaicius: -13.
 // 777 -> Gautas skaicius: 777.

 function gotNumber(n) {
   // return 'Gautas skaicius:'+ n +'.';
   return`Gautas skaicius: ${n}.`;
 }
 
 const gn1 = gotNumber(5);
 const gn2 = gotNumber(-13);
 const gn3 = gotNumber(777);

 console.log(gn1);
 console.log(gn2);
 console.log(gn3);

 console.clear();

 //2, 2 -> 2+2=4
 //7,5 -> 7+5=12
 //-7, 15 -> -7+15=8

function sum(a, b) {
    const result = a+b;
    return`${a}+${b}=${result}`;
}
 
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));

console.clear();

// ND - perdaryti analogiskai su -, * ir / operacijomis


//Namu Darbai ;)

// funkcija su -

function sum(c, d) {
    const result = c-d;
    return`${c}-${d}=${result}`;
}
 
console.log(sum(5, 2));
console.log(sum(7, 3));
console.log(sum(-7, 5));

console.clear();

// funkcija su *

function sum(e, f) {
    const result = e*f;
    return`${e}*${f}=${result}`;
}
 
console.log(sum(2, 9));
console.log(sum(10, 1));
console.log(sum(-7, -6));

console.clear();

// funkcija su /

function sum(g, t) {
    const result = g/t;
    return`${g}/${t}=${result}`;
}
 
console.log(sum(9, 3));
console.log(sum(14, 1));
console.log(sum(36, -6));

