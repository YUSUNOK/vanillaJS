const API_KEY = "2834387742b25d5393a21e88fee8246a";
function onGeoOk(position) {
  console.log(position);
  const lati = position.coords.latitude; // 위도
  const long = position.coords.longitude; // 경도
  console.log(lati, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.getElementById("weather");
      const name = data.name;
      const weather = data.weather[0].main;
    }); // f12 network - preview에서 자세한 정보 확인할 수 있다.
  /*
        fetch ; promise이다. 이는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어난다.
        .name 
        .weather
    
    
    
    
    */
}

function onGeoError() {
  alert(`Can't find you. No weather for you`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 브라우저에서 위치 좌표를 준다.

//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getcurrentPosition

/*
    wheather API 계정 열기 
    : openweathermap.org -> API -> Current Weather Data --> 우리가 있는 장소의 이름과 현재 날씨를 준다.
    
    API : 다른 서버와 이야기 할 수 있는 방법 (여기서는 Open weather map 서버와 이야기 할 것이다.)
    API call url에서 정보를 응답한다.

    


    JS에서 url을 부르는 방법 : 실제로 url에 갈 필요없이 JS가 대신 URL을 부는 방법인 fetch를 쓴다. 
*/
