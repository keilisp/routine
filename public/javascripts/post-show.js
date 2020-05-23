mapboxgl.accessToken =
  "pk.eyJ1IjoibWVkaW9jcml0eSIsImEiOiJjazg3Y2lsMHAwMm1rM2VtNjEyMXhlOXdxIn0.QutaMzYCKHEKFXreM0j1Mg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: post.coordinates,
  zoom: 5
});

// add markers to map
// create a DOM element for the marker
var el = document.createElement("div");
el.className = "marker";

// add marker to map
new mapboxgl.Marker(el)
  .setLngLat(post.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML("<h3>" + post.title + "</h3><p>" + post.location + "</p>")
  )
  .addTo(map);
