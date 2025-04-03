
// abs - absoliuti reiksme
// cbrt - kubinis saknis
// ceil - apvalinimasi virsu
// floor - apvalinimasi zemyn (apvalina iki sveiko skaiciaus(visda mapvalina zemin))
// round - apvalinimas pagal taisykles
// trunc - atmetimas sveikasis skaicius
// hypot - Pitagoro teorema
// max - didziausias skaicius
// min - maziausias skaicius
// pow - pakelimas laipsniu
// sign - zenklas (arba teigiamas(1) arba neigiamas skaicius(-1))
// sqrt - kvadratinis saknis
// random - atsitiktinis skaicius [0..1)


console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// abs - absoliuti reiksme
console.log('\nabs'); // \n -is naijos eilutes
console.log(Math.abs(-5)); // 5
console.log(Math.abs(-5)); // 5

// cbrt - kubinis saknis
console.log('\ncbrt'); // \n -is naijos eilutes
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

// ceil apvalinimasi virsu
console.log('\nceil'); // \n -is naijos eilutes
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8,00000001));

// floor apvalinimasi zemyn
console.log('\nfloor'); // \n -is naijos eilutes
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.2));
console.log(Math.floor(8,99999999));

// round - apvalinimas pagal taisykles
console.log('\nround'); // \n -is naijos eilutes
console.log(Math.round(8));
console.log(Math.round(8.0000001));
console.log(Math.round(8.2));
console.log(Math.round(8.4999999999));
console.log(Math.round(8,5));
console.log(Math.round(8,9));
console.log(Math.round(8,9999));

// trunc - atmetimas sveikasis skaicius
console.log('\ntrunc'); // \n -is naijos eilutes
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.0001));
console.log(Math.trunc(4,999999999));
console.log(Math.trunc(-4.999999999));


// hypotth - Pitagoro teorema
console.log('\nhypot'); // \n -is naijos eilutes
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(4, 5)); 
console.log(Math.hypot(4, 5, 6)); 

/// max - didziausias skaicius
console.log('\nmax');
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 6));
console.log(Math.max('asfd', -10, 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 6, 'asfd'));

// min - maziausias skaicius
console.log('\nmin');
console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 6));
console.log(Math.min('asfd', -10, 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 6, 'asfd'));

// pow - pakelimas laipsniu
console.log('\npow');
console.log(Math.pow(2, 0), 2 ** 0);
console.log(Math.pow(2, 1), 2 ** 1);
console.log(Math.pow(2, 2), 2 ** 2);
console.log(Math.pow(2, 3), 2 ** 3);
console.log(Math.pow(2, 4), 2 ** 4);
console.log(Math.pow(2, 5), 2 ** 5);
console.log(Math.pow(2, 6), 2 ** 6);
console.log(Math.pow(2, 7), 2 ** 7);
console.log(Math.pow(2, 8), 2 ** 8);
console.log(Math.pow(2, 9), 2 ** 9);
console.log(Math.pow(2, 10), 2 ** 10);

// sign - zenklas (arba teigiamas(1) arba neigiamas skaicius(-1))
console.log('\nsign');
console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));

// sqrt - kvadratinis saknis
console.log('\nsqrt');
console.log(Math.sqrt(4), 4 ** 0.5);
console.log(Math.sqrt(9), 9 ** 0.5);
console.log(Math.sqrt(81), 9 ** 0.5);
console.log(Math.sqrt(2), 2 ** 0.5);
console.log(Math.sqrt(13), 13 ** 0.5);

  

// random - atsitiktinis skaicius [0..1)]
// [0..1) = [0 .. 0.5) + [0.5 .. 1)

let count3 = 0;
let count7 = 0;

for (let i = 0; i < 1000000; i++) {
    if (Math.random() < 0.5) {
        count3++;
    } else {
        count7++;
    }
}

console.log(count3, count7);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 9);
    counts[index]++;
}

console.log(counts);

const counts2 = [0, 0];

for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 1);
    counts2[index]++;
}

console.log(counts2);