// Enabling loading animation
const loader = $(".loader");
const suggestions_box = $(".flex-center-results");
$(document)
  .ajaxStart(function() {
    loader.css({ opacity: 1 });
  })
  .ajaxStop(function() {
    loader.css({ opacity: 0 });
  });

// Getting emoji flags
$.getJSON(`assets/json/flags.json`, function(data) {
  window.flags = data;
});

$("#gt").on("input", function() {
  new SuggestionsQuery($(this).val());
});

$("body").on("click", ".custom-control", function() {
  window.category = $(this).attr("id");
  trigger_search($("#gt").val());
});

$("body").on("click", ".result", function() {
  console.log(
    $(this).data("code"),
    $(this)
      .data("toponym")
      .toLowerCase()
      .replace(" ", "_")
  );
});

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5ubWdlcmlhbiIsImEiOiJjandtOTdqZmUwMHFiM3lxa213bTVqc202In0.RPkZsjxRE_EkSelXcm_7og";
var map = new mapboxgl.Map({
  container: "mapid",
  style: "mapbox://styles/mapbox/streets-v11"
});

function render_map(coordinates, center, zoom) {
  map.addLayer({
    id: "highlight",
    type: "fill",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [coordinates]
        }
      }
    },
    layout: {},
    paint: {
      "fill-color": "#4285f4",
      "fill-opacity": 0.8
    }
  });

  map.jumpTo({
    center: [31.783447265624996, 52.11240908504091],
    zoom: 3
  });

  map.getLayer("highlight");
}
