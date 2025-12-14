async function getRandomDog() {
  const url = "https://random.dog/woof.json";
  const response = await fetch(url);
  const data = await response.json();

  const isVideo = data.url.endsWith(".mp4");

  if (isVideo) {
    document.getElementById("dogVideo").src = data.url;
    document.getElementById("dogImage").src = "";
  } else {
    document.getElementById("dogImage").src = data.url;
    document.getElementById("dogVideo").src = "";
  }
}

function getRandomCat() {
  const data = "https://cataas.com/cat?" + Math.random() * 1000;
  document.getElementById("catImage").src = data;
}

function getPerson() {
  const data = "https://thispersondoesnotexist.com/";
  document.getElementById("personImage").src = data;
}

async function getCountries() {
  const url = "https://restcountries.com/v3.1/independent?status=true";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.getElementById("count").innerText = data.length;
  document.getElementById("country").innerHTML = data
    .map(
      (country, index) =>
        `
<section>
                <h2 class="h5">${country.name.official}</h2>
                <img width="120" src=${country.flags.png} alt="">
            </section>
`
    )
    .join("");
}

async function getWeather() {
  try{
    const location = document.getElementById("location").value;
  const url = `https://goweather.herokuapp.com/weather/${location}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch Weather data");
  }

  const data = await response.json();
  console.log(data);

  if (data?.temperature) {
    document.getElementById("weatherData").innerHTML = `
    <div class="alert alert-success">
            <h2>Weather in ${location}</h2>
            <p>Temperature <strong>${data.temperature}</strong></p>
            <p>Description <strong>${data.description}</strong></p>
        </div>
    `;
  }
  else{
    document.getElementById("weatherData").innerHTML = `
    <div class="alert alert-danger">No weather data found</div>
    `
  }
  }
  catch(err){
    document.getElementById("weatherData").innerHTML = `
    <div class="alert alert-danger">No weather data found</div>
    <p class="text-danger">${err.message}</p>
    `
  }
}

setInterval(getRandomDog, 2000);
setInterval(getRandomCat, 2000);
setInterval(getPerson, 2000);
getCountries();

window.onload = function () {
  getRandomDog(), getRandomCat(), getPerson();
};
