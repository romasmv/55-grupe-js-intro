//1. Parašykite funkciją, kuri išvestų skaičiaus faktorialą (Faktorialas tai visu skaiciu nuo 1 iki n sandauga (n!) (pvz. 5! = 5*4*3*2*1 = 120).
function faktorialas(n) {
    let rezultatas = 1;
    for (let i = 1; i <= n; i++) {
        rezultatas *= i;
    }
    return rezultatas;
}

console.log(faktorialas(5)); // 120
console.clear();

//2. Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje

function kiekKartu(textas,raide){
    let result = 0;
    for (let i = 0; i < textas.length; i++) {
        if (textas[i] === raide) {
            result += 1
        }   
    }
    return result
} 
console.log(kiekKartu('ananasas','s'));
console.log(kiekKartu('ananasas','a'));
console.clear();


//3. Padarykite funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50
 function grazinaSkaicius(skaicius) {
 let rezultatoMasyvas = []; 
    for (let i = 0; i < skaicius; i++) {
    if ( i % 3 === 0 ) {
     rezultatoMasyvas += i;
     rezultatoMasyvas += ' ';
    }
    
 }
return rezultatoMasyvas
 }
console.log(grazinaSkaicius(25));
console.clear();


//4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas



//5. Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje

function kiekKartu(textas){
    let result = 0;
    for (let i = 0; i < textas.length; i++) {
        if (textas[i] === 'a'||textas[i] === 'e'|| textas[i] === 'i'|| textas[i] === 'o'|| textas[i] === 'u') {
            result += 1
        }   
    }
    return result
} 
console.log(kiekKartu('ananasas'));
console.log(kiekKartu('muse'));
console.log(kiekKartu('pabraukimais'));
console.clear();

//6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore)

function taisymas(text) {
    return text.split(' ').join('_')
}

console.log(taisymas('labas rytas Lietuva!'));
console.log(taisymas('kas tas faktorialas'));
console.clear();

//7. Sukurk funkciją, kuri padvigubina visus skaičius masyve

function dvigubina(array) {
    let newArray = [];
    for (const number of array){
        newArray.push(number*2)
    }
    return newArray
}
console.log(dvigubina([1,2,3,4]));
console.clear();

//8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje

function maxWord(text) {
    let zodziai =text.split(" ");
    let maxZodioIlgis = 0;
    let maxZodis = '';
    for (let i = 0; i < zodziai.length; i++) {
        if (zodziai[i].length > maxZodioIlgis){
            maxZodioIlgis = zodziai[i].length;
    maxZodis=zodziai[i];
}  

}
return `Ilgiausiai zodis sakinyje yra "${maxZodis}" jis turi ${maxZodioIlgis} raides ` 

}

console.log(maxWord('Labas rytas Lietuva !'));
console.clear();

//9. Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka


//10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7


//11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide


//12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą


//13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų reikšmių ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15, 6] )


//14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose yra raidė e