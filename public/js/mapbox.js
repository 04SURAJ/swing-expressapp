/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);

console.log(locations);


mapboxgl.accessToken = 'pk.eyJ1IjoibXNyYXNla2FyIiwiYSI6ImNsZW9sc2kyejAzbnQzdXJ2YzVlMTZ6YTMifQ.LE0_X-8WrkmR8xr5S8pSSg';

var map = new mapboxgl.Map({
  container: 'map',
   style: 'mapbox://styles/msrasekar/cleolvbb200cw01msaqfi5gh3',
});
