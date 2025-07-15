const form = document.querySelector('.weather');
const input = document.querySelector('.city');
const card = document.querySelector(".card");
const api = f4700671a9959f33b41b29176917d7de;

form.addEventListener("subumit", async e =>{
    e.preventDefault();// prevent
    const city = input.ariaValueMax.trim();
    if(city)
        {
            try{
                const Data = await getweather(city);
                displayweather(Data);
            }catch(error){
                console.error(error);
            }
        } 
        else{
            displayerror("Please enter a city name");
        }
});

async function getweather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    const response= await fetch(apiUrl)
    console.log(response);

    if(!response.ok)
    {
        throw new Error("coul not fetch weather data")
    }
    return await response.json();
}
function displayweather(data)
{
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description,id}]} = data;

        card.textContent ="";
        card.computedStyleMap.display = "flex";

        const citydisplay = document.createElement("h1");
        const tempdisplay = document.createElement("p");
        const humdisplay = document.createElement("p");
        const descdisplay = document.createElement("p");
        const weatherE = document.createElement("p");
        
        citydisplay.textContent = city;
        tempdisplay.textContent = `${(temp -273.15).toFixed(1)}^C`;
        humdisplay.textContent = `Humidty: ${humidity}`;
        descdisplay.textContent = description
        weatherE.textContent = 


        citydisplay.classList.add("city");
        tempdisplay.classList.add("temp");
        humdisplay.classList.add("hum");
        descdisplay.classList.add("desc");
        weatherE.classList.add("weatherE");
        card.appendChild(citydisplay);
        card.appendChild(tempdisplay);
        card.appendChild(humdisplay);
        card.appendChild(descdisplay);
        card.appendChild(weatherE);
    
}

function getemoji(weatherid)
{

}

function displayerror(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error");

    card.textContent = "";
    card.computedStyleMap.display = "flrex";
    card.appendChild(errorDisplay);
}

