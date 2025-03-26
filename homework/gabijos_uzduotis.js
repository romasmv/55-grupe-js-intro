
//uzduotis 2: sukeisti a ir b reiksmes
let e = 5;
let d = 3;

let k;
k = e;
e = d;
d = k;
console.log(e,d);

// uzduotis 3: padarykite kad ekrane matytume 555. a, b ir c turi islikti penketais

let a = 5;
let b = 5;
let c = 5;

a = '5';
b = '5';
c = '5';
console.log(a+b+c);


// Funkcijos užduotis

const mokinys1 = ['Tadas', 8, 9, 10, 4, 7];
const mokinys2 = ['Rima', 3, 3, 5, 5, 1];
const mokinys3 = ['Gabija', 1, 1, 1, 1, 1];

function mokinioVidurkis (mokinys)
{ 
    console.log('Mokinio varadas:' + mokinys[0])
    let vidurkis = (mokinys[1] +mokinys[2] + mokinys[3] + mokinys[4] + mokinys[5])/5
    if (vidurkis>=3.5)
    {
        console.log(mokinys[0] + ' išlaike. Jo vidurkis:' + vidurkis);    
    }
    else {
        let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + ' neišlaike. Jo dabartinis vidurkis:' + vidurkis);
        if (vidurkisNaujas>=3.5) {
            console.log(mokinys[0] + ' išlaikytu kursą jeigu gautų vieną dešimtukq');     
        } 
    }
}
mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);

 // uzduotis 2

 const film1 = ['The Matrix', 'veiksmo', 8];
 const film2 = ['Fores Gump', 'nuotikiu', 9 ];
 const film3 = ['Fast and Furiuos', 'veiksmo', 10 ];
 const film4 = ['Prarastasis miestas Z', 'nuotikiu', 7 ];
 const film5 = ['The Notebook', 'romantinis', 10];

 const megstZanras = 'veiksmo';
 const norimasVert = 8;

 function kasManTinka (film){
    if (film[1] ===  megstZanras && film[2] >= norimasVert) {
        return `Man patinktu ${film[1]} filmas: ${film[0]} `
    } else {return 'Netinka'}
      }

console.log(kasManTinka(film1));
console.log(kasManTinka(film2));
console.log(kasManTinka(film3));
console.log(kasManTinka(film4));
console.log(kasManTinka(film5));





const skaiciai1 = [1, 2, 3]
function addNum(sk) {
    return (sk[0]+sk[1]+sk[2]);
}

function tellNum(sk) {
    console.log(sk[0]);
    
}
let sum = addNum(skaiciai1);
console.log(addNum(skaiciai1));

tellNum(skaiciai1);

console.clear();

// Užduotis su IF ir sąrašais (array)

// 1. Patikrinkite, ar sąraše yra tam tikras skaičius.
     // a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.

const sarasas1 = [1, 2, 3, 4];
function tikrintiSarasa(sarasas1){
if (sarasas1.includes(3) ) {
    return 'Taip yra 3'}
 else {return 'Nera'};
}

console.log(tikrintiSarasa(sarasas1))

// 2. Patikrinkite, ar masyvas tuščias.
     // a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias.
   
 

