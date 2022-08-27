let lat = -24.184049;
let lon = -65.3309975;
let lang = 'es';
let APIkey = '4523b1856fc697a79b828fdcfbfdd85f';
//let url = 'http://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + APIkey + '&lang=' + lang + '';


let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + APIkey + '&lang=' + lang + '';

//http://api.openweathermap.org/data/2.5/weather?lat=-24.184049&lon=-65.3309975&appid=6fa4f5eafdb2f1d90d1dcc06b2ae238a

/*  Tutorial
    https://w3collective.com/fetch-display-api-data-javascript/
*/

function calcularTemperatura(kelvin) {
    return Math.round((kelvin - 273.15) * 100) / 100;
}

function capitalize(texto) {
    return texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
}

function displayCiudad(ciudad) {
    document.getElementById('mensaje-del-tiempo').innerHTML = "El clima en " + ciudad;
}

function displayTemperatura(temperatura) {
    document.getElementById('temperatura').innerHTML = calcularTemperatura(temperatura) + "°C";
}

function displayCielo(cielo) {
    document.getElementById('tipo-de-clima').innerHTML = capitalize(cielo);
}

function getImage(codigo) {
    return 'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/' + codigo + '.png';
}

function displayImagen(codigo) {
    document.getElementById('card__img').src = getImage(codigo);
}

function displayError(status) {
    document.getElementById('mensaje-del-tiempo').innerHTML = "No se pudo cargar";
    document.getElementById('temperatura').innerHTML = "ERROR " + status;
    document.getElementById('card__img').src = 'https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png';
}

async function fetchClima() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            displayError(response.status);
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();

        if (response.status === 200) {
            console.log(data);
            displayCiudad(data.name);
            displayTemperatura(data.main.temp);
            displayCielo(data.weather[0].description);
            displayImagen(data.weather[0].icon);
        } else if (response.status === 401) {
            console.log('Pusiste la llave mal');
        } else if (response.status === 404) {
            console.log('Error 404');
        } else {
            console.log('Hubo un error y no sabemos que paso');
        }

    } catch (error) {
        console.error(`No se pudo obtener el clima: ${error}`);

    }
}

fetchClima();