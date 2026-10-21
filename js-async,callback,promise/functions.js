function getTime() {
    let time = new Date();
    let h = (time.getHours()+"").padStart(2, '0');
    let m = (time.getMinutes()+"").padStart(2, '0');
    let s = (time.getSeconds()+"").padStart(2, '0');
    let ms = (time.getMilliseconds()+"").padStart(3, '0');

    document.getElementById('time').innerText = `A pontos idő: ${h}:${m}:${s}:${ms}`;

    setTimeout(getTime, 25);
}
getTime();

/* Feladat:
    Írjuk ki a konzolra az első 10 természetes számot, 1 mp-s időközzel, de ciklus nélkül. (setTimeout() kell hozzá)
*/

let i = 1;
function fv() {
    console.log(i);
    i++;
    if(i>10)
        return;
    setTimeout(fv, 1000);
}
fv();