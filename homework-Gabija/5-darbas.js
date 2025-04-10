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

function kiekPlytu(plotis, ilgis, aukstis) {
    //plytosPlotis = 0.2 metrai, 
    //plytosAukštis = 0.1 metro.
    let sienosPloptas = ((plotis+ilgis)*aukstis)*2;
    let plytosPlotas = 0.2*0.1
    return Math.ceil(sienosPloptas/plytosPlotas)
}

console.log(kiekPlytu(2,1,2));
console.clear();

//užd 3 c) Statyti namą kainuoja. Kiekvienas namas turi 1 duris, x plytų ir 6 langus kiekviename aukšte. Padarykite funkciją, kuriai pateikus plytų, langų ir durų kainą; bei namo plotį, ilgį ir aukštį - ji paskaičiuotų kiek eurų kainuotų pastatyti norimą namą.

function kiekKainuosNamas(plytuKaina,langoKaina,duruKaina,namoPlotis,namoIlgis,namoAukstiss) {
    if ( namoAukstiss % 2 === 0 ) {
        kiekAukstuNamas =  namoAukstiss/2
    }
    else if ( namoAukstiss % 2.5 === 0 ) {
       kiekAukstuNamas =  namoAukstiss/2.5
    } else {
        kiekAukstuNamas =  Math.floor(((namoAukstiss-5)/2)+2)
    }
    
    let sienosPloptas1 = ((namoPlotis + namoIlgis) * namoAukstiss) *2;
    let plytosPlota1 = 0.2*0.1
    kiekReikesPlytu = Math.ceil( sienosPloptas1 / plytosPlota1 )
    
    
    let durys = duruKaina;
    let langai = langoKaina * 6 * kiekAukstuNamas;
    let plytos = kiekReikesPlytu * plytuKaina
    console.log(langai)
    return (durys+langai+plytos)
}


console.log(kiekKainuosNamas(20,5000,500,15,20,10));
console.clear();

//uzd 4. Kalėdų senelis pakeitė darbą ir tapo gimtadienio dėde. Vietoj gerų ir blogų vaikų, jis dosniai apdovanoja ypatingus gimtadienius (1, 5, 10, 15, 16, 18, 20 ir visi kiti jubiliejai) ir nelabai gerai apdovanoja paprastus gimtadienius. Padarykite du sąrašus - vieną su nuostabiomis dovanomis (vienaragis, pilis, mašina, ...), kitą su nefainomis dovanomis (kojinės, ananasas, jau skaityta knyga, ...). Padarykite funkciją, kuriai pateikus jūsų metus, ji pasveikins su gimtadieniu ir padovanos atitinkamą dovaną.

