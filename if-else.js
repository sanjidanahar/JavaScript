navigator.geolocation.getCurrentPosition(function(position){
    let altitude = position.coords.altitude;
    let latitude = position.coods.latitude;
    let longitude = position.coords.longitude;
    let speed = position.coods.speed;

    document.write("altitude: "+altitude+"<br>");
    document.write("latitude: "+latitude+"<br>");
    document.write("longitude: "+longitude+"<br>");
    document.write("speed: "+speed+"<br>");

})