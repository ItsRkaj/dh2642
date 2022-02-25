<script>
  import { AsyncWeather } from '@cicciosgamino/openweather-apis'
  const weather = await new AsyncWeather()
  // retrieve the Api Key from OS env
  // or copy the Api Key into
  const apiKey = 'fc8c7776c89b98c98f3158cb25a98586'
  weather.setApiKey(apiKey);
  weather.setLang('en');
  weather.setUnits('metric');

export default {
  data() {
    return {
      weather: {},
      loaded: false,
      //---------------Variables for the information text-------------
      currentDateAndTime: this.currentDate(),
      currentCity: '',
      currentTemp: '',
      currentDescription: '',
      currentFeelsLike: '',
      //---------------Toggle classes for weather icons---------------
      isSunny: false,
      isPartlyCloudy: false,
      isCloudy: false,
      isRainy: false,
      isThundery: false,
      isSnowing: false,
      isNight: false
    }
  },
  methods: {
    currentDate() {
      function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();  //Format 1 to 01 etc.
      }
      const d = new Date();

      const dayName = d.toString().split(' ')[0];    //3 first letters
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const monthName = months[d.getMonth()];

      return `${dayName}, ${d.getDate()} ${monthName} ${d.getHours()}:${pad(d.getMinutes())}`;
    },
    getWeather(coords) {
        weather.setCoordinates(coords.latitude, coords.longitude);
        weather.getAllWeather()
        .then(result => {
          this.weather = result;
          this.loaded = true;
          })	// number 23.48
        .catch(error => console.log(error))
    },
    getCurrentCity(){
      return this.weather.name;
    },
    getCurrentTemp(){
      return this.weather.main.temp.toFixed(0);
    },
    getCurrentDescription(){
      return this.weather.weather[0].description;
    },
    getCurrentFeelsLike(){
      return this.weather.main.feels_like.toFixed(0);
    },
    getCurrentMain(){
      return this.weather.weather[0].main;
    },
    getHours(){
      const h = new Date();
      return h.getHours();
    }
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeather(position.coords);
    });
    setInterval(() => {
      //-------------------Updates Text------------------
      this.currentDateAndTime = this.currentDate();
      this.currentCity = this.getCurrentCity();
      this.currentTemp = this.getCurrentTemp();
      this.currentDescription = this.getCurrentDescription();
      this.currentFeelsLike = this.getCurrentFeelsLike();
      this.currentMain = this.getCurrentMain();

      //-------------------Updates CSS-------------------
      if(this.getHours() > 15){
        this.isNight = true;
      } else if(this.currentMain == 'Clear'){
        this.isSunny = true;
      } else if(this.currentMain == 'Clouds' && this.currentDescription == 'few clouds'){
        this.isPartlyCloudy = true;
      } else if(this.currentMain == 'Clouds'){
        this.isCloudy = true;
      } else if(this.currentMain == 'Rain'){
        this.isRainy = true;
      } else if(this.currentMain == 'Thunderstorm'){
        this.isThundery = true;
      } else if(this.currentMain == 'Snow'){
        this.isSnowing = true;
      } else {
        this.isNight = false;
        this.isSunny = false;
        this.isPartlyCloudy = false;
        this.isCloudy = false;
        this.isRainy = false;
        this.isThundery = false;
        this.isSnowing = false;
      }
    }, 50)
  }
}
</script>

<template>
  <div id="rainWrapper">
    <div v-bind:class="{rain: isRainy, layer1: isRainy, a: isRainy}"></div>
    <div v-bind:class="{rain: isRainy, layer1: isRainy}"></div>
    <div v-bind:class="{rain: isRainy, layer2: isRainy, a: isRainy}"></div>
    <div v-bind:class="{rain: isRainy, layer2: isRainy}"></div>
    <div v-bind:class="{rain: isRainy, layer3: isRainy, a: isRainy}"></div>
    <div v-bind:class="{rain: isRainy, layer3: isRainy}"></div>
  </div>
  <div id="snowflakesWrapper">
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
    <div v-bind:class="{snow: isSnowing}"></div>
  </div>
  <div id="weatherWrapper" v-bind:class="{sunnyBG: isSunny, nightBG: isNight, snowingBG: isSnowing}">
    <div id="weatherInfo" v-if="loaded">
      <p id="city">
        {{currentCity}}
      </p>
      
      <p id="currentDateAndTime">
        {{currentDateAndTime}}
      </p>

      <p id="temp">
        {{currentTemp}}°<span id="c">C</span>
      </p>

      <p id="feelsLike">
        Feels like {{currentFeelsLike}}°C
      </p>

      <p id="description">
        {{currentDescription}}
      </p>

      <p id="tempHighLow">H: {{this.weather.main.temp_max.toFixed(0)}}°C L: {{this.weather.main.temp_min.toFixed(0)}}°C</p>

      <div v-bind:class="{sunny: isSunny, partly_cloudy: isPartlyCloudy, rainy: isRainy, thundery: isThundery, cloudy: isSnowing || isCloudy, moon: isNight}">
        <div v-bind:class="{partly_cloudy__sun: isPartlyCloudy, rainy__cloud: isRainy, thundery__cloud: isThundery}"></div>
        <div v-bind:class="{partly_cloudy__cloud: isPartlyCloudy, rainy__rain: isRainy, thundery__rain: isThundery}"></div>
      </div>
    </div>
    <div id="loadingWheel" v-else>
      <section class="talign-center">
        <div class="spinner icon-spinner-2" aria-hidden="true"></div>
      </section>
    </div>
    <svg id="waves" v-bind:class="{invert: isNight || isThundery || isRainy}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#E6EBEB" fill-opacity="0.5" d="M0,256L60,234.7C120,213,240,171,360,133.3C480,96,600,64,720,96C840,128,960,224,1080,256C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      <path fill="#E6EBEB" fill-opacity="1" d="M0,320L60,314.7C120,309,240,299,360,288C480,277,600,267,720,240C840,213,960,171,1080,170.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      <path fill="#E6EBEB" fill-opacity="0.25" d="M0,128L60,112C120,96,240,64,360,58.7C480,53,600,75,720,101.3C840,128,960,160,1080,192C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  //--------------------------------Standard css styling---------------------------------
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  .invert {
    filter: invert(1);
  }

  #rainWrapper{
    position: relative;
    z-index: 1;
  }

  #snowflakesWrapper{
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 10px white);
  }
  #weatherWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-size: cover;
    position: relative;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    transition: background 0.5s ease-in-out;
  }
  .sunnyBG {
    background-image: radial-gradient(ellipse at bottom, #95eaff 0%, #00518d 100%)!important;
  }
  .nightBG {
    background-image: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)!important;
  }
  .snowingBG{
    background-image: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)!important;
  }

  #description::first-letter {
    text-transform: uppercase;
  }

  #weatherInfo {
    z-index: 2;
    font-weight: 600;
    text-align: center;
  }

  #city {
    font-size: 48px;
    font-weight: 600;
  }

  #currentDateAndTime {
    font-weight: 300;
    padding-bottom: 5px;
  }

  #temp {
    font-size: 128px;
    font-weight: 200;
  }

  #c {
    font-size: 115px;
  }

  #feelsLike {
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 5px;
  }

  #description {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  #tempHighLow{
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 5px;
  }
  #waves {
    width: 100%;
    bottom: 0;
    position: absolute;
  }
  #loadingWheel {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  //--------------------------------Animated Weather Icons----------------------------------
  .sunny {
    position: relative;
    width: 20rem;
    height: 20rem;
    margin-top: 4rem;
  }

  .sunny,
  .partly_cloudy__sun {
    &:before {
      content: "";
      position: absolute;
      height: 80%;
      width: 80%;
      top: 10%;
      right: 10%;
      border-radius: 50%;
      z-index: 2;
      background-color: #f1c40f;
      background-image: radial-gradient(#f1c40f, #f39c12);
      box-shadow: 0 0 25px #917508;
    }
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: 50%;
      z-index: 1;
      background-color: #f39c12;
      will-change: opacity, transform;
      animation: fadeIn 2s linear infinite reverse,
      scaleDown 2s linear infinite reverse;
    }
  }

  .cloudy {
    position: relative;
    width: 20rem;
    height: 20rem;
  }
  .cloudy,
  .partly_cloudy__cloud,
  .rainy__cloud,
  .thundery__cloud {
    &:before {
      content: "";
      position: absolute;
      height: 40%;
      width: 40%;
      top: 30%;
      right: 0;
      border-radius: 50%;
      border-bottom-left-radius: 0;
      z-index: 2;
      background-color: #ecf0f1;
      background-image: radial-gradient(#ecf0f1, #bdc3c7);
      box-shadow: 0 0 25px rgba(0,0,0,.3);
    }
    &:after {
      content: "";
      position: absolute;
      height: 60%;
      width: 70%;
      top: 10%;
      right: 30%;
      border-radius: 50%;
      border-bottom-right-radius: 0;
      z-index: 1;
      background-color: #ecf0f1;
      background-image: radial-gradient(#ecf0f1, #bdc3c7);
      box-shadow: 0 0 25px rgba(0,0,0,.3);
    }
  }

  .partly_cloudy {
    position: relative;
    width: 20rem;
    height: 20rem;
    &__sun {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    &__cloud {
      position: absolute;
      width: 60%;
      height: 60%;
      top: 40%;
      z-index: 2;
      will-change: transform;
      animation: translateUp 2s linear infinite alternate;
    }
  }

  .rainy,
  .thundery {
    position: relative;
    width: 20rem;
    height: 20rem;
    &__cloud {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
      &:before {
        background-color: #95a5a6;
        background-image: radial-gradient(#95a5a6, #7f8c8d);
      }
      &:after {
        background-color: #95a5a6;
        background-image: radial-gradient(#95a5a6, #7f8c8d);
      }
    }
    &__rain {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      overflow: hidden;
      &:before {
        content: "";
        position: absolute;
        height: 80%;
        width: 20%;
        top: 20%;
        right: 50%;
        z-index: 1;
        background-image: linear-gradient(transparent, #94cdd1);
        will-change: opacity, transform;
        animation: fadeIn 1s ease-out infinite reverse,
        scaleUp 1s ease-out infinite;
      }
      &:after {
        content: "";
        position: absolute;
        height: 60%;
        width: 20%;
        top: 40%;
        right: 20%;
        z-index: 1;
        opacity: 0;
        background-image: linear-gradient(transparent, #94cdd1);
        will-change: opacity, transform;
        animation: fadeIn 2s ease-out .4s infinite reverse,
        scaleUp 2s ease-out .4s infinite;
      }
    }
  }

  .thundery {
    &__cloud {
      &:before {
        background-color: #4d5656;
        background-image: radial-gradient(#4d5656, #393c3c);
        animation: thunder 4s linear .02s infinite alternate;
      }
      &:after {
        background-color: #4d5656;
        background-image: radial-gradient(#4d5656, #393c3c);
        animation: thunder 4s linear infinite alternate;
      }
    }
    &__rain {
      &:before {
        animation: fadeIn .5s ease-out infinite reverse,
        scaleUp .5s ease-out infinite;
      }
      &:after {
        animation: fadeIn .75s ease-out .2s infinite reverse,
        scaleUp .75s ease-out .2s infinite;
      }
    }
  }

  .moon {
    width: 18rem ;
    height: 18rem ;
    background-color: transparent ;
    box-shadow: inset 3rem -3rem #ccc;
    border-radius: 20rem ;
  }


  // Animations
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes scaleDown {
    0% { transform: scale(1); }
    100% { transform: scale(.8); }
  }

  @keyframes translateUp {
    0% { transform: translatey(15%); }
    100% { transform: translatey(0); }
  }

  @keyframes scaleUp {
    0% { transform: scaley(0); }
    100% { transform: scaley(1); }
  }

  @keyframes thunder {
    0% { box-shadow: 0 0 25px #fff; }
    2% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    49% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    50% { box-shadow: 0 0 25px #fff; }
    52% { box-shadow: 0 0 25px #f7db6e; }
    53% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    69% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    70% { box-shadow: 0 0 25px #fff; }
    71% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    75% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    76% { box-shadow: 0 0 25px #fff; }
    77% { box-shadow: 0 0 25px #a8d3f0; }
    78% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
    100% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
  }

  //---------------------------------Loading Wheel---------------------------------------
  @font-face {
    font-family: 'icomoon';
    src: url("data:application/x-font-ttf;charset=utf-8;base64,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") format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-spinner-2:before {
    content: "\e001";
  }

  @keyframes anim-rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinner {
    display: inline-block;
    font-size:4em;
    height: 1em;
    line-height: 1;
    margin: .5em;
    animation: anim-rotate 2s infinite linear;
    color: #fff;
    text-shadow: 0 0 .25em rgba(255,255,255, .3);
  }
  .spinner--steps {
    animation: anim-rotate 1s infinite steps(8);
  }
  .spinner--steps2 {
    animation: anim-rotate 1s infinite steps(12);
  }

  .talign-center {
    text-align: center;
  }

  //-----------------------------Rain--------------------------
  $s1:"";
  $s2:"";
  $s3:"";
  @for $i from 1 through 300 {
    $s1: $s1 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    $s2: $s2 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    $s3: $s3 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    @if $i < 300 {
      $s1: $s1 + ",";
      $s2: $s2 + ",";
      $s3: $s3 + ",";
    }
  }
  .rain {
    opacity: 0.8;
    position: absolute;
    top:-100vh;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .layer1 {
    width: 0.2rem;
    height: 2rem;
    filter:blur(3px);
    box-shadow: #{$s1};
    animation-duration: 3s;
  }
  .layer1.a {
    animation-delay: -1.5s;
  }
  .layer2 {
    width: 0.2rem;
    height: 2rem;
    filter:blur(3px);
    box-shadow: #{$s2};
    animation-duration: 4s;
  }
  .layer2.a {
    animation-delay: -2s;
  }
  .layer3 {
    width: 0.1rem;
    height: 2rem;
    filter:blur(6px);
    box-shadow: #{$s3};
    animation-duration: 5s;
  }
  .layer3.a {
    animation-delay: -2.5s;
  }
  @keyframes fall {
    100% {transform: translateY(200vh); }
  }

  //-----------------------------Snowflakes--------------------------
  @function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));
    @return $random_range;
  }

  .snow {
    $total: 200;
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;

    @for $i from 1 through $total {
      $random-x: random(1000000) * 0.0001vw;
      $random-offset: random_range(-100000, 100000) * 0.0001vw;
      $random-x-end: $random-x + $random-offset;
      $random-x-end-yoyo: $random-x + ($random-offset / 2);
      $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
      $random-yoyo-y: $random-yoyo-time * 100vh;
      $random-scale: random(10000) * 0.0001;
      $fall-duration: random_range(10, 30) * 1s;
      $fall-delay: random(30) * -1s;

      &:nth-child(#{$i}) {
        opacity: random(10000) * 0.0001;
        transform: translate($random-x, -10px) scale($random-scale);
        animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
      }

      @keyframes fall-#{$i} {
        #{percentage($random-yoyo-time)} {
          transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
        }

        to {
          transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
        }
      }
    }
  }
</style>