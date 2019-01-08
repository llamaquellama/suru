var marker ;

function initMap() {
  let divMap =document.querySelector('#map'),
      latLng;

  latLng = { lat: 9.9333, lng: -84.0833 };
  map = new google.maps.Map(divMap, { center: latLng, zoom: 8 });
  marker = new google.maps.Marker({
      map: map,
      draggable: true,
      position: new google.maps.LatLng(latLng.lat, latLng.lng)
  });
 
  gCoder = new google.maps.Geocoder();
}
