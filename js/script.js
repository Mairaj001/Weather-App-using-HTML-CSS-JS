const Api_key = "deda3fb8fb0921427cfb73853d1c3735";
const Api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric"

let temp= document.getElementsByClassName('temp')[0];
let city= document.getElementsByClassName('city')[0];
let humidity= document.getElementById('humidity_text');
let wind = document.getElementById('wind');
let weather_img=document.getElementById('weather_image');
let country = "Islamabad";

let weather_status= document.getElementById('status');

let weather = "";
function fetch_country()
{
    
    country=document.getElementById('input').value;
    console.log(country);
    check_the_weather()

}






async function check_the_weather()
{
    let response= await fetch(Api_url + `&q=${country}` +`&appid=${Api_key}` );
   
    var data = await response.json();

    console.log(data.cod);
    if(data.cod=="404")
    {
        temp.innerHTML="";
        city.innerHTML="No city";
        humidity.innerHTML="";
        wind.innerHTML="";
    }

    else{ 
    console.log(data);
    temp.innerHTML = Math.round(data.main.temp) + ' &deg;C';
    city.innerHTML = data.name;
    humidity.innerHTML=data.main.humidity + ' %'; 
    wind.innerHTML=data.wind.speed + ' km/h';
    weather=data.weather[0].main;
    if(weather=='Clouds'){
      weather_img.src='imgs/clouds.png';
      weather_status.innerHTML='Clouds';
    }
  
    else if(weather=='Clear'){
        weather_img.src='imgs/clear.png';
        weather_status.innerHTML='Clear';
      }
    else if(weather=='Drizzle'){
        weather_img.src='imgs/Drizzle.png';
        weather_status.innerHTML='Drizzle';
      }
    else if(weather=='Mist'){
        weather_img.src='imgs/Mist.png';
        weather_status.innerHTML='Mist';
      }
    else if(weather=='Rain'){
        weather_img.src='imgs/Rain.png';
        weather_status.innerHTML='Rain';
      }

    else if(weather=='Snow'){
        weather_img.src='imgs/snow.png';
        weather_status.innerHTML='Snow';
      }
    }

}

