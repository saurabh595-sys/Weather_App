 
 $(document).ready(function(){


navigator.geolocation.getCurrentPosition(success,error);

function success(pos){
var lat=pos.coords.latitude;
var long =pos.coords.longitude;
weather(lat,long);
console.log(lat);
console.log(long);
}

function error(){
console.log("error");
}


function weather(lat,long){
   var URL=` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=285c8a8c5af3b5b34e6519c5372c04c1`;
    $.getJSON(URL,function(data){
console.log(data);
updatedom(data);    
})
}
const date = new Date();
const formattedDate = date.toLocaleDateString('en-GB', {
  day: '2-digit', month: 'short', year: 'numeric'
}).replace(/ /g, '-');
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day=weekday[date. getDay()];

function updatedom(data){

var temp=Math.round(data.main.temp-273.15);
var desc=data.weather[0].description;
var city=data.name;
var count=data.sys.country;
var wind=data.wind.speed; 

$('#day-name').html(day);
$('#date-dayname').html(formattedDate);
$('#country').html(count);
$('#location').html(city);
$('#weather-temp').html(temp);
$('#weatherdescription').html(desc);
$('#wind').html(wind);

}
weather();
});
