let s = "Ez egy \"egyszerű\" string"; //escapeeles (backslash)
let s2 = `Akár,
akár
több sorba
is lehet
tördelni a stringet`; //AltGr+7-nel lehet tordelni a sort enterrel
console.log(s);

//A string tömbként is kezelhető
console.log(s[3]); //mi van a harmadik indexen //e
console.log(s.length); //milyen hosszú
console.log(s[49]); //undefined
console.log(s[-2]); //undefined

//string kezelő függvények
console.log(s.charAt(9)); //index alapjan mi talalhato ott, kereso index
console.log(s.at(-2)); //utolso elotti karakter, visszafele indexel, string vegerol indul
console.log(s.indexOf('e')); //3
console.log(s.lastIndexOf('e')); //13
console.log(s.includes("egy")); //true
console.log(s.substring(9, 10)); //darabolas, mettol meddig vagjunk [mettol, meddig[
console.log(s.replace(' ', '-')); //elso szokozt kotojelre csereli
console.log(s.replaceAll(' ', '-')); //osszes elofordulason

let nev = "  Özv. Kolompár Mária   ";
console.log(nev.trim()); //levagja a white spaceket elejerol es a vegerol

let ido = "9:3";
console.log(ido.substring(0,1).padStart(2, '0') + ':' + ido.substring(2,3).padStart(2, '0')); //padding, padstart, az elejehez hozzaad

let szam = "13.7";
console.log(szam.padEnd(5, '0')); //padend, a vegehez hozzaad

//Konkatenáció
console.log(s.concat(" még valami...")); //hozzáfűzi a végéhez
console.log(s + " még valami..."); //ugyanazt csinalja rovidebben

//Módosítás
s[0] = 'A'; //nem lehet ilyet csinalni
console.log(s); //semmi nem változik
//helyette
s = 'A' + s.substring(1);
console.log(s);

s = s.substring(0, 6) + 'X' + s.substring(7); //a mondaton belulre szurjuk
console.log(s);

//Vágás
let adatok = "Sipi Rupi_Szekszárd_tanuló_pörkölt";
let adatokStringTomb = adatok.split('_'); //alulvonasok menten vagja szet, es az adatokbol tombot csinal
console.log(adatokStringTomb);


//Feladat
const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
 
/* Feladat:
Dolgozzuk fel a tömb elemeit!
A tömb minden egyes elemét vágjuk szét a 3 különböző információ mentén (név;magasság;súly)
Írjuk ki a konzolra soronként az egyes emberek tulajdonságát (helytöltő nullákra figyelni!)
Pl.: Név: Kiss Géza, Magasság: 177.57 cm, Súly: 64.50 kg
     Név: Nagy Mária, Magasság: 164.00 cm, Súly: 59.00 kg
*/

for(const sor of jellemzok){
    let jellemzokBontott = sor.split(';');

    if(jellemzokBontott[2].length > 3){
        console.log(`Név: ${jellemzokBontott[0]}, Magasság: ${jellemzokBontott[1]} cm, Súly: ${jellemzokBontott[2].padEnd(5, '0')} kg`);
    } else {
        console.log(`Név: ${jellemzokBontott[0]}, Magasság: ${jellemzokBontott[1]} cm, Súly: ${jellemzokBontott[2] + '.00'} kg`);
    }
}

//vagy

function sorToString(sor){
    let nev = sor[0];

    let magassag = sor[1];
    if(magassag.includes('.'))
        magassag = magassag.padEnd(6, '0');
    else
        magassag = (magassag + '.').padEnd(6, '0');

    let suly = sor[2]
    if(suly.includes(';'))
        suly = suly.padEnd(5, '0');
    else
        suly = (suly + '.').padEnd(5, '0');

    return `Név: ${nev}, Magasság: ${magassag} cm, Súly: ${suly} kg`
}

for(let i=0; i<jellemzok.length; i++) {
    const sor = jellemzok[i].split(';');
    console.log(sorToString(sor));
}