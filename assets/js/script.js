// Select form element 
var searchForm = document.getElementById('search-form')
var APIKEY = '59bdde87e95c98addc17d30b11d2f505'
var forecast = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
// add event listener 
searchForm.addEventListener('submit',function(event){
    event.preventDefault()
    var cityname= document.getElementById('city-input').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    console.log(cityname)
})
