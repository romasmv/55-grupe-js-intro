
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
const mokinys2 = ['Rima', 8, 9, 10, 4, 7];
const mokinys3 = ['Gabija', 3, 3, 3, 4, 4];

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
mokinioVidurkis(mokinys1)
mokinioVidurkis(mokinys2)
mokinioVidurkis(mokinys3)