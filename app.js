function GEO(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    document.getElementById('latitude').innerHTML = lat;
    document.getElementById('longitude').innerHTML = lng; 
    google.maps.event.addDomListener('window','load',loadMap(lat,lng));
}
function loadMap(lat,lng){
    var options={
       zoom :8,
       center : new google.maps.LatLng(lat,lng),
       mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'),options);
    var marker = new google.maps.Marker({
        map : map,
        title : 'this you !',
        position : new google.maps.LatLng(lat,lng)
    })
}
function erreurGEO(erreur){
    var msg;
    switch(erreur.code){
        case erreur.TIMEOUT:
            msg = "le temps de la requete a expire";
            break;
        case erreur.UNKNOWN_ERROR:
            msg = "une erreur inconnue est arrivee";
            break;
        case erreur.POSITION_UNVAILABLE:
            msg = "pas de position disponible";
            break;
        case erreur.PERMISSION_DENIED:
            msg = "vous avez refuse la geolocalisation";
            break;
    }
    alert(msg);
}
if(navigator.geolocation){//si la geolocalisation est activeee
    navigator.geolocation.getCurrentPosition(GEO, erreurGEO,{maximumAge : 120000});
}else{

}