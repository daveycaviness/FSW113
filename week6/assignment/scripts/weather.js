// import the convertTemp.js and getDaylight.js scripts with their default export
import dayLight from "./getDaylight.js"
import myConvert from "./convertTemp.js"
// declare any variables needed
var awaitData;
// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click",() => myNewFetchData())
async function fetchData(){
    let myFetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.querySelector("#city").value}&appid=d64a765db36bca3e9a4d2692e22034b1`)
    awaitData = await myFetch.json()
    return (awaitData)
        
}
// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
function myNewFetchData(){
    fetchData()
        .then(response => newParam(response));
}

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

function newParam(result){
    let myTemp = myConvert(result.main.temp, result.sys.country)
    let myHumid = result.main.humidity
    let myCondit = result.weather[0].main
    let myDt = result.dt
    let mySunrise = result.sys.sunrise
    let mySunset = result.sys.sunset
    docuInfo(myTemp, myHumid, myCondit, myDt, mySunrise, mySunset)
}  
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function docuInfo(temp, humidity, conditions, dt, sunrise, sunset){
    document.querySelector("#tempData").textContent= temp
    document.querySelector("#humidData").textContent = humidity
    document.querySelector("#conditionsData").textContent = conditions
    if (dt >=sunrise && dt< sunset){
        document.querySelector(".weatherWrapper").style= `background-color:${dayLight(true)}; color: white; border-radius: 8px;` 
    }
    else { 
        document.querySelector(".weatherWrapper").style= `background-color:${dayLight(false)}; color: white; border-radius: 8px;`
    }   
}
