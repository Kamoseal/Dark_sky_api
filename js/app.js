//Api key e365649fef4aae779ff9d823b4f69fd3 =>
const dataApi = () => {
    const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e365649fef4aae779ff9d823b4f69fd3/37.8267,-122.4233";
    
    fetch(url) 
    .then (response => response.json()).then(data => datajson (data));
}
const datajson = function(json){
    console.log(json);
    const today = document.getElementById('today-container');
    const forecast = document.getElementById('forecast-container');

    let template = `
        <div>Temperature: ${json.currently.apparentTemperature}</div>
        <div>Humedad: ${json.currently.humidity}</div>
        <div>UV Indice: ${json.currently.uvIndex}</div>
        <div>Presión: ${json.currently.pressure}`;
    today.innerHTML = template;

    let templateForcast = json.daily.data.forEach( day => {
        let currentDay = `<hr>
            <div>${unixDateToCurrentDate(day.time)}</div>
           <div>Icono: ${day.icon}</div>
           <div>Temperatura Máxima: ${day.temperatureHigh} and Temperature Minima: ${day.temperatureMin}</>`;
        forecast.insertAdjacentHTML('beforeEnd', currentDay);
    });
};

const unixDateToCurrentDate = (unixNumber) => new Date(unixNumber * 1000).toLocaleString('es-MX', { weekday: 'long' });


dataApi()