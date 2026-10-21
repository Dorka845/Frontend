const $ = id => document.getElementById(id);

async function Kereses(){
    let keresett = $('keresett').value;
    keresett = keresett.trim();

    const citySearch = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${keresett}&limit=1&appid=e8db797abe7c31b7fc46e0cd69f8fa93`;
    
    const cityResponse = await fetch(citySearch);
    const cityData = await cityResponse.json();
    console.log(cityData)

    const lat = cityData[0].lat;
    const lon = cityData[0].lon;

    const url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e8db797abe7c31b7fc46e0cd69f8fa93`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    fillCard(data.list[0], "nap1");
    fillCard(data.list[9], "nap2");
    fillCard(data.list[18], "nap3");
    fillCard(data.list[27], "nap4");
    fillCard(data.list[36], "nap5");
}

function fillCard(data, cardId) {
    const card = $(cardId);
 
 
    const temp = data.main.temp;
    const celsius = toCelsius(temp);
    const minTemp = data.main.temp_min;
    const maxTemp = data.main.temp_max;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const wIcon = data.weather[0].icon 
 
    card.querySelector(".homerseklet").innerText = `Hőmérséklet: ${celsius.toFixed(2)} °C`;
    const img = card.querySelector(".img");
    img.src = `https://openweathermap.org/img/wn/${wIcon}@2x.png`;
    card.querySelector(".min").innerText = `Minimum hőmérséklet: ${toCelsius(minTemp).toFixed(2)} °C`;
    card.querySelector(".max").innerText = `Maximum hőmérséklet: ${toCelsius(maxTemp).toFixed(2)} °C`;
    card.querySelector(".nyomas").innerText = `Légnyomás: ${pressure} hPa`;
    card.querySelector(".para").innerText = `Páratartalom: ${humidity} %`;
}
 
function toCelsius(temp) {
    return temp - 273.15;
}

$('kereses').addEventListener('click', Kereses);
$('keresett').addEventListener('keypress', (event) => {
    if(event.key == 'Enter')
        Kereses();
});