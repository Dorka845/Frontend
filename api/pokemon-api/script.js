const typeMap = new Map([ //szótár
    ["normal", "#DEB887"],
    ["fire", "#8B0000"],
    ["water", "#6495ED"],
    ["electric", "#008B8B"],
    ["grass", "#006400"],
    ["ice", "#87CEEB"],
    ["fighting", "#FF7F50"],
    ["poison", "#808000"],
    ["ground", "#556B2F"],
    ["flying", "#FDF5E6"],
    ["psychic", "#9370DB"],
    ["bug", "#228B22"],
    ["rock", "#696969"],
    ["ghost", "#D8BFD8"],
    ["dragon", "#800080"],
    ["dark", "#2F4F4F"],
    ["steel", "#B0C4DE"],
    ["fairy", "#FFB6C1"]
]);

const $ = id => document.getElementById(id);
const url = "https://pokeapi.co/api/v2/pokemon/"; //fontos a / jel különben nem fog működni

let getPokeData = async(name="") =>{ //adatok lekérése
    let finalUrl;
    if(name==""){
        let id = Math.floor(Math.random()*1025+1); //1-1025 között
        finalUrl = url + id;
    } else {
        finalUrl = url + name;
    }

    try{
        const response = await fetch(finalUrl);
        if(response.status == 404)
            throw new Error();
        
        const data = await response.json();
        $('error').style.display = "none";

        //console.log(data);
        filLCard(data);
    } catch(err) {
        $('error').style.display = "block";
    }
}

let filLCard = data =>{ //adatok betöltése
    const hp = data.stats[0].base_stat;
    const img = data.sprites.other['official-artwork'].front_default;
    let name = data.name;
    name = name[0].toUpperCase() + name.substring(1);
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    const types = data.types;

    $('hp').innerText = "HP: " + hp;
    $('img').src = img;
    $('name').innerText = name;
    $('attack').innerText = attack;
    $('defense').innerText = defense;
    $('speed').innerText = speed;

    appendTypes(types);
    styleCard(types[0].type.name);
}

let appendTypes = types =>{ //typeok szétszedése, html element hozzáadása
    $('types').innerHTML = "";
    for(let i=0; i<types.length; i++){
        let span = document.createElement("span");
        span.textContent = types[i].type.name;
        $('types').appendChild(span);
    }
}

let styleCard = type =>{ //kártya színezése szótár alapján
    const color = typeMap.get(type);
    $('card').style.background = `radial-gradient(circle at 50% 0%, ${color} 38%, #fff 40%)`;
    $('card').querySelectorAll("#types span").forEach(typeSpan => {
        typeSpan.style.backgroundColor = color;
    });
}

$('btn').addEventListener('click',() => { getPokeData() });
$('btn2').addEventListener('click', ()=>{
    const pokeName = $('poke-name').value;
    getPokeData(pokeName);
})