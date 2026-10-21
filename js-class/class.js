//osztaly != objektum
//osztaly = Szemely, objektum = bela, kapcsolat a példányosítás
class Szemely{
    constructor(nev, foglalkozas, szuletesiEv){
        this.nev = nev;
        this.foglalkozas = foglalkozas;
        this.szuletesiEv = szuletesiEv;
    }

    hanyEves(){
        const datum = new Date();
        return datum.getFullYear() - this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely{
    static bonusz = 10;
    #azonosito = undefined;

    constructor(nev, foglalkozas, szuletesiEv, fizetes){
        super(nev, foglalkozas, szuletesiEv); //ős tulajdonsagokat az ősnek kell kezelnie, leszarmazottnak csak az ujakat kell beallitani
        this.fizetes = fizetes;
    }

    get azonosito(){ return this.#azonosito; }
    set azonosito(azon){
        if(typeof(azon) == "number") 
            this.azonosito = azon;
    }

    /* Bónuszt csak decemberben kapnak az emberek:
        -ha december van, akkor a bonusszal emelt fizetes a fizetes
        -kulonben pedig a normalis fizetest kapjak
    */
    //honapok szamozasa 0-tol kezdodik (0-januar, 1-februar, stb.)

    fizetesEbbenAHonapban(){
        if((new Date()).getMonth() == 11)
            return this.fizetes*(1+(Alkalmazott.bonusz/100));
        return this.fizetes;
    }
}

const bela = new Szemely("Vak Béla", "kéményseprő", 1975);
console.log(bela);
console.log(`${bela.nev} ${bela.hanyEves()} éves idén.`)

const irenke = new Alkalmazott("Kovács Irén", "recepciós", 1968, 523999);
irenke.azonosito = "asd asd"; //undefined
console.log(irenke.azonosito);
irenke.azonosito = 123456;
console.log(irenke.azonosito);
console.log(irenke.fizetesEbbenAHonapban());


//Feladat
/* Készítsen egy kisfonok osztalyt, amely az Alkalmazott osztalybol szarmazik 
Készítse el az osztályhoz a konctruktort, illetve vegyen még fel plusszba egy tulajdonságot is:
    -hány beosztottja van a kisfonoknek: ez csak lekerdezheto legyen, beallitani, csak a konstruktorban lehet
*/

class KisFonok extends Alkalmazott{
    #beosztottjai = 0;

    constructor(nev, foglalkozas, szuletesiEv, fizetes, beosztottakSzama){
        super(nev, foglalkozas, szuletesiEv, fizetes);
        if(beosztottakSzama >= 0 && beosztottakSzama <= 20)
            this.#beosztottjai = beosztottakSzama;
    }

    get beosztottakSzama() { return this.#beosztottjai }
}

const kisFonok = new KisFonok("Lakatos Bözso", "utcaseprő", 1987, 234987, 5)