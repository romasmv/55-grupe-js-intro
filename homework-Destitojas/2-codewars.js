

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

console.clear();


// Ši kata yra apie tam tikro skaičiaus padauginimą iš aštuonių, jei jis yra lyginis, ir iš devynių kitu atveju.

function simpleMultiplication(number) {
if (number % 2 === 0) {
    return number * 8;
  }else {
    return number * 9;
  }
}

console.log(simpleMultiplication(2));  

