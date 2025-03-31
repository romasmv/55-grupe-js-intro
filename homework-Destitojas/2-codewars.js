

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




