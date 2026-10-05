const $ = id => document.getElementById(id);

async function Kereses(){
    let keresett = $('keresett').value;
    keresett = keresett.trim();
    keresett = keresett.replaceAll(' ', '+');

    const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${keresett}&media=music`;
    
    const response = await fetch(url);
    const data = await response.json();

    fillTable(data);
}

function fillTable(data){
    $('zenek').innerHTML = "";

    const rows = data.results;
    for(let i=0; i<rows.length; i++){
        let tr = document.createElement('tr');
        let sorszam = document.createElement('td');
        let eloado = document.createElement('td');
        let borito = document.createElement('td');
        let kep = document.createElement('img');
        let cim = document.createElement('td');
        let hossz = document.createElement('td');
        let ev = document.createElement('td');
        let mufaj = document.createElement('td');

        sorszam.innerText = (i+1)+"";
        eloado.innerText = rows[i].artistName;
        kep.src = rows[i].artworkUrl60;
        cim.innerText = rows[i].trackName;
        hossz.innerText = ms2Time(rows[i].trackTimeMillis) ?? "";
        ev.innerText = rows[i].releaseDate.substring(0, 4);
        mufaj.innerText = rows[i].primaryGenreName;

        cim.onclick = () =>{
            $('lejatszo').src = rows[i].previewUrl;
        }
        cim.classList.add('play');

        tr.appendChild(sorszam);
        tr.appendChild(eloado);
        borito.appendChild(kep);
        tr.appendChild(borito);
        tr.appendChild(cim);
        tr.appendChild(hossz);
        tr.appendChild(ev);
        tr.appendChild(mufaj);

        $('zenek').appendChild(tr);
    }
}

function ms2Time(input){
    if(!input)
        return undefined;

    let m = Math.floor(input/(60*1000));
    input = input-(m*1000*60);
    let s = Math.floor(input/(1000));
    let ms = input-(s*1000);

    let str = "";
    str += m.toString().padStart(2, '0') + ":";
    str += m.toString().padEnd(2, '0') + ":";
    str += m.toString().padStart(3, '0');

    return str;
}

$('kereses').addEventListener('click', Kereses);
$('keresett').addEventListener('keypress', (event) => {
    if(event.key == 'Enter')
        Kereses();
});