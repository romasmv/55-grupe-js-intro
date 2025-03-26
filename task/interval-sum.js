
/* Ciklo for panaudojimas
1.  Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
     a. 0 … 0
     b. 0 … 4
     c. 0 … 100
     d. 574 … 815
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


const a = 1.45e5;  // cia e=* , 5=1000
console.log(a);
