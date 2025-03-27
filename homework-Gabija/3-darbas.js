
// 1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    ;
}

// 2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.

for (let i = 10; i >= 1; i--) {
    console.log(i);
    ;
}

// 3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i = 1; i <= 10; i++) {
   if (i % 2 === 0)
   console.log(i);
    ;
}

// 4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1)
    console.log(i);
}

// 5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).

for (let i = 1; i <= 10; i++) {
   console.log(i*i);
    ;
}

// 6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).

for (let i = 1; i <= 10; i++) {
    console.log((i*i)*i);
     ;
 }

// 7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).

for (let i = 1; i <= 7; i++) {
   for (let n = 1; n <= 7; n++) {
    console.log(`${i} x ${n} = ${i*n}`)
    
   }
}

// 8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).

for (let i = 1; i <= 5; i++) {
    let stars = '' ;
    for (let j = 0; j < i; j++) {
    stars += '*';  
    }
    console.log(stars);
    ;
}

// 9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).

for (let i = 5; i >= 1 ; i--) {
    let stars = '' ;
    for (let j = 0; j < i; j++) {
    stars += '*';  
    }
    console.log(stars);
    ;
}


// 10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.
for (let i = 1; i < 50; i++) {
    let dalijasi = i % 3;
    if(dalijasi === 0){
       console.log(i);
        ;
    }
 }



 // 11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.
 for (let i = 1; i <= 50; i++) {
    let dalijasi = i % 5;
    if(dalijasi === 0){
       console.log(i);
        ;
    }
 }
 console.clear();
 // 12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.

 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
 




