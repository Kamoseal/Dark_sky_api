//Api key e365649fef4aae779ff9d823b4f69fd3 =>
const dataApi = () => {
    const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e365649fef4aae779ff9d823b4f69fd3/37.8267,-122.4233";
    
    fetch(url) 
    .then (response => response.json()).then(data => datajson (data));
}
const datajson = function(json){
    console.log(json);
    
}
dataApi()