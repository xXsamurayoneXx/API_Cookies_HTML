"use strict";

function initMap() {
  const myLatLng = {
    lat: 25.725493,
    lng: -100.315114
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: true
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "FCFM"
  });
}