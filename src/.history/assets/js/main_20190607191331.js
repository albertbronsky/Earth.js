$(document).ready(function() {
  get_json();
  input_check();
});

var db = new loki("assets/json/db.json");
var children = db.addCollection("children");

// function object_check(obj) {
//   if (typeof obj === "object" && obj !== null) {
//     return true;
//   }
// }

// function country_search(term, data) {
//   country_data = data.find(e => e.country === term);
//   if (object_check(country_data)) {
//     console.log(country_data.city);
//     // new Country()
//   }

//   class Country {
//     constructor(name, capital, continent, government, population, area) {
//       this.name = name;
//       this.capital = capital;
//       this.continent = continent;
//       this.government = government;
//       this.population = population;
//       this.area = area;

//       this.getName = function() {
//         return "Country name: " + this.name;
//       };
//     }
//   }

//   // var user001 = new Country("test", "Smith", 1985);
// }

// class Search {
//   constructor(name, capital, continent, government, population, area) {
//     this.name = name;
//     this.capital = capital;
//     this.continent = continent;
//     this.government = government;
//     this.population = population;
//     this.area = area;
//     // country_data = data.find(e => e.country === term)

//     this.getName = function() {
//       return "Country name: " + this.name;
//     };
//   }
// }

// valid categories: countries,
var json;

function get_json() {
  $.getJSON(`assets/json/db.json`, function(data) {
    json = data;
  });
}

function toTitleCase(phrase) {
  return phrase
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function input_check() {
  const category = "countries";

  $("#gt").on("input", function() {
    value = toTitleCase($(this).val());

    if (value) {
      render_suggestions(value);
    } else {
      $("#search-results").empty();
    }
  });

  // $("#search-result").on("click", function() {
  //   console.log($(this), html());
  // });
}

function render_suggestions(term) {
  filtered = json.Countries.filter(e => e.country_uk.startsWith(term));

  let items = [];

  for (item in filtered) {
    items.push("<li id='" + item + "'>" + filtered[item].country_uk + "</li>");
  }

  $("#search-results").html(
    $("<ul/>", {
      class: "my-new-list",
      html: items.join("")
    })
  );
}
