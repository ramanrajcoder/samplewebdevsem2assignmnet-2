const from=document.querySelector("weather_form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(city.value)
})


//https://api.openweathermap.org/data/2.5/weather?q=daltonganj&appid=0133cc5316757ac730cc46ae342334e4

const API_KEY="0133cc5316757ac730cc46ae342334e4"
const form=document.querySelector("#weather_from")

form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(city.value)
    const data=city.value
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=daltonganj&appid=0133cc5316757ac730cc46ae342334e4`)
    const weatherData=await response.json()
    console.log("city",weatherData.name)
    console.log("temperature",weatherData.main.temp-273).toFixed(1)
})