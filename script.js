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

if(data){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=daltonganj&appid=0133cc5316757ac730cc46ae342334e4`)
    const weatherData=await response.json()
}
if(weatherData.cod===200){
    weatherInfo.innerHTML=`<h3>weather info</h3>
    <p>city:${weatherData.name}</p>
    <p>temp:${(weatherData. main.temp-273).toFixed(1)}c</p>
    <p>weather:${weatherData.weather[0].main}</p>
    <p>Speed:${weatherData.wind.speed}m/s</p>'
    if(historyData.includes(data)===false){
    historyData.push(Data)
    localStorage.setItem("history",JSON.stringify(historyData))
    }
`}else{
    weatherInfo.innerHTML=`<h3>weather Info</h3><p>city not found</p>`
}
}catch(error){
    console.log(error)
}

fucntion showHistory(){
    if(localStorage.getItem("history")){
        historyData=JSON.parse(localStorage.getItem("history"))
        historyData.forEach((ele)=>{
            const li=document.creatorElement("button")
            li.textContent=ele
            history.appendChild(li)
            li.addEventListener('click',()=>{
                getData(ele)
            })
        }
    }
}
showHistory()
