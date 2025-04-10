//1. užd. Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių, kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio pasirinkimai turi būti atsitiktiniai.
 
//. random metodas gali būti naudojamas atsitiktiniam pasirinkimui. Pvz: Math.floor(Math.random() * 3) - tai bus skaičius nuo 0 iki 2, kurį galima panaudoti kaip indeksą masyve.
//pvz 

function rockPaperScissors(manoPasirinkimas) {
 const variantai = ['akmuo', 'popierius', 'šulinys'];
    const kompoPasirinkimas = variantai[Math.floor(Math.random() * variantai.length)];
    if (manoPasirinkimas === kompoPasirinkimas) {
        return 'Lygiosios! Abu pasirinkome ' + manoPasirinkimas;
    } else if (
        (manoPasirinkimas === 'akmuo' && kompoPasirinkimas === 'popierius') ||
        (manoPasirinkimas === 'popierius' && kompoPasirinkimas === 'šulinys') ||
        (manoPasirinkimas === 'šulinys' && kompoPasirinkimas === 'akmuo')
    ) {
        return 'AS pralaimėjau! Kompiuteris pasirinko ' + kompoPasirinkimas;
    } else {
        return 'As laimėjau! Kompiuteris pasirinko ' + kompoPasirinkimas;
    }

}
console.log(rockPaperScissors('šulinys')); 

console.clear();

//2 užd Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali pakelti 2.4 kg

function kiekZmoniuReikia(svoris) {
    let zmogausGalymybes = 2.4; // kiekvienas žmogus gali pakelti 2.4 kg
    return Math.ceil(svoris / zmogausGalymybes);
}

console.log(kiekZmoniuReikia(10)); 
console.log(kiekZmoniuReikia(100)); 
console.log(kiekZmoniuReikia(20)); 
console.log(kiekZmoniuReikia(11000)); 
    
console.clear();

//3 užd a) Statybos. Yra planuojamas namo statymas. Parašykite funkciją, kuri, gavusi norimą namo aukštį, grąžintų kiek aukštų turės namas. Namo aukštis yra paduodamas tik sveiku skaičiumi. Vieno aukšto aukštis gali būti 2 arbe 2.5m aukščio. Vadinasi, 6 metrų namas turės 3 aukštus (po 2 m), o 5 metrų namas turės 2 aukštus (po 2.5). Taupant vietą yra dedamas prioritetas didesniam aukštų skaičiui - jei namo aukštis yra 10 metrų, jis turės 5 2m aukštus. Jei namas yra 7 metrų aukščio, jis turės 2 aukštus 2.5 aukščio ir vieną 2 metrų aukščio aukštą.

function namoAukstis(aukstis) {
    //namoAukstis = 2;
    //namoAukstis2 = 2.5;
    if ( aukstis % 2 === 0 ) {
        return ` ${aukstis} metrų namas turės ${aukstis/2} aukštus (po 2 m)`
    }
    if ( aukstis % 2.5 === 0 ) {
        return ` ${aukstis} metrų namas turės ${aukstis/2.5} aukštus (po 2.5 m)`
    } else {
        return ` ${aukstis} metrų namas turės ${Math.floor((aukstis-5)/2)} aukštus (po 2 m) ir 2 (po 2.5 m)`
    }
}

console.log(namoAukstis(11));
console.log(namoAukstis(7));
console.log(namoAukstis(25));

console.clear();

//uzd 3 b) Statome namą iš plytų. Vienos plytos plotis yra 0.2 metrai, o aukštis yra 0.1 metro. Parašykite funkciją, kuriai nurodžius namo išmatavimus (plotis, ilgis, aukštis), ji apskaičiuotų kiek plytų reikės dėti. (PVZ jei ilgis yra 1m, plotis 2m aukštis yra 2m, turime dėti 600 plytų)