const key = "7c8662c98453afe8bdd1730be11d1802"


function datascreen(data){
document.querySelector(".city").innerHTML ="Tempo em " + data.name
document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) +" ºC "
document.querySelector(".text-forecast").innerHTML = data.weather[0].description
document.querySelector(".humidity").innerHTML ="Umidade : " + data.main.humidity + "%"
document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function findCity(city) {
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    datascreen(data)
}


function Clickedbutton() {
    const city = document.querySelector(".input-city").value

    findCity(city)
}

