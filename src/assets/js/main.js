$(document).ready(function() {
  get_json();
  input_check();
  show_details();
});

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
    let value = toTitleCase($(this).val());

    if (value) {
      render_suggestions(value);
    } else {
      $(".flex-center-results, .search-info").empty();
      $(".map").css({ visibility: "hidden" });
    }
  });
}

function render_suggestions(term) {
  let filtered = json.Countries.filter(e =>
    String(e.country_uk).startsWith(term)
  );

  $(".flex-center-results").html(
    filtered
      .map(
        field =>
          `<div class='result list-group-item list-group-item-action'>${
            field.country_uk
          }</div>`
      )
      .join(" ")
  );
}

function show_details() {
  class Entity {
    constructor(name) {
      this.name = name;
    }

    getField(field, term) {
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

  $("body").on("click", ".result", function(event) {
    let country_name = $(this).text();
    const result = new Country(country_name);

    $(".flex-center-results").empty();
    $(".search-info").html(result.output());
    $(".map").css({ visibility: "visible" });

    // Double click trigger fix
    event.stopImmediatePropagation();
  });
}
