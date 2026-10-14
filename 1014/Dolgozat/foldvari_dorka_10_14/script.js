async function lekerdezes() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data);
    fillCard(data);
}

function fillCard(data){
    let img = data.results[0].picture.large
    let name = data.results[0].name.first + " " + data.results[0].name.last;
    let address = "Address: " + data.results[0].location.country + ", " + data.results[0].location.city + " " + data.results[0].location.state + " " + data.results[0].location.street.name + " " + data.results[0].location.postcode;
    let email =  "E-mail: " + data.results[0].email;
    let phone = "Phone: " + data.results[0].phone;

    document.getElementById('img').src = img;
    document.getElementById('name').textContent = name;
    document.getElementById('address').textContent = address;
    document.getElementById('email').textContent = email;
    document.getElementById('number').textContent = phone;
}

document.getElementById('button').addEventListener('click', lekerdezes)