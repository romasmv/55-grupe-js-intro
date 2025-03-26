
// JavaScript mini užduotys

// Kintamųjų inicijavimas
 
 /* 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
 a. Po kiekvieno jų inicijavimo, išvesti į console*/
  const a = 1 ;
  console.log(a);
  const b = 2 ;
  console.log(b);
  const c = 3 ;
  console.log(c); 

 /* 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console*/
  const text1 = 'labas' ;
  console.log(text1);
  const text2 = 'rytas' ;
  console.log(text2);
  const text3 = 'Lietuva!' ;
  console.log(text3); 

 /* 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console */
  const sarasas1 = [1, 2, 3, 4, 5];
  const sarasas2 = [6,7,8,9,10];
  const sarasas3 = [11,12,13,14,15];
  console.log(sarasas1);
  console.log(sarasas2);
  console.log(sarasas3); 
 
  /* 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console */
  const sarText1 = ['vienas', 'du', 'trys', 'keturi', 'penki']; 
  const sarText2 = ['šeši', 'septyni', 'aštuoni', 'devyni', 'dešimt'];
  const sarText3 = ['vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika'];
  console.log(sarText1);
  console.log(sarText2);
  console.log(sarText3); 
  

  //Veiksmai su kintamaisiais
    
 /* 1. Susumuoti visus skaičiaus tipo kintamuosius
     a. Rezultatą išvesti į console */
   const sum = a+b+c ;
   console.log(sum);

 /* 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
     a. Rezultatą išvesti į console */
  
   const sumVardai = text1 + ' ' +text2 +' '+ text3;
   console.log(sumVardai);

 /* 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
     a. 1-2+3-4+5
     b. Rezultatą išvesti į console */
 
   let vertePagalLogika1 = sarasas1[0] - sarasas1[1] + sarasas1[2] - sarasas1[3] + sarasas1[4];
   let vertePagalLogika2 = sarasas2[0] - sarasas2[1] + sarasas2[2] - sarasas2[3] + sarasas2[4];
   let vertePagalLogika3 = sarasas3[0] - sarasas3[1] + sarasas3[2] - sarasas3[3] + sarasas3[4];
   console.log(vertePagalLogika1);
   console.log(vertePagalLogika2);
   console.log(vertePagalLogika3);

 /* 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp 
   jų būtų kablelis ir tarpas*/

   let verteText1 = sarText1[4] +', '+ sarText1[3] +', '+ sarText1[2] +', '+ sarText1[1] +', '+ sarText1[0]
   let verteText2 = sarText2[4] +', '+ sarText2[3] +', '+ sarText2[2] +', '+ sarText2[1] +', '+ sarText2[0]
   let verteText3 = sarText3[4] +', '+ sarText3[3] +', '+ sarText3[2] +', '+ sarText3[1] +', '+ sarText3[0]
   console.log(verteText1);
   console.log(verteText2);
   console.log(verteText3);

  
   // Kintamųjų palyginimas
 
   /*Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
 Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį
 “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius: */
   //  a. kuris didesnis
        const d = 10;
        const e = 15;
           if (d < e) {
     console.log('Pomidoras');
 } else if (d > e) {
     console.log('Bandykite kitą kartą.');} 

   //  b. kuris mažesnis
   if (d > e) {
     console.log('Pomidoras');
 } else if (d < e) {
     console.log('Bandykite kitą kartą.');} 

  //   c. ar jie lygūs
  if (d == e) {
     console.log('Pomidoras');
 } else if (d < e) {
     console.log('Bandykite kitą kartą.');} 
   else if (d > e) {
     console.log('Bandykite kitą kartą.');}

  //   d. ar jie nelygūs
  if (d != e) {
     console.log('Pomidoras');
 } else if (d < e) {
     console.log('Bandykite kitą kartą.');} 
   else if (d > e) {
     console.log('Bandykite kitą kartą.');}
   else if (d == e) {
     console.log('Bandykite kitą kartą.');}
 
  //   e. kuris didesnis arba lygus
  if (d >= e) {
     console.log('Pomidoras');
 } else if (d < e) {
     console.log('Bandykite kitą kartą. d < e');} 
   else if (d > e) {
     console.log('Bandykite kitą kartą. d > e');}
   else if (d == e) {
     console.log('Bandykite kitą kartą. d == e');}

  //   f. kuris mažesnis arba lygus
  if (d <= e) {
     console.log('Pomidoras, d < e');
 } else if (d < e) {
     console.log('Bandykite kitą kartą. d < e');} 
   else if (d > e) {
     console.log('Bandykite kitą kartą. d > e');}
   else if (d == e) {
     console.log('Bandykite kitą kartą. d == e');}

/*  2. Išvesti teksto tipo kintamųjų ilgius */

const textA = 'Arunas';
const textB = 'Ona';
console.log(textA.length);
console.log(textB.length);

/* 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius: */

     //  a. kuris didesnis
if (textA.length < textB.length) {
     console.log('Pomidoras');
 } else if (textA.length > textB.length) {
     console.log('Bandykite kitą kartą.');} 

     //  b. kuris mažesnis
if (textA.length > textB.length) {
     console.log('Pomidoras');
 } else if (textA.length < textB.length) {
     console.log('Bandykite kitą kartą.');} 

    //   c. ar jie lygūs
if (textA.length == textB.length) {
     console.log('Pomidoras');
 } else if (textA.length < textB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (textA.length > textB.length) {
     console.log('Bandykite kitą kartą.');} 
     
   //   d. ar jie nelygūs
   if (textA.length != textB.length) {
     console.log('Pomidoras');
 } else if (textA.length < textB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (textA.length > textB.length) {
     console.log('Bandykite kitą kartą.');} 
   else if (textA.length == textB.length) {
     console.log('Bandykite kitą kartą.');} 
     
   //   e. kuris didesnis arba lygus
   if (textA.length >= textB.length) {
     console.log('Pomidoras');
 } else if (textA.length < textB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (textA.length > textB.length) {
     console.log('Bandykite kitą kartą.');} 
   else if (textA.length == textB.length) {
     console.log('Bandykite kitą kartą.');} 

  //   f. kuris mažesnis arba lygus
  if (textA.length <= textB.length) {
     console.log('Pomidoras');
 } else if (textA.length < textB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (textA.length > textB.length) {
     console.log('Bandykite kitą kartą.');} 
   else if (textA.length == textB.length) {
     console.log('Bandykite kitą kartą.');} 


 /*  4. Išvesti sąrašo tipo kintamųjų ilgius  */
const sarA = [1, 2, 3, 4, 5, 6, 7];
const sarB = [10, 20, 30, 40, 50];
console.log(sarA.length);
console.log(sarB.length);


/*5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius: */
//     a. kuris didesnis
if (sarA.length < sarB.length) {
     console.log('Pomidoras');
 } else if (sarA.length > sarB.length) {
     console.log('Bandykite kitą kartą.');}

//     b. kuris mažesnis
if (sarA.length > sarB.length) {
     console.log('Pomidoras');
 } else if (sarA.length < sarB.length) {
     console.log('Bandykite kitą kartą.');}

//     c. ar jie lygūs
if (sarA.length == sarB.length) {
     console.log('Pomidoras');
 } else if (sarA.length < sarB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (sarA.length > sarB.length) {
     console.log('Bandykite kitą kartą.');} 

//     d. ar jie nelygūs
if (sarA.length != sarB.length) {
     console.log('Pomidoras');
 } else if (sarA.length < sarB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (sarA.length > sarB.length) {
     console.log('Bandykite kitą kartą.');} 

     //     e. kuris didesnis arba lygus
if (sarA.length >= sarB.length) {
     console.log('Pomidoras');
 } else if (sarA.length < sarB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (sarA.length > sarB.length) {
     console.log('Bandykite kitą kartą.');} 
   else if (sarA.length == sarB.length) {
     console.log('Bandykite kitą kartą.');} 

//     f.kuris mažesnis arba lygus*/
if (sarA.length <= sarB.length) {
     console.log('Pomidoras');
 } else if (sarA.length < sarB.length) {
     console.log('Bandykite kitą kartą.');}
   else if (sarA.length > sarB.length) {
     console.log('Bandykite kitą kartą.');} 
   else if (sarA.length == sarB.length) {
     console.log('Bandykite kitą kartą.');} 


     // Ciklo for panaudojimas
/* 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
      a.  0 … 0
      b.  0 … 4
      c.  0 … 100
      d.  574 … 815
      e. -50 … 50
      f. -70 … 30 */

function intervalSum(start, end) {
    let sum = 0;
for (let i = start; i < end; i++) {
    sum += i;
    
}
    return sum;
}
console.log('a)',intervalSum(0,0));
console.log('b)',intervalSum(0,4));
console.log('c)',intervalSum(0,100));
console.log('d)',intervalSum(574,815));
console.log('e)',intervalSum(-50,50));
console.log('f)',intervalSum(-70,30));

/*
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
      a.   0 - 11
      b.   8 - 31
      c.  -18 - 18
      d.  rezultatą pateikti tokiu formatu:
           i.   Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
           ii.  Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
           iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/



// Funkcijos

//Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// 1. Funkcija pavadinimu “tusciaFunkcija”:
 
 //  a. nepriima jokių kintamųjų
 //  b. neatlieka jokios vidinės logikos
 //  c. gražina boolean tipo reikšmę “false”
 //  d. TESTAS:
 //      i. console.log( tusciaFunkcija() );
 //      ii. rezultatas: false

function tusciaFunkcija() {
  return false;
}
console.log(tusciaFunkcija());

//  2. Funkcija pavadinimu “daugyba”:
 
//  a. priima du skaičiaus tipo kintamuosius
 //  b. atskirame kintamajame įsimena sandaugos reikšmę
 //  c. gražina saudaugos rezultatą
 //  d. TESTAI:
 //      I. console.log( daugyba( skaicius1, skaicius2 ) );
 //     II. console.log( daugyba( skaicius3, skaicius2 ) );
 //    III. console.log( daugyba( skaicius1, skaicius3 ) );
 //     IV. rezultatas: teisingos reikšmės;

 const num1 = 1;
 const num2 = 5; 
 const num3 =num1+num2

 function daugyba(num3) {
  return num3;
 }
 console.log(daugyba(num3));
 console.log(daugyba(num1*num2));
 console.log(daugyba(num3*num2));
 console.log(daugyba(num1*num3));

//  3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
 
 //  a. priima vieną kintamąjį
 //  b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
 //  c. priešingu atveju, funkcija tęsia darbą
 //  d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
 //  e. gražina skaitmenų kiekį
 //  f. TESTAI:
 /*      I. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1 */
 /*     II. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3 */
 /*    III. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11 */
 /*     IV. console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.” */
 /*      V. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.” */
 /*     VI. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.” */



function skaitmenuKiekisSkaiciuje() {
  return    ;
}

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );


//   4.  Funkcija pavadinimu “didziausiasSkaiciusSarase”:
 //  a. priima vieną kintamąjį
 //  b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
 //  c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
 //  d. priešingu atveju, funkcija tęsia darbą
 //  e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
 //  f. gražina didžiausią surastą skaičių
 //  g. TESTAI:
 /*       I. console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1 */
 /*      II. console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3 */ 
 /*     III. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78 */
 /*      IV. console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69 */ 
 /*       V. console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1 */
 /*      VI. console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.” */
 /*     VII. console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.” */

//  5.  Funkcija pavadinimu “isrinktiRaides”:

//  a. priima du kintamuosius:
//       I. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
//      II. antrasis nurodo kas kelintą raidę išrinkti
//  b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
//       I. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
//      II. priešingu atveju tęsiame darbą
//  c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
//       I. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
//      II. priešingu atveju tęsiame darbą
//  d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
//       I. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
//      II. priešingu atveju tęsiame darbą
//  e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
//       I. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
//      II. priešingu atveju tęsiame darbą
//  f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
//       I. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
//      II. priešingu atveju tęsiame darbą
//  g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
//  h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
//  i. gražina rezultatą
//  j. TESTAI:
/*        I. console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf” */
/*       II. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil” */
/*      III. console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.” */
/*       IV. console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.” */
/*        V. console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

//  6.  Funkcija pavadinimu “dalyba”:

//  a. turi priimti du kintamuosius
//  b. reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
//       I. esant blogoms sąlygoms, išvesti atitinkamą pranešimą
//      II. esant geroms - tęsti darbą
//  c. į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
//       I. daliname pirmąjį skaičių iš antrojo
//  d.grąžinti suskaičiuotą reikšmę
//  e. TESTAI:
//       I. sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą */
