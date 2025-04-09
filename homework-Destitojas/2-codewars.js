

// Jums pateikiami du vektoriai, pradedant nuo pradžios (x=0, y=0) su koordinatėmis (x1,y1) ir (x2,y2). Jūsų užduotis yra išsiaiškinti, ar šie vektoriai yra kolineariniai. Kolineariniai vektoriai yra vektoriai, esantys toje pačioje tiesėje. Jie gali būti nukreipti ta pačia arba priešinga kryptimis. Vieną vektorių galima gauti iš kito, padauginus jį iš tam tikro skaičiaus. Kalbant apie koordinates, vektoriai (x1, y1) ir (x2, y2) yra kolinearūs, jei (x1, y1) = (k*x2, k*y2) , kur k yra bet koks skaičius, veikiantis kaip koeficientas.

function collinearity(x1, y1, x2, y2) {
    // Jei vienas is vektoriu yra (x1, y1) arba (x2,y2) lygus (0,0) – tada jie kolineariniai
    if (x1 === 0 && y1 === 0 && x2 === 0 && y2 === 0) {
      return true;
    }
      // Kryžminė sandauga
    return x1 * y2 === x2 * y1;
  }
    console.log(collinearity(1, 0, 1, 4)); // false
    console.log(collinearity(1, 0, 0, 0)); // true
    
 
console.log('------------------');



function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  }
  
  console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
  
  
  console.log('------------------');

//Sukurkite funkciją, kuri visada grąžina True/true kiekvienam nurodyto sąrašo elementui.
//Tačiau, jei elementas yra žodis „flick“, perjunkite taip, kad visada būtų grąžinama priešinga loginė reikšmė False/False.

function flickSwitch(arr){
  let swith = true;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      swith = !swith;
    }
    result[i] =swith;
  }
  return result;
};

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

console.log('------------------');

// Atsižvelgiant į dvi eilutes, sudarytas iš + ir -, grąžinkite naują eilutę, kuri parodo, kaip šios dvi eilutės sąveikauja tokiu būdu:

//Kai teigiami ir teigiami dalykai sąveikauja, jie išlieka teigiami.
//Kai negatyvai ir negatyvai sąveikauja, jie išlieka neigiami.
//Tačiau kai neigiami ir teigiami dalykai sąveikauja, jie tampa neutralūs ir rodomi kaip skaičius 0.
/*

("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.


PVZ:

("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"

*/
function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === "+" && s2[i] === "+") {
      result += "+";
    } else if (s1[i] === "-" && s2[i] === "-") {
      result += "-";
    } else {
      result += "0";
    }
  }
  return result;
};


console.log(neutralise("--++--", "++--++")); // "000000"
console.log(neutralise("+-", "-+")); // "00"
console.log(neutralise("-++-", "-+-+")); // "-+00"

console.log('------------------');

// Jums pateikiamas masyvas (kuris bus mažiausiai 3 ilgio, bet gali būti labai didelis), kuriame yra sveikieji skaičiai. Masyvą sudaro arba visiškai nelyginiai sveikieji skaičiai, arba visiškai lyginiai sveikieji skaičiai, išskyrus vieną sveikąjį skaičių N. Parašykite metodą, kuris masyvą priima kaip argumentą ir grąžina šį „išskirtinį“ N.

// PVZ

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (vienintelis nelyginis skaičius) 
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (vienintelis lyginis skaičius)



// jeigu masyve visi visiškai nelyginiai sveikieji skaičiai +N;
// jeigu masyve visi visiškai lyginiai sveikieji skaičiai +N;
 
function rastiIsskirti(masyvas) {
  let lyginiuKiekis = 0;
  let nelyginiuKiekis = 0;
  let paskutinisLyginis = 0;
  let paskutinisNelyginis = 0;

  for (let i = 0; i < masyvas.length; i++) {
      if (masyvas[i] % 2 === 0) {
          lyginiuKiekis++;
          paskutinisLyginis = masyvas[i];
      } else {
          nelyginiuKiekis++;
          paskutinisNelyginis = masyvas[i];
      }
  }

  if (lyginiuKiekis === 1) {
      return paskutinisLyginis;
  } else {
      return paskutinisNelyginis;
  }
}

console.log(rastiIsskirti([0, 1, 2]));     // ---> 1
console.log(rastiIsskirti([1, 2, 3]));     // ---> 2
console.log(rastiIsskirti([2,6,8,10,3]));  // ---> 3
console.log(rastiIsskirti([0,0,3,0,0]));   // ---> 3
console.log(rastiIsskirti([1,1,0,1,1]));   // ---> 0

console.log('------------------');

//Tau bus pateiktas masyvas a ir reikšmė x. Viskas, ką reikia padaryti – patikrinti, ar pateiktame masyve a yra reikšmė x.(a gali būti sudarytas iš skaičių arba tekstų (stringų).x taip pat gali būti arba skaičius, arba tekstas.)

/* Grąžinti true, jeigu masyve yra ta reikšmė,
 false, jeigu jos nėra. */


function check(a, x) {
for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
    }
    return false;
  }

console.log(check([66, 101], 66)); //true);
console.log(check([101, 45, 75, 105, 99, 107], 107)); //true);
console.log(check(['t', 'e', 's', 't'], 'e')); //true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //false);

console.log('------------------');


/*
Jei surašytume visus natūralius skaičius, mažesnius nei 10, kurie yra dalūs iš 3 arba 5, gautume: 3, 5, 6 ir 9. Šių skaičių suma yra 23.
Baik sprendimą taip, kad jis grąžintų visų daugiklių iš 3 arba 5, kurie yra mažesni už pateiktą skaičių, sumą.
Papildomai:
Jei pateiktas skaičius yra neigiamas, grąžink 0.
Pastaba:
Jei skaičius dalijasi tiek iš 3, tiek iš 5, jį reikia suskaičiuoti tik vieną kartą.
*/


function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution(10)); // 23

console.log('------------------');


// Ši kata yra apie tam tikro skaičiaus padauginimą iš aštuonių, jei jis yra lyginis, ir iš devynių kitu atveju.

function simpleMultiplication(number) {
if (number % 2 === 0) {
    return number * 8;
  }else {
    return number * 9;
  }
}

console.log(simpleMultiplication(2));  

console.log('------------------');

console.clear();

let v1 = 50,
v2 = 100,
v3 = 150,
v4 = 200,
v5 = 2,
v6 = 250;

function equal1(a,b){
  return a + b;
}
console.log(equal1(v1,v1))


function equal2(a,b){
  return a - b;
}
console.log(equal2(v3,v1))


function equal3(a,b){
  return a * b;
}
console.log(equal3(v5,v1))


function equal4(a,b){
  return a / b;
}
console.log(equal4(v4,v5))


function equal5(a,b){
  return a % b;
}console.log(equal5(v6,v3))


console.log('------------------');
console.clear();

/*Troliai puola tavo komentarų skiltį!
Įprastas būdas išspręsti šią situaciją yra pašalinti visas balses iš trolių komentarų, neutralizuojant grėsmę.
Jūsų užduotis yra parašyti funkciją, kuri paima eilutę, ir grąžinti naują eilutę su pašalintomis balsėmis.
Pavyzdžiui, eilutė "Ši svetainė skirta nevykėliams LOL!" taptų "Ths wbst s fr lsrs LL!".
Pastaba: šiai kata y nelaikoma balsiu.*/

function disemvowel(str) {
  let vowels =['a','o','e','i','u']
  let newText = '';
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      newText += '';}
      else {
        newText+=str[i];
      }
    }
    
    
    return newText;
  }
  
  console.log(disemvowel("This website is for losers LOL!")) //"Ths wbst s fr lsrs LL!")
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) //"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
  console.log(disemvowel("What are you, a communist?")) // "Wht r y,  cmmnst?")
  
  console.log('------------------');
  console.clear();
  
  /* Jums bus suteiktas masyvas a ir reikšmė x. Viskas, ką jums reikia padaryti, tai patikrinti, ar pateiktame masyve yra reikšmė.
  a gali būti skaičių arba eilučių. x gali būti bet kuris.
  Grąžina true jei masyve yra reikšmė, false jei nera.*/
  
   function check(a, x) { 
     if (a.includes(x)) {
       return true}
        else {
          return false;
        }
      }
      
      
      console.log(check([66, 101],66))                        // true);
      console.log(check([101, 45, 75, 105, 99, 107],107))      // true);
      console.log(check(['t', 'e', 's', 't'],'e'))             // true);
      console.log(check(['what', 'a', 'great', 'kata'],'kat')) //  false);
      
      console.log('------------------');
      console.clear();
      
      /*   Jūsų darbas
      Raskite visų žemiau m esančių n kartotinių sumą
      
      Turėkite omenyje
      n ir m yra natūralūs skaičiai (teigiami sveikieji skaičiai)
      m yra išbrauktas iš sumos
      Pavyzdžiai
      sumaMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
      sumaMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
      sumaMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
      sumMul(4, -7) ==> "INVALID"   */
      
      function sumMul(n,m){
        if (n<=0 || m<=0 || !Number.isInteger(n) || !Number.isInteger(m)){
          return "INVALID";
  }
  let sum = 0;
  for (let i = 1; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMul(0,0))   //"INVALID");
console.log(sumMul(2,9))  //20);
console.log(sumMul(4,-7)) //"INVALID");

console.log('------------------');
console.clear();

/*
Vaikai geria toddy.
Paaugliai geria kokakolą.
Jauni suaugusieji geria alų.
Suaugusieji geria viskį.
Sukurkite funkciją, kuri gautų amžių, ir grąžinkite tai, ką jie geria.

Taisyklės:

Vaikai iki 14 metų.
Paaugliai iki 18 metų.
Jaunas iki 21 m.
Suaugusieji turi 21 ar daugiau.
Pavyzdžiai: (įvestis --> išvestis)

13 --> "gerti toddy"
17 --> "gerti kokakolą"
18 --> "gerti alų"
20 --> "gerti alų"
30 --> "gerti viskį"
*/

function peopleWithAgeDrink(old) {
  if (old<14) {
    return 'drink toddy'
  }
  else if (old<18){
    return 'drink coke'
  }
  else if (old<21){
    return 'drink beer'
  }
  else{
    return  'drink whisky'
  }
}

console.log((peopleWithAgeDrink(22)))   //'drink whisky'  

console.log('------------------');
console.clear();


/*
Duotas skaičius n. Grąžink teigiamų nelyginių skaičių, mažesnių už n, kiekį.

Pavyzdžiai (Įvestis -> Išvestis):

7 -> 3 (nes nelyginiai skaičiai mažesni už 7 yra [1, 3, 5])
15 -> 7 (nes nelyginiai skaičiai mažesni už 15 yra [1, 3, 5, 7, 9, 11, 13])
Taip pat nurodyta, kad tikimasi didelių įvesties skaičių, todėl reikėtų parašyti efektyvų sprendimą.
*/
function oddCount(n){
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i%2===1){
      count++
    }
  }
  return count
}


console.log(oddCount(15))    // 7, "Oops! Wrong.");
console.log(oddCount(15023)) // 7511, "Oops! Wrong.");

console.log('------------------');
console.clear();

/*  Laikrodis rodo h valandas, m minutes ir s sekundes po vidurnakčio.

Jūsų užduotis yra parašyti funkciją, kuri grąžina laiką nuo vidurnakčio milisekundėmis.

Pavyzdys:
h = 0
m = 1
s = 1

result = 61000
Įvesties apribojimai:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59      */

function past(h, m, s){
  return(((h*3600)+(m*60)+s)*1000)
}



console.log(past(0,1,1)) //,61000
console.log(past(1,1,1)) //,3661000
console.log(past(0,0,0)) //,0
console.log(past(1,0,1)) //,3601000
console.log(past(1,0,0)) //,3600000












