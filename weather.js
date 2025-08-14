const search = document.getElementById("search");
const cityinput = document.getElementById("cityinput");
const cityname = document.getElementById("cityname");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const desc = document.getElementById("desc");
search.addEventListener("click",()=>{
    const apikey = "14dd5bd96236f3dce0b2d06825f18585";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apikey}&units=metric`).then(response=>response.json()).then(data=>{
        cityname.innerText = data.name;
        temp.innerText = "temperature: "+data.main.temp+"C";
        desc.innerText = "description: "+data.weather[0].description;
        humidity.innerText = "humidity: "+data.main.humidity+"%";
        cityinput.value="";
    }).catch(()=>{
        alert("City not found! please try again.");
    });
});