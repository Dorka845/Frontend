let szam = 3;
szam = 3.14;
let szoveg = "Szia Uram!";
szoveg = 'Hello-bello';

let osszefuzve = "A kedvenc számom: " + szam;
osszefuzve = `A kedvenc számom: ${szam}`;   //AltGr + 7

let logikai = true;
logikai = false;

let n = null;   
let u = undefined;  

let szam2 = 10;
//Döntsük el, hogy a szam2 pozitív-e
if (szam2 > 0) {
    console.log("pozitív")
} else if (szam2 < 0) {
    console.log("negatív")
} else {
    console.log("nulla")
}

//Találós kérdés
let i = undefined; //meg nincs meghatározva
for (i=0; i<10; i++);
console.log(i);

let paros = 2;
while (paros <= 10) {
    console.log(paros);
    paros += 2;
}

//------\\
//Tömbök
let autok = ["Audi", "BMW", "Toyota", "Kia"];
console.log(autok[0]);
autok[1] = "Ford";
console.log(autok[1]);

//Új elem hozzáfűzése (tömb végére)
autok.push("Skoda");

//Tömb bejárása ciklussal
for(i=0; i<autok.length; i++) 
    console.log(`${i}.: ${autok[i]}`);

console.log(`Törölt elem: ${autok.pop()}`); //utolso elem eltávolítása a tömbből

//------\\
//Függvények
//Camel-case: szavanként nagy kezdőbetű, kivéve az első, az kicsi
function udvozlet(){
    console.log("Üdvözöllek dicső lovag!");
}

let udv = () => {console.log("Üdv!")};

function negyzetreEmel(num){
    return num*num;
}

let negyzet = num => num*num;

//Tömbök... folytatás
//Elem szűrése a tömbben
autok.filter( auto => auto=="Toyota" );

//Törlés: Töröljük ki a Toyotákat a tömbből
autok = autok.filter(auto => auto != "Toyota");
console.log(autok);

//Index meghatározása érték alapján
autok.push("Honda", "Mercedes", "BYD");

console.log(autok.findIndex(auto => auto=="BYD"));

//Spread operátor - szétbontja elemeire a tömböt
autok = ["Seat", ...autok, "Nissan"]; //szetszedi egy objektum tömböt, és hozzáfűzi a Seat-ot és a Nissan-t
console.log(autok);

//Rest paraméter
//Készítsünk függvényt, amely számokat ad össze, és visszaadja a számok összegét
function osszead(...szamok){ //...szamok: rest paraméter, amely egy tömböt hoz létre a paraméterekből
    let osszeg = 0;
    for(let i=0; i<szamok.length; i++){
        osszeg += szamok[i];
    }
    return osszeg;
}
console.log(osszead(2, 3, 4, 5));

//Tömb függvények
console.log(autok.includes("Opel")); //true/false visszaadása, hogy a tömb tartalmazza-e az adott elemet
console.log(autok.includes("Honda"));

console.log(autok.toString()); //tömb elemeinek kiírása stringként

console.log(autok.at(2)); //2. indexű elem lekérése

console.log(autok.shift()); //első elem eltávolítása a tömbből

console.log(Array.isArray(szam)); //false
console.log(Array.isArray(autok)); //true


//Feladat:
/**
 * Adott egy 5 elemű tömb, amely egész számokat tartalmaz: [36, -2, 112, 101, 22]
 * 1.) Adjon hozzá a tömbhöz 10 új véletlen egész számot a [-100; +100] tartományról (Math.random();Math.floor())
 * 2.) Szűrjük ki egy új tömbbe a pozitív és páros számokat
 * 3.) Döntsük el (igen/nem), hogy az új tömbben van-e 100-nál nagyobb szám
 * 4.) Határozzuk meg az új tömb legnagyobb értékét
 */

let tomb = [36, -2, 112, 101, 22];

//1.
for (let i = 0; i < 10; i++) {
    tomb.push(Math.floor(Math.random() * 200 - 100));
}
console.log(tomb);

//2.
let szurt = tomb.filter(szam => szam % 2 == 0 && szam > 0)
console.log(szurt);

//3.
console.log(szurt.findIndex(szam => szam > 100) >= 0 ? "igen" : "nem");
/**
let nagyobbMintSzaz = false;
for (let i = 0; i < szurt.length; i++){
    if (szurt[i] > 100) {
        nagyobbMintSzaz = true;
    }
}
console.log(nagyobbMintSzaz)
 */


//4.
console.log(Math.max(...tomb)); 
/**
function legnagyobbErtek(arr) {
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[maxIndex])
            maxIndex = i;
    }
    return arr[maxIndex]
}
console.log(`A legnagyobb érték: ${legnagyobbErtek(szurt)}`);
 */
