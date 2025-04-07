
/*1. Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).
    a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x km/h greičiu per y valandų */
    
    
    let miestuSarasas = [
      'Kaunas', 102.5,
      'Klaipeda', 311.4,
      'Siauliai', 214.6,
      'Panevezys', 135.2,
      'Alytus', 105.4,
      'Marijampole', 139.7,
      'Utena', 96.8,
      'Telsiai', 278.9,
      'Taurage', 225.6,
      'Druskininkai', 129.3
 ];
 
 function kurNuvaziuotume(greitis, laikas) {
   let rezultatas = '';
   let nuvaziuotasAtstumas = greitis * laikas;
   
   for (let i = 0; i < miestuSarasas.length; i += 2) {
    if (nuvaziuotasAtstumas >= miestuSarasas[i + 1]) {
      if (rezultatas === '') {
        rezultatas = `${miestuSarasas[i]} (${miestuSarasas[i + 1]} km)`;
      } else {
        rezultatas += `, ${miestuSarasas[i]} (${miestuSarasas[i + 1]} km)`;
          }
        }
      }
      
      if (rezultatas === '') {
        return `Per ${laikas} valandas negalėtume nuvažiuoti į jokį miestą.`;
      }
      
      return `Per ${laikas} valandas nuvažiuotume į šiuos miestus: ${rezultatas}.`;
    }
    
    console.log(kurNuvaziuotume(110, 3));
    console.clear();
    
    
    //b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)
    
function arPasiektumMiesta(miestas, laikas) {
  let greitis=0;
  
  for (let i = 0; i < miestuSarasas.length; i += 2) {
    if (miestuSarasas[i] === miestas) {
      greitis = miestuSarasas[i + 1] / laikas;
      
      if (greitis <= 120) {
        return `Per ${laikas} valandas nuvažiuotume į: ${miestas} važiuodami ${greitis} km/h`;
      } else {
        return `Per ${laikas} valandas negalėtume nuvažiuoti į ${miestas}.`;
      }
    }
  }
  
  return `Miestas "${miestas}" nerastas.`;
}

console.log(arPasiektumMiesta('Panevėžys',2));
console.clear();


//c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų. Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia. Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų


function koksTolimiausiasMiestas(kuroKaina,pinigai) {
  let pradedameKelione = 30;
  let masinosSanaudos = 12;//litru kiekis / nuvaziuoto atstumo
  let rezultatas = '';
  for (let i = 0; i < miestuSarasas.length; i+=2) {
    if (miestuSarasas[i+1]<=(((pinigai/kuroKaina)+pradedameKelione)/masinosSanaudos)*100) {
      if (rezultatas === '') {
        rezultatas = `${miestuSarasas[i]} (${miestuSarasas[i + 1]} km)`;
      } else {
        rezultatas += `, ${miestuSarasas[i]} (${miestuSarasas[i + 1]} km)`;
      }
    }
  }
  
  if (rezultatas === '') {
    return `Uz ${pinigai} euru negalėtume nuvažiuoti į jokį miestą.`;
  }
  
  return `Uz ${pinigai} euru nuvažiuotume į šiuos miestus: ${rezultatas}.`;
}


console.log(koksTolimiausiasMiestas(1.5,0));
console.clear();

// d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui: geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki kiekvieno miesto. 

/*   let miestuSarasas = [
    'Kaunas', 102.5,
    'Klaipėda', 311.4,
    'Šiauliai', 214.6,
    'Panevėžys', 135.2,
    'Alytus', 105.4,
    'Marijampolė', 139.7,
    'Utena', 96.8,
    'Telšiai', 278.9,
    'Tauragė', 225.6,
    'Druskininkai', 129.3 ];   */

      // geras =  važiuojame paprastai
  // prastomis = 1.5 karto ilgiau
     //taisomo = 2 kartus ilgiau

     function kiekLaikoVaziuoti(kelioSalyga, miestas) {
      let laikas = 0;
      let vidutinisGreitis = 100;
    
      for (let i = 0; i < miestuSarasas.length; i += 2) {
        if (miestuSarasas[i] === miestas) {
          let atstumas = miestuSarasas[i + 1];
    
          if (kelioSalyga === 'geras') {
            laikas = atstumas / vidutinisGreitis;
          } else if (kelioSalyga === 'prastas') {
            laikas = (atstumas / vidutinisGreitis) * 1.5;
          } else if (kelioSalyga === 'taisomas') {
            laikas = (atstumas / vidutinisGreitis) * 2;
          } else {
            return 'Nera tokios salygos';
          }
    
          return `Vaziuoti iki ${miestas} uztruks ${laikas.toFixed(2)} val.`;
        }
      }
    
      return 'Toks miestas nerastas';
    }
     
     console.log(kiekLaikoVaziuoti('prastas','Klaipeda'));
     console.clear();
     
// 2. Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą [1, 1, 2, 3, 3, 3, 4] rezultatas būtų gaunamas toks:

let sarasasSkaiciu = [1, 1, 2, 3, 3, 3, 4];
function kiekTamTikruSkaiciu(sarasSkaiciu) {
  let stars = '';
  for (let i = 0; i < sarasSkaiciu.length; i++) {
  if (sarasSkaiciu[i] === sarasSkaiciu[i+1]){
    stars += '*'; 
   }  
   }
   return stars;
}

//console.log(kiekTamTikruSkaiciu(stars));



/*for (let i = 1; i <= 5; i++) {
    let stars = '' ;
    for (let j = 0; j < i; j++) {
    stars += '*';  
    }
    console.log(stars);
    ;*/



/* 3. Susikurkite 7 sąrašus, kuriose yra talpinamos skirtingų dienų temperatūros vertės
    a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą.
    b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausią temperatūrą.
    c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą.
    d. Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra
    e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą
    f. Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Kokia temperatūra yra šilta/nešalta/šalta įsivardinkite */