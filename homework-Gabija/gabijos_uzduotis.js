
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
 
    console.clear()   

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

  console.clear()  
  // 1. Patikrinkite, ar skaičius teigiamas

  let skaicius1 = 3;
  
  if (skaicius1 > 0) {
    console.log("Skaičius yra teigiamas");
  } else {
    console.log("Skaičius nėra teigiamas");
  }
  
  

  
  //2. Patikrinkite, ar skaičius dalijasi iš 5
  
  let skaicius2 = 15;
  
  if (skaicius2 % 5 === 0) {
    console.log("Skaičius dalijasi iš 5");
  } else {
    console.log("Skaičius nesidalija iš 5");
  }
  
  

  
  //3. Patikrinkite, ar teksto ilgis didesnis nei 5 simboliai
  
  let str = "hello";
  
  if (str.length > 5) {
    console.log("Tekstas ilgesnis nei 5 simboliai");
  } else {
    console.log("Tekstas yra 5 ar trumpesnis");
  }
  
  

  
 // 4. Patikrinkite, ar asmuo turi teisę balsuoti (nuo 18 m.)
  
  let amzius4 = 20;
  
  if (amzius4 >= 18) {
    console.log("Asmuo turi teisę balsuoti");
  } else {
    console.log("Asmuo neturi teisės balsuoti");
  }
  
  

  
  //5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 m.)
  
  let amzius5 = 15;
  
  if (amzius5 >= 13 && amzius5 <= 19) {
    console.log("Asmuo yra paauglys");
  } else {
    console.log("Asmuo nėra paauglys");
  }
  
  

  
 // 6. Patikrinkite, ar skaičius yra nelyginis
  
  let skaicius6 = 7;
  
  if (skaicius6 % 2 !== 0) {
    console.log("Skaičius yra nelyginis");
  } else {
    console.log("Skaičius yra lyginis");
  }
  
  

  
 // 7. Patikrinkite, ar eilutė lygi "JavaScript"
  
  let tekstas7 = "JavaScript";
  
  if (tekstas7 === "JavaScript") {
    console.log("Tekstas yra 'JavaScript'");
  } else {
    console.log("Tekstas nėra 'JavaScript'");
  }
  
  

  
 // 8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai)
  
  let skaicius8 = 15;
  
  if (skaicius8 >= 10 && skaicius8 <= 20) {
    console.log("Skaičius yra tarp 10 ir 20");
  } else {
    console.log("Skaičius nėra tarp 10 ir 20");
  }
  
  

  
 // 9. Patikrinkite, ar skaičius yra didesnis arba lygus 100
  
  let skaicius9 = 150;
  
  if (skaicius9 >= 100) {
    console.log("Skaičius yra didesnis arba lygus 100");
  } else {
    console.log("Skaičius mažesnis nei 100");
  }
  

  
  console.clear();

 
  //1. Patikrinkite, ar skaičius teigiamas
  function arTeigiamas(skaicius) {
    if (skaicius > 0) {
      console.log("Skaičius teigiamas");
    } else {
      console.log("Skaičius nėra teigiamas");
    }
  }
  arTeigiamas(5);
  
  
  
  
 // 2. Funkcija: skaičiaus kvadratas
  
  function kvadratas(skaicius) {
    let rezultatas = skaicius * skaicius;
    console.log("Skaičiaus kvadratas:", rezultatas);
  }
  kvadratas(4);
  
  
  
 //3. Funkcija: kuris iš dviejų skaičių didesnis
  
  function didesnis(a, b) {
    if (a > b) {
      console.log("Didesnis:", a);
    } else {
      console.log("Didesnis:", b);
    }
  }
  didesnis(7, 3);
  
  
  
  //4. Funkcija: ar tekste yra žodis „JavaScript“ (paprastai)
  
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

  //5. Funkcija: ar skaičius lyginis
  
  function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
      console.log("Skaičius yra lyginis");
    } else {
      console.log("Skaičius yra nelyginis");
    }
  }
  arLyginis(2);

 // 6. Funkcija: išvesti priešingą reikšmę

  function priesingaReiksme(ivestis) {
    if (typeof ivestis === "number") {
      console.log(-ivestis);
    } else {
      console.log("Tai nėra skaičius");
    }
  }
  priesingaReiksme(10);

  
 // 7a. Funkcija: stačiakampio plotas iš masyvo
  
  function plotasIsMasyvo(masyvas) {
    let ilgis = masyvas[0];
    let plotis = masyvas[1];
    let plotas = ilgis * plotis;
    console.log("Plotas:", plotas);
  }
  plotasIsMasyvo([5, 3])

  
  //7b. Funkcija: stačiakampio plotas iš dviejų kintamųjų
  
  function plotasIlgisPlotis(ilgis, plotis) {
    let plotas = ilgis * plotis;
    console.log("Plotas:", plotas);
  }
  plotasIlgisPlotis(6, 3)
  
 // 8. Funkcija: ar skaičius dalijasi iš 3
  
  function dalijasiIs3(skaicius) {
    if (skaicius % 3 === 0) {
      console.log("Dalijasi iš 3");
    } else {
      console.log("Nesidalija iš 3");
    }
  }
  dalijasiIs3(9);

  
 // 9. Funkcija: ar tekstas prasideda raide „a“
  
  function prasidedaA(tekstas) {
    if (tekstas[0] === "a" || tekstas[0] === "A") {
      console.log("Tekstas prasideda raide 'a'");
    } else {
      console.log("Tekstas neprasideda raide 'a'");
    }
  }
  prasidedaA("arbuzas")

  
 // 10. Funkcija: trijų skaičių vidurkis
  
  function vidurkis(a, b, c) {
    let suma = a + b + c;
    let vid = suma / 3;
    console.log("Vidurkis:", vid);
  }
  vidurkis(4, 5, 6);

  
 // 11. Funkcija: teksto ilgis
  
  function tekstoIlgis(tekstas) {
    let ilgis = tekstas.length;
    console.log("Teksto ilgis:", ilgis);
  }
  tekstoIlgis("labas")
  
 // 12. Funkcija: sujungti dvi eilutes
  
  function sujungtiEilutes(eil1, eil2) {
    let sujungta = eil1 + eil2;
    console.log("Sujungta eilutė:", sujungta);
  }
  sujungtiEilutes("Labas", " pasaulis")

  
//  13. Funkcija: ar skaičius tarp dviejų reikšmių (imtinai)
  
  function tarpReiksmiu(skaicius, nuo, iki) {
    if (skaicius >= nuo && skaicius <= iki) {
      console.log("Skaičius yra tarp reikšmių");
    } else {
      console.log("Skaičius nėra tarp reikšmių");
    }
  }
  tarpReiksmiu(15, 10, 20);