const apiKey ="e598bb43591a4ba1ab4173541242408";
const apiUrl="https://api.weatherapi.com/v1/current.json?&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon')

async function CheckWeather(city){
    const response =await fetch(apiUrl+city+`&key=${apiKey}`);
    var data = await response.json();
    console.log(data); 
    document.querySelector('.city').innerHTML =data.location.name
    document.querySelector('.temp').innerHTML =data.current.temp_c+'°C';
    document.querySelector('.humidity').innerHTML =data.current.humidity+"%";
    document.querySelector('.wind').innerHTML =data.current.wind_kph+"km/h";

    const conditionText = data.current.condition.text;
    console.log(conditionText)
//     if(conditionText==='Clouds'){
//   weatherIcon=condition.icon;
//     }
//     else if(conditionText==='Clear'){
//         weatherIcon.src="images/clear.png";
//     }
//     else if(conditionText==='Rain'){
//         weatherIcon.src="images/rain.png";
//     }
//     else if(conditionText==='Drizzle'){
//         weatherIcon.src="images/drizzle.png";
//     }
//     else if(conditionText==='Mist'){
//         weatherIcon.src="images/mist.png";
//     }
// }
}
searchBtn.addEventListener('click',()=>{
    CheckWeather(searchBox.value);
})
CheckWeather();