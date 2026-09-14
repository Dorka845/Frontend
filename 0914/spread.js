//Spread operátor - tömb elemeire bontása
const szamok = [1, 2, 3, 4, 5];
console.log(szamok);
console.log(...szamok); //szetszedi valtozoira, mintha ciklussal vegigmennenk rajta, egy for ciklust kell moge kepzelni

//...szamok == 1, 2, 3, 4, 5
const ujSzamok = [-3, -4, -5, ...szamok];
console.log(ujSzamok);


//Rest paraméter - függvény paramétereit gyúrja össze egy tömbbe
function atlag(...szamok){
    let osszeg = 0;
    for(let i=0; i<szamok.length; i++){
        osszeg += szamok[i];
    }
    return osszeg/szamok.length;
}

atlag(12, 19);
atlag(4, 8, 3);
atlag(23, 12, 10, 9, 3, 45, 12, 67, 23);