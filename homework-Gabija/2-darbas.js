
// Užduotis su IF ir sąrašais (array)

// 1. Patikrinkite, ar sąraše yra tam tikras skaičius.
     // a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.

let sarasas1 = [1, 2, 3, 4];
function tikrintiSarasa(sarasas1){
if (sarasas1.includes(3) ) {
    return 'Taip yra 3'}
 else {return 'Nera'};
}
console.log(tikrintiSarasa(sarasas1))



// 2. Patikrinkite, ar masyvas tuščias.
     // a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias.
   
 let sarasas2 = [];
 if (sarasas2.length === 0) {
    console.log('Taip masyvas tuščias');}
    else { ('Masyvas Nera tuščias')
    };

//   3. Nustatyti, ar sąraše yra teigiamas skaičius.
     // a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių.

let sarasas3 = [1, -2, 3, -4];

if (sarasas3[0] > 0 || sarasas3[1] > 0 || sarasas3[2] > 0 || sarasas3[3] > 0) {
    console.log('Taip sąraše yra teigiamas skaičius'); 
} else { console.log('NE sąraše nera teigiamas skaičius');

}

// 4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.
     // a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai.

     let sarasas4 = [2, 4, 6];

     if (sarasas4[0] % 2===0 && sarasas4[1] % 2 ===0 && sarasas4[2] % 2 ===0 ) {
         console.log('Taip visi sąrašo skaičiai yra lyginiai'); 
     } else { console.log('NE visi sąrašo skaičiai nera lyginiai');}

//  5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas.
     // a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas.   

     let sarasas5 = [3, 5, -2];

     if (sarasas5[0] < 0 || sarasas5[1] < 0 || sarasas5[2] < 0 ) {
         console.log('Taip sąraše [3, 5, -2] yra neigiamas skaicius'); 
     } else { console.log('NE sąraše [3, 5, -2] nera neigiamo skaiciaus');}

//    6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį.
     // a. Pavyzdys: Patikrinkite, ar pirmas skaičius sąraše [1, 3, 5] yra didesnis už paskutinį.

     let sarasas6 = [1, 3, 5];

     if (sarasas6[0] > sarasas6[2]) {
         console.log('Pirmas skaičius sąraše yra didesnis už paskutinį'); 
     } else { console.log('NE pirmas skaičius sąraše nera didesnis už paskutinį');}

//    7. Patikrinkite, ar sąrašo ilgis didesnis už 5.
     // a. Pavyzdys: Patikrinkite, ar sąrašo [1, 2, 3, 4, 5, 6] ilgis yra didesnis nei 5.

     let sarasas7 = [1, 2, 3, 4, 5, 7];

     if (sarasas7.length > 5 ) {
         console.log('Taip sąrašo ilgis yra didesnis nei 5'); 
     } else { console.log('NE sąrašo ilgis yra mažesnis nei 5');}

//   8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji
    //a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai.

    let sarasas8 = ["obuolys", "bananas", "vyšnia"];

    if (typeof sarasas8[0] === "string" && typeof sarasas8[1] ==="string" && typeof sarasas8[2] ==="string") {
        console.log('Taip sąraše yra tik teksto tipo kintamieji'); 
    } else { console.log('Ne sąraše yra ne tik teksto tipo kintamieji');}

//   9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10.
     //a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis nei 10.


     let sarasas9 = [2, 5, 12, 4];
     let didziausiasSkaicius = sarasas9[0];

     if(sarasas9[1] > didziausiasSkaicius) {
        didziausiasSkaicius = sarasas9[1];
     }
     if(sarasas9[2] > didziausiasSkaicius) {
        didziausiasSkaicius = sarasas9[2];
     }
     if(sarasas9[3] > didziausiasSkaicius) {
        didziausiasSkaicius = sarasas9[3];
     }

    if (didziausiasSkaicius > 10) {
        console.log("Didziausias skaicius didesnis uz 10")
    } else {
        console.log("Didziausias skaicius nera didesnis uz 10");
        
    } console.log (`didziausias skaicius sąraše: ${didziausiasSkaicius}`);
 


//   10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai.
     //a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2 elementus.

let sarasas10 = [2, 2, 2, 2, 2, 5, 6];
let skaicius = 2;
let kiekis = 0

if (sarasas10[0] === skaicius) {
    kiekis++;
  }
  if (sarasas10[1] === skaicius) {
    kiekis++;
  }
  if (sarasas10[2] === skaicius) {
    kiekis++;
  }
  if (sarasas10[3] === skaicius) {
    kiekis++;
  }
  if (sarasas10[4] === skaicius) {
    kiekis++;
  }
  if (sarasas10[5] === skaicius) {
    kiekis++;
  }
  
  if (kiekis > 3) {
    console.log("Yra daugiau nei 3 tokie patys skaičiai");
  } else {
    console.log("Nėra daugiau nei 3 tokie patys skaičiai");
  }

  console.log('--------------------');


       //  Užduotys su IF
//1. Patikrinkite, ar skaičius teigiamas.
       //a. Pavyzdys: Patikrinkite, ar skaičius = 3 yra teigiamas.

  let skaicius1 = 3;
  
  if (skaicius1 > 0) {
    console.log("Skaičius yra teigiamas");
  } else {
    console.log("Skaičius nėra teigiamas");
  }
  
// 2. Patikrinkite, ar skaičius dalijasi iš 5.
       // a. Pavyzdys: Pavyzdys: Patikrinkite, ar skaičius = 15 dalijasi iš 5.  
  
  let skaicius2 = 15;
  
  if (skaicius2 % 5 === 0) {
    console.log("Skaičius dalijasi iš 5");
  } else {
    console.log("Skaičius nesidalija iš 5");
  }
  
//  3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai.
      // a. Pavyzdys: Patikrinkite, ar eilutėje str = 'hello' yra daugiau nei 5 simboliai.
  
  let str = "hello";
  
  if (str.length > 5) {
    console.log("Tekstas ilgesnis nei 5 simboliai");
  } else {
    console.log("Tekstas yra 5 ar trumpesnis");
  }
//  4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų).
     // a. Pavyzdys: Patikrinkite, ar asmuo turi teisę balsuoti, jei jo amžius = 20 metų.
  
  let amzius4 = 20;
  
  if (amzius4 >= 18) {
    console.log("Asmuo turi teisę balsuoti");
  } else {
    console.log("Asmuo neturi teisės balsuoti");
  }

//  5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų).
     // a. Pavyzdys: Patikrinkite, ar amžius = 15 metų atitinka paauglio amžių..
  
  let amzius5 = 15;
  
  if (amzius5 >= 13 && amzius5 <= 19) {
    console.log("Asmuo yra paauglys");
  } else {
    console.log("Asmuo nėra paauglys");
  }
  
// 6. Patikrinkite, ar skaičius yra nelyginis.
     //a. Pavyzdys: Patikrinkite, ar skaičius = 7 yra nelyginis.
  
  let skaicius6 = 7;
  
  if (skaicius6 % 2 !== 0) {
    console.log("Skaičius yra nelyginis");
  } else {
    console.log("Skaičius yra lyginis");
  }
  
// 7. Patikrinkite, ar eilutė lygi "JavaScript".
     // a. Pavyzdys: Patikrinkite, teksto kintamasis = "JavaScript" yra lygus "JavaScript".
  
  let tekstas7 = "JavaScript";
  
  if (tekstas7 === "JavaScript") {
    console.log("Tekstas yra 'JavaScript'");
  } else {
    console.log("Tekstas nėra 'JavaScript'");
  }
  
  

  
// 8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai).
      //a. Pavyzdys: Patikrinkite, ar skaičius = 15 yra tarp 10 ir 20.
  
  let skaicius8 = 15;
  
  if (skaicius8 >= 10 && skaicius8 <= 20) {
    console.log("Skaičius yra tarp 10 ir 20");
  } else {
    console.log("Skaičius nėra tarp 10 ir 20");
  }
  

// 9. Patikrinkite, ar skaičius yra didesnis arba lygus 100.
     //a. Pavyzdys: Patikrinkite, ar skaičius = 150 yra didesnis arba lygus 100.
  
  let skaicius9 = 150;
  
  if (skaicius9 >= 100) {
    console.log("Skaičius yra didesnis arba lygus 100");
  } else {
    console.log("Skaičius mažesnis nei 100");
  }
  
 console.log('--------------------');

     
       // Užduotys su funkcijomis

//  1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas.
  
       function arTeigiamas(skaicius) {
    if (skaicius > 0) {
      console.log("Skaičius teigiamas");
    } else {
      console.log("Skaičius nėra teigiamas");
    }
  }
  arTeigiamas(5);
  
// 2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.
  
  function kvadratas(skaicius) {
    let rezultatas = skaicius * skaicius;
    console.log("Skaičiaus kvadratas:", rezultatas);
  }
  kvadratas(4);
  
// 3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį.

  function didesnis(a, b) {
    if (a > b) {
      console.log("Didesnis:", a);
    } else {
      console.log("Didesnis:", b);
    }
  }
  didesnis(7, 3);
  
// 4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.
  
  function tikrintiJavaScript(tekstas) {
    if (
      tekstas === "JavaScript" ||
      tekstas === "Tai yra JavaScript" ||
      tekstas === "Mokausi JavaScript"
    ) {
      console.log("Eilutėje yra žodis 'JavaScript'");
    } else {
      console.log("Eilutėje nėra žodžio 'JavaScript'");
    }
  }
  tikrintiJavaScript('JavaScript') 


// 5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.
  
  function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
      console.log("Skaičius yra lyginis");
    } else {
      console.log("Skaičius yra nelyginis");
    }
  }
  arLyginis(2);

/* 6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę 
     (jei skaičius teigiamas, išvestų neigiamą, jei yra gaunamas žodis tai žodį turi 
     parašyti atvirkčiai. Apsibrėžkite kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių!
     imkite vieną variantą kolkas) */

     function atvirksciaiReiksme(reiksme) {
      if (typeof reiksme === "number") {
        if (reiksme > 0) {
          console.log(-reiksme);
        } else {
          console.log(0 - reiksme);
        }
      } else if (typeof reiksme === "string") {
        if (reiksme.length === 4) { // žodis turi būti gaunamas  4 raidžių!
          let atvirkscias = "";
          for (let i = reiksme.length - 1; i >= 0; i--) {
            atvirkscias += reiksme[i];
          }
          console.log(atvirkscias);
        } else {
          console.log("Klaida: žodis turi būti 4 raidžių.");
        }
      } else {
        console.log("Klaida: įveskite skaičių arba žodį.");
      }
    }
    

    atvirksciaiReiksme(5); 
    atvirksciaiReiksme(-8); 
    atvirksciaiReiksme("vila"); 
    atvirksciaiReiksme("namas"); // žodis turi būti gaunamas  4 raidžių!

  
// 7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
    //a. Padaryti su sąrašo (array) tipo kintamuoju
  
  function plotasIsMasyvo(masyvas) {
    let ilgis = masyvas[0];
    let plotis = masyvas[1];
    let plotas = ilgis * plotis;
    console.log("Plotas:", plotas);
  }
  plotasIsMasyvo([5, 3])

     // b. Padaryti su keliais skaičių tipo kintamaisiais
  
  function plotasIlgisPlotis(ilgis, plotis) {
    let plotas = ilgis * plotis;
    console.log("Plotas:", plotas);
  }
  plotasIlgisPlotis(6, 3)
  

  // 8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.
  
  function dalijasiIs3(skaicius) {
    if (skaicius % 3 === 0) {
      console.log("Dalijasi iš 3");
    } else {
      console.log("Nesidalija iš 3");
    }
  }
  dalijasiIs3(9);

  
// 9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.
  
  function prasidedaA(tekstas) {
    if (tekstas[0] === "a" || tekstas[0] === "A") {
      console.log("Tekstas prasideda raide 'a'");
    } else {
      console.log("Tekstas neprasideda raide 'a'");
    }
  }
  prasidedaA("arbuzas")

  
// 10. Sukurkite funkciją trijų skaičių vidurkiui rasti.
  
  function vidurkis(a, b, c) {
    let suma = a + b + c;
    let vid = suma / 3;
    console.log("Vidurkis:", vid);
  }
  vidurkis(4, 5, 6);

  
// 11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį.
  
  function tekstoIlgis(tekstas) {
    let ilgis = tekstas.length;
    console.log("Teksto ilgis:", ilgis);
  }
  tekstoIlgis("labas")
  
// 12. Sukurkite funkciją dviem eilutėms sujungti
  
  function sujungtiEilutes(eil1, eil2) {
    let sujungta = eil1 + eil2;
    console.log("Sujungta eilutė:", sujungta);
  }
  sujungtiEilutes("Labas", " pasaulis")

  
//  13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai).
 
  function tarpReiksmiu(skaicius, nuo, iki) {
    if (skaicius >= nuo && skaicius <= iki) {
      console.log("Skaičius yra tarp reikšmių");
    } else {
      console.log("Skaičius nėra tarp reikšmių");
    }
  }
  tarpReiksmiu(15, 10, 20);






function arTeigiamsSkaicius(abs)
 {  if (abs<0)
        {return 'neigiamas skaicius';}
    else{
      return'teigiamas';
    }
  }

console.log(arTeigiamsSkaicius(6));
console.log(arTeigiamsSkaicius(-3));
console.log(arTeigiamsSkaicius('tekstas'));