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

var size = 200;

var pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  onAdd: function() {
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },

  render: function() {
    var duration = 1000;
    var t = (performance.now() % duration) / duration;

    var radius = (size / 2) * 0.3;
    var outerRadius = (size / 2) * 0.7 * t + radius;
    var context = this.context;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = "rgba(162,193,246," + (1 - t) + ")";
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(66,133,244, 1)";
    context.strokeStyle = "white";
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // keep the map repainting
    map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
};

map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
