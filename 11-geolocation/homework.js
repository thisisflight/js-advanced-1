"use strict";

// промис для геолокации
const geoPromise = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
});

// функция для отображения геолокации на HTML странице
function fillLocation(locationsObj) {
  const latitudeElement = document.getElementById("latitude"),
    longitudeElement = document.getElementById("longitude");
  const { latitude, longitude } = locationsObj;
  latitudeElement.textContent = `Широта: ${latitude}`;
  longitudeElement.textContent = `Долгота: ${longitude}`;
}

// вызов промиса
geoPromise
  .then((data) => fillLocation(data))
  .catch((error) => console.log(error));
