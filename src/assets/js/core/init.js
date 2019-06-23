const loader = $(".loader");

const suggestions_box = $(".flex-center-results");
const map_box = $(".map");
const search_info = $(".search-info");
window.category = null;

$(document)
  .ajaxStart(function() {
    loader.css({ opacity: 1 });
  })
  .ajaxStop(function() {
    loader.css({ opacity: 0 });
  });

$.getJSON(`assets/json/flags.json`, function(data) {
  window.flags = data;
});

$.getJSON(`assets/json/continents-polygon.json`, function(data) {
  window.continents_polygon = data.features;
});

$("#gt").on("input", function() {
  window.user_input = $(this).val();
  new SuggestionsQuery(window.user_input);
});

$(".custom-control").on("click", function() {
  category = $(this).attr("id");
});

$("#all.custom-control").on("click", function() {
  category = null;
});

$("body").on("click", ".result", function() {
  const target = $(this);
  new Details(
    target.data("type"),
    target.data("country"),
    target.data("name"),
    target.data("toponym"),
    target.data("population")
  );
});

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5ubWdlcmlhbiIsImEiOiJjandtOTdqZmUwMHFiM3lxa213bTVqc202In0.RPkZsjxRE_EkSelXcm_7og";
var map = new mapboxgl.Map({
  container: "mapid",
  style: "mapbox://styles/mapbox/streets-v11"
});
