// Select form element 
var searchForm = document.getElementById('search-form')
var APIKEY = '59bdde87e95c98addc17d30b11d2f505'
var forecast = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

const name = document.querySelector(".name")
const icon = document.querySelector(".icon")
const temp = document.querySelector(".temp")
const wind = document.querySelector(".wind")
const hum = document.querySelector(".hum")

const fcCard = document.querySelectorAll(".fcCard")


// add event listener 
searchForm.addEventListener('submit',function(event){
    event.preventDefault()
    var cityname= document.getElementById('city-input').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=imperial`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        name.innerHTML = data.name
        icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
        icon.setAttribute("alt", data.weather[0].description)
        temp.innerHTML = "Temp: " + data.main.temp + "&#176F"
        wind.innerHTML = "Wind: " + data.wind.speed + "mph"
        hum.innerHTML = "Humidity: " + data.main.humidity + "%"
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIKEY}&units=imperial`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            for(let i = 0; i < fcCard.length; i++) {
                fcCard[i].innerHTML = ""
                const index = i * 8 + 4;
                const fcIcon = document.createElement("img")
                fcIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[index].weather[0].icon + "@2x.png")
                fcIcon.setAttribute("alt", data.list[index].weather[0].description )
                fcCard[i].append(fcIcon)
                const fcTemp = document.createElement('li')
                fcTemp.innerHTML = "Temp: " + data.list[index].main.temp + "&#176F"
                fcCard[i].append(fcTemp)
                const fcWind = document.createElement('li')
                fcWind.innerHTML = "Wind: " + data.list[index].wind.speed + "mph"
                fcCard[i].append(fcWind)
                const fcHumidity = document.createElement('li')
                fcHumidity.innerHTML = "Humidity: " + data.list[index].main.humidity + "%"
                fcCard[i].append(fcHumidity)
            }
        })
    })
    console.log(cityname)
})
