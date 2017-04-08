
    
    //APIXU json call "https://api.apixu.com/v1/current.json?+lat+long+key=68629a769f564f9bb6450153170703&q=";
    //API key = 68629a769f564f9bb6450153170703

  $(document).ready(function() {
  $.getJSON('https://api.apixu.com/v1/current.json?key=68629a769f564f9bb6450153170703&q=auto:ip', function(wd) {

    var currentLocation = wd.location.name;
    var currentRegion = wd.location.region;

    var lat = wd.location.lat;
    var lon = wd.location.lon;

     //change format of date to mm-dd-yy

    var localTime = wd.location.localtime;

    var currentWeather = wd.current.condition.text; //tie this to weather icon

    var currentIcon = wd.current.condition.icon;
      

    var tempC = wd.current.temp_c;
    var tempF = wd.current.temp_f;

    var currentWindMph = wd.current.wind_mph;
    var currentWindKph = wd.current.wind_kph;
    var windDirection = wd.current.wind_dir;

    $("#location").html(currentLocation);
    $("#date-time").html(localTime);
    $("#current-weather").html(currentWeather);
    $("#tempF").html(tempF);

    //$("#tempC").html(tempC);
    $("#current-wind-mph").html(currentWindMph);
    $("#wind-direction").html(windDirection);

    //toggle between degrees F and C

    var toggle = true;

      $("button").on("click",function(){

        if(toggle===false) {
          $("#tempF").html(tempC);
          toggle=true;
        }
        else {
          $("#tempF").html(tempF);
          toggle=false;
        }
      });

      //weather icons
      //created by Erik Flowers https://github.com/erikflowers/weather-icons

      if (currentWeather==="overcast") {
        $("#current-icon").html();
      }
   });

   
  })

