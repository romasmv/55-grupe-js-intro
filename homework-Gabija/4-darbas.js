
//1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą

let sum =0
for (let i = 5; i <= 15; i++) {
    sum = i + sum
}
console.log(sum)

console.log('--------------');

//2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną

let text = 'Vakaras'   
for (let i = 0; i < text.length; i++) {
console.log(text[i]);
}
console.log('--------------');

//3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}
console.log('--------------');

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

//6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.

let sarasas = [5, 6, 7]
for (let i = 0; i < sarasas.length; i++) {
    console.log(sarasas[i])
} ;

console.log('--------------');


//7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano vardas - ’ console log eilutės pradžioje

let varduSarasas = ['Antanas', 'Jonas', 'Petras']
for (let i = 0; i < varduSarasas.length; i++) {
    console.log(`Mano vardas - ${varduSarasas[i]}`)
}

console.log('--------------');

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
    
    
    



/*
10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500)
11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį Žodis, kurio reikšmė yra ‘Labas’
12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas raidę.
13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į consolę reikšmę
14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10
16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’] elementus vienas po kito nuo galo iki pradžios
17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = ‘samivamargorP’ atskiras raides vieną po kitos
18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’
19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)
20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų visus skaičius, kurie yra mažesni už 100
21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra
22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14] elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą.
23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome yra raidžių e
24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra: PVZ: Žodžiui Keletą būtų išvedama: e raidė yra 2 vietoje e raidė yra 4 vietoje
25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.


Funkcijos


1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.
2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą.
3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą.
4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą.
5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį.
6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas.
7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis.
8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis.
9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos.
10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.
11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10.
12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių.
13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių.
14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi.
15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs.
16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10.
17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100.
18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas.
19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo skaičiaus, kurį nusiunčiate funkcijai.
20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis).
21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.
22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.
23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.
24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.
25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.
26. Parašykite funkciją, kuri grąžina žodžio ilgį.
27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba trumpesnis
28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.
29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos valandos (0–23).
30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi:
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’
c. Skaičius yra nulis, išveda į console ‘esu nulis’
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas


*/