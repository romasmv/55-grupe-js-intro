
//1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą

let sum =0
for (let i = 5; i <= 15; i++) {
    sum = i + sum
}
console.log(sum)

console.log('--------------');
console.clear();

//2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną

let text = 'Vakaras'   
for (let i = 0; i < text.length; i++) {
console.log(text[i]);
}
console.log('--------------');
console.clear();

//3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}
console.log('--------------');
console.clear();

//4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į ekraną išvestų žodį ‘BOOM’

for (let i = 5; i >= 0; i--) {
if (i === 0) { 
   console.log('BOOM');
   
}
 else console.log(i)  
}
console.log('--------------');
console.clear();

//5. Parašykite for ciklą, kuris i console sudėtų visus lyginius skaičius nuo 3 iki 18

for (let i = 3; i < 18; i++) {
    if (i%2===0) {
        console.log(i)
    } ;
}

console.log('--------------');
console.clear();

//6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.

let sarasas = [5, 6, 7]
for (let i = 0; i < sarasas.length; i++) {
    console.log(sarasas[i])
} ;

console.log('--------------');
console.clear();


//7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano vardas - ’ console log eilutės pradžioje

let varduSarasas = ['Antanas', 'Jonas', 'Petras']
for (let i = 0; i < varduSarasas.length; i++) {
    console.log(`Mano vardas - ${varduSarasas[i]}`)
}

console.log('--------------');
console.clear();

//8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.


let sarasas1 = [5,'Antanas', 6,'Jonas','Petras', 7];
for (let i = 0; i < sarasas1.length; i++) 
    {
        if (typeof sarasas1[i] === "number"){
            console.log(sarasas1[i]);
        }
    }
    
console.log('--------------');
console.clear();

//9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki pirmo  


let sarasas2 = [5, 6, 7]
for (let i = sarasas2.length-1; i >= 0; i--) {
    console.log(sarasas2[i])
}

console.log('--------------');
console.clear();  

// 10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500)

let skaiciai = [3, 1, 7, 10, 50, 100, 8, 200, 500, 15];  // isgalvotas sarasas 
let piniguReiksmes = [1, 2, 5, 10, 20, 50, 100, 200, 500]; // pinigu reiksmes sarasas
for (let i = 0; i < skaiciai.length; i++) {
    if (piniguReiksmes.includes(skaiciai[i])) {
        console.log(skaiciai[i]);
    }
}

console.log('--------------'); 
console.clear(); 

//11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį Žodi, kurio reikšmė yra ‘Labas’

let sarasoRaides = [ 'L', 'a', 'b', 'a', 's'];
let norimaReiksme = [];
for (let i = 0; i < sarasoRaides.length; i++) {
    norimaReiksme += sarasoRaides[i] 
}
console.log(norimaReiksme);  

console.log('--------------');
console.clear();  
//12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio "Programavimas" raidę.

let duotasZodis = 'Programavimas';
for (let i = 0; i < duotasZodis.length; i++) {
    console.log(duotasZodis[i]) 
}
console.log('--------------');
console.clear(); 
//13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į consolę reikšmę
let daugyba =2;
for (let i = 3; i <= 10; i++) {
    daugyba = daugyba * i
}
console.log(daugyba)

console.log('--------------');
console.clear(); 
//14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą

let sum3 = 0;
for (let i = 1; i < 30; i++) {
    if ( i%2 ===1 ){
        sum3= sum3 + i
    }
}
console.log(sum3);

console.log('--------------');
console.clear(); 

//15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10

for (let i = 20; i >= 10; i--) {
    console.log(i);
}

console.log('--------------');
console.clear(); 

//16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’] elementus vienas po kito nuo galo iki pradžios
let raidėsAtbulai = ['s', 'a', 'b', 'a', 'L'];
let raidėsAtbulairezultatas = [];

for (let i = raidėsAtbulai.length -1; i>=0; i--) {
    raidėsAtbulairezultatas = raidėsAtbulai[i]
    console.log(raidėsAtbulairezultatas);
}


console.log('--------------'); 
console.clear();
//17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = 's'mivamargorP’ atskiras raides vieną po kitos

let raidėsAtbulai1 = 'samivamargorP';
let raidėsAtbulairezultatas1 = [];

for (let i = raidėsAtbulai1.length -1; i>=0; i--) {
    raidėsAtbulairezultatas1 = raidėsAtbulai1[i]
    console.log(raidėsAtbulairezultatas1);
}

console.log('--------------'); 
console.clear();
//18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi iš 7, papildomai į consolę yra išvedamas žodis 'l'cky’
for (let i = 1; i < 100; i++) {
    if (i%7===0) {
        console.log('lacky');
    } else {
        console.log(i)}
    }

console.log('--------------'); 
console.clear();

//19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)

let viengubasSarasas = [2, 3, 6, 8];
let dvigubasSarasas = '';

for (let i = 0; i < viengubasSarasas.length; i++) {
    dvigubasSarasas += (viengubasSarasas[i] * 2);
    if (i < viengubasSarasas.length - 1)  { // Patikriname, kad po paskutinio elemento nedetu kablelio 
        dvigubasSarasas += ', '; // Pridedame kablelį ir tarpą tarp reikšmių
    }
}

console.log(dvigubasSarasas); 

console.log('--------------'); 
console.clear();

//20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų visus skaičius, kurie yra mažesni už 100
let daugSkaiciu =[2, 14, 10, 1000, 503, 8, 0];
for (let i = 0; i < daugSkaiciu.length; i++) {
    if (daugSkaiciu[i]<100) {
        console.log(daugSkaiciu[i])
    }
}

console.log('--------------'); 
console.clear();
//21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra

let zodisA = 'abrakadabra';
let kiekRaidziuA =0;
for (let i =0; i < zodisA.length; i++) {
    if (zodisA[i]==='a') {
        kiekRaidziuA += 1
    }
    
}
console.log(kiekRaidziuA); 

console.log('--------------'); 
console.clear();
//22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14] elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą.

let sarasas3 = [2, 8, 88, 14];
let pridesiuSkaiciu = '';
for (let i = 0; i <sarasas3.length; i++) {
    pridesiuSkaiciu += sarasas3[i]+2;
    if (i<sarasas3.length-1) {
        pridesiuSkaiciu += ', ';
    }
}
console.log(pridesiuSkaiciu);

console.log('--------------'); 
console.clear();

//23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome yra raidžių e

let zodisE = 'Nebeprisikiškiakopūstėliaudavome';
let kiekRaidziuE =0;
for (let i =0; i < zodisE.length; i++) {
    if (zodisE[i]==='e') {
        kiekRaidziuE += 1
    }
    
}
console.log(kiekRaidziuE); 

console.log('--------------'); 
console.clear();
//24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra: PVZ: Žodžiui Keletą būtų išvedama: e raidė yra 2 vietoje e raidė yra 4 vietoje

let zodisB = 'Nebeprisikiškiakopūstėliaudavome';
for (let i =0; i < zodisB.length; i++) {
    if (zodisB[i]==='e') {
        console.log(`e raidė yra ${[i]} vietoje` );
          }
    }
console.log('--------------'); 
console.clear();

//25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.

let lobis = 150;

for (let i = 20; i >= 15; i--) {
    console.log(`${lobis} - ${i} = ${lobis - i}`); 
    lobis -= i; 
}

console.log('--------------'); 
console.clear();

//Funkcijos

//1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.


function sum1(a, b) {
    return a+b; 
}

const e = sum1(2, 2);
console.log(e);

console.log('--------------'); 
console.clear();

//2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą.

function dviejuSkaiciuSkirtumas(c,d) {
    const resultatas1 = c-d
    return resultatas1
}
console.log(dviejuSkaiciuSkirtumas(5,3));

console.log('--------------'); 
console.clear();

//3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą.

function dviejuSkaiciuSandauga(c,d) {
    const resultatas2 = c*d
    return resultatas2
}
console.log(dviejuSkaiciuSandauga(5,3));

console.log('--------------'); 
console.clear();
//4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą.

function dviejuSkaiciuDalyba(c,d) {
    const resultatas3 = c/d
    return resultatas3
}
console.log(dviejuSkaiciuDalyba(9,3));

console.log('--------------'); 
console.clear();

//5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį.

function dviejuSkaiciuVidurkis(c,d) {
    return (c+d)/2
}
console.log(dviejuSkaiciuVidurkis(10,6));

console.log('--------------'); 
console.clear();

//6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas.


function arTeigiamas(e) {
    if (e>0){
        return "teigiamas" 
    } else {
        return "neigiamas"
    }
}
console.log(arTeigiamas(3));

console.log('--------------'); 
console.clear();

//7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis.

function arLyginis(e) {
    if (e%2===0){
        return "lyginis" 
    } else {
        return "nelyginis"
    }
}
console.log(arLyginis(9));

console.log('--------------'); 
console.clear();

//8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis.

function arNelyginis(e) {
    if (e%2===1){
        return "nelyginis" 
    } else {
        return "lyginis"
    }
}
console.log(arNelyginis(9));

console.log('--------------'); 
console.clear();

//9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos.

function arDalinasiIsPenkiu(e) {
if (e%5===0){
        return "Dalinasi" 
    } else {
        return "Nesidalina"
    }
}
console.log(arDalinasiIsPenkiu(15));

console.log('--------------'); 
console.clear();

//10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.

function arLygusSimtui(e) {
    if (e===100){
        return "Lygus100" 
    }   else {
        return "Nelygus100"
    }
}
console.log(arLygusSimtui(15));
    
console.log('--------------'); 
console.clear();

//11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10.

function arDidesnisUzDesimt(e) {
    if (e>10){
        return "Didesnis Uz 10" 
    }   else {
        return "Mazesnis Uz 10"
    }
}
console.log(arDidesnisUzDesimt(52));
    
console.log('--------------'); 
console.clear();
//12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių.

function arDidesnisIsDvieju(e,d) {
    if (e>d){
        return e
    }   else {
        return d
    }
}
console.log(arDidesnisIsDvieju(2,14));
    
console.log('--------------'); 
console.clear();

//13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių.

function arMazesnisIsDvieju(e,d) {
    if (e<d){
        return e
    }   else {
        return d
    }
}
console.log(arMazesnisIsDvieju(20,1));
    
console.log('--------------'); 
console.clear();

//14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi.

function arTrysVienodi(e,d,f) {
    if (e===d&&d===f){
        return "vienodi"
    }   else {
        return "nevienodi"
    }
}
console.log(arTrysVienodi(4,3,3));
    
console.log('--------------'); 
console.clear();

//15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs.

function arDuVienodi(e,d) {
    if (e===d){
        return "vienodi"
    }   else {
        return "nevienodi"
    }
}
console.log(arDuVienodi(3,3));
    
console.log('--------------'); 
console.clear();

//16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10.

function arSkaiciusTarp(e) {
    if (e>1&&e<10){
        return "Taip skaičius yra tarp 1 ir 10."
    }   else {
        return "Ne skaičius nera tarp 1 ir 10."
    }
}
console.log(arSkaiciusTarp(11));
    
console.log('--------------'); 
console.clear();

//17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100.

function arSkaiciusTarp2(e) {
    if (e>50&&e<100){
        return "Taip skaičius yra tarp 50 ir 100."
    }   else {
        return "Ne skaičius nera tarp 50 ir 100."
    }
}
console.log(arSkaiciusTarp2(55));
    
console.log('--------------'); 
console.clear();

//18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas.

function arTeigiamas(e) {
    if (e<0){
        return "neigiamas"
    } else {
        return "teigiamas"
    }
}
console.log(arTeigiamas(-3));

console.log('--------------'); 
console.clear();

//19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo skaičiaus, kurį nusiunčiate funkcijai.

function arTeigiamas(e) {
    if (e<0){
        return "neigiamas"
    } else {
        return "teigiamas"
    }
}
console.log(arTeigiamas(-3));

console.log('--------------'); 
console.clear();

//20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis).

function arDidesnisUz18(skaicius) {
    if (skaicius>18){
        return "Taip didesnis nei 18"
    } else {
        return "Mazesnis nei 18"
    }
}
console.log(arDidesnisUz18(20));

console.log('--------------'); 
console.clear();

//21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.

function arZodisLabas(zodis) {
    if (zodis==="labas"){
        return "Taip perduotas žodis yra „labas“."
    } else {
        return "Ne žodis yra „labas“ neperduotas."
    }
}
console.log(arZodisLabas("labas"));

console.log('--------------'); 
console.clear();

//22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.

function arZodisTrumpesnis(zodis) {
    if (zodis.length>5){
        return "Taip žodis yra ilgesnis nei 5 simboliai.."
    } else {
        return "Ne žodis yra trumpesnis nei 5 simboliai."
    }
}
console.log(arZodisTrumpesnis("laba"));

console.log('--------------'); 
console.clear();

//23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.


function pirmojiRaide(zodis) {
   return zodis[0]
}
console.log(pirmojiRaide('labas'));

console.log('--------------'); 
console.clear();

//24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.


function paskutineRaide(zodis) {
    return zodis[zodis.length-1]
 }
 console.log(paskutineRaide('labas'));
 
 console.log('--------------'); 
 console.clear();

 //25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.

 function pirmojiRaideYraA(zodis) {
    if (zodis[0] === 'A') {
        return  'Taip žodis prasideda raide A'
    } else {
        return `Ne žodis prasideda raide ${zodis[0]}`
    }
    
 }
 console.log(pirmojiRaideYraA('Arbuzas'));
 console.log(pirmojiRaideYraA('Bananas'));
 
 console.log('--------------'); 
 console.clear();
 
 //26. Parašykite funkciją, kuri grąžina žodžio ilgį.

 function grazinaZodzioIlgi(zodis) {
    return zodis.length
 }
 console.log(grazinaZodzioIlgi('labas'));
 
 console.log('--------------'); 
 console.clear();
 
 //27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba trumpesnis

 function paliginaZodzioIlgi(zodis) {
    if (zodis.length>=7) {
        return `Ilgas, jo ilgis ${zodis.length} raidziu.`
    } else {
        return `Trumpas, nes jo ilgis tik ${zodis.length} raidziu.`
    }
    
 }
 console.log(paliginaZodzioIlgi('labasrytas'));
 console.log(paliginaZodzioIlgi('labuka'));
 
 console.log('--------------'); 
 console.clear();
 
 //28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.
 
 function arZodziaiVienodi(zodis1,zodis2) {
    if (zodis1===zodis2) {
        return `Taip du žodžiai yra vienodi`
    } else {
        return `Ne du žodžiai nera vienodi`
    }
    
 }
 console.log(arZodziaiVienodi('labas','labas'));
 console.log(arZodziaiVienodi('labas','rytas'));
 
 console.log('--------------'); 
 console.clear();
 
 //29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos valandos (0–23). Diena 7-19 (kai saule pakilus ), Naktis 19 -7 (kai saule nusileido)
 
 function dienaArNaktis(laikas) {
    if (laikas>=7&&laikas<=19) {
        return 'Diena'
    } else {
        return 'Naktis'
    }
    
 }
 console.log(dienaArNaktis(8));
 console.log(dienaArNaktis(20));
 
 console.log('--------------'); 
console.clear();
 
/*
30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi:
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’  ???
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’
c. Skaičius yra nulis, išveda į console ‘esu nulis’
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas
*/

function vienaFunkcija(skaicius) {
    if (skaicius===0) {               //Skaičius yra nulis, išveda į console ‘esu nulis’
        return  'esu nulis, esu teigiamas'
    } else if (skaicius>100) {        //Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
        return  'didžiulis skaičius, esu teigiamas'
    }  else if (skaicius>0 && skaicius<100) {       //Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas
        return  'esu mažiukas, esu teigimas' 
    } else {
        return  'esu neigiamas,'
    } 
}
console.log(vienaFunkcija(5));
console.log(vienaFunkcija(-3));
console.log(vienaFunkcija(0));
console.log(vienaFunkcija(102));
console.log(vienaFunkcija(10));


