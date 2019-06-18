const $loading = $(".loader");
$(document)
  .ajaxStart(function() {
    $loading.css({ opacity: 1 });
  })
  .ajaxStop(function() {
    $loading.css({ opacity: 0 });
  });

var flags;
$.getJSON(`assets/json/flags.json`, function(data) {
  flags = data;
});

// const category = "countries";
const letters = /^[а-яА-Яієґї-]+$/;

$("#gt").on("input", function() {
  let value = $(this).val();

  if (value.match(letters)) {
    render_suggestions(value);
  } else {
    $(".flex-center-results, .search-info").empty();
    $(".map").css({ visibility: "hidden" });
  }
});

$("body").on("click", ".result", function() {
  show_details($(this).data("name"));
});

function get_flag(country_code) {
  return flags.find(e => e.code === country_code).emoji;
}

function query(filter, term, fcl) {
  return $.getJSON(
    `http://api.geonames.org/searchJSON?lang=uk&${filter}=${term}&featureClass=${fcl}&username=zen&orderby=population&maxRows=15`
  );
}

function gather_suggestions(term, fcl) {
  return query("name_startsWith", term, fcl).then(function(partial_name) {
    if (partial_name.geonames.length) {
      return partial_name;
    } else {
      return query("name_equals", term, fcl);
    }
  });
}

function render_suggestions(term) {
  gather_suggestions(term, "A").then(function(data) {
    if (data) {
      console.log(data);
      $(".flex-center-results").html(
        data.geonames.map(
          field =>
            `<div class='result list-group-item list-group-item-action' data-name=${
              field.name
            }>${get_flag(field.countryCode)} ${
              field.name
            }, ${field.adminName1.slice(0, 20)}, ${field.countryName}</div>`
        )
      );
    } else {
      $(".flex-center-results").empty();
    }
  });
}

function show_details(country_name) {
  console.log(country_name);
  query("name_equals", country_name, "A").then(data => console.log(data));

  class Entity {
    constructor(name) {
      this.name = name;
    }

    getField(field, term) {
      console.log(json.Countries);
      let retrieved = json.Countries.find(e => e["country_uk"] === term)[field];
      if (retrieved) {
        return retrieved.toLocaleString();
      } else {
        return "немає даних";
      }
    }
  }

  class Country extends Entity {
    constructor(name) {
      super(name);
      this.capital_uk = super.getField("capital_uk", name);
      this.continent = super.getField("continent", name);
      this.government = super.getField("government", name);
      this.population = super.getField("population", name);
      this.area = super.getField("area", name);
      this.country_en = super.getField("country_en", name);
    }

    output() {
      let items = [
        `Назва країни: ${this.name}`,
        `Столиця: ${this.capital_uk}`,
        `Материк: ${this.continent}`,
        `Форма правління: ${this.government}`,
        `Населення: ${this.population} осіб`,
        `Площа: ${this.area} км²`
      ];

      return items.map(field => `<div>${field}</div>`).join(" ");
    }
  }

  const result = new Country(country_name);

  $(".flex-center-results").empty();
  $(".search-info").html(result.output());
  $(".map").css({ visibility: "visible" });

  map.jumpTo({
    center: [52.441864013671875, 41.75389768415882],
    zoom: 14
  });

  map.getLayer();
}
