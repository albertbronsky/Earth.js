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

const category = "countries";

const letters = /^[а-яА-Яієґї-]+$/;

$("#gt").on("input", function() {
  let value = $(this).val();

  if (value.match(letters)) {
    render_suggestions(value);
  } else {
    $(".flex-center-results, .search-info").empty();
    // $("#mapid").css({ height: "0px", width: "0px" });
    $(".map").css({ visibility: "hidden" });
  }
});

$("body").on("click", ".result", function() {
  show_details($(this).data("name"));
});

function get_flag(country_code) {
  return flags.find(e => e.code === country_code).emoji;
}

function query(filter, term, fcl, fcd) {
  return $.getJSON(
    `http://api.geonames.org/searchJSON?lang=uk&${filter}=${term}&featureClass=${fcl}&featureCode=${fcd}&username=zen&orderby=population&maxRows=15`
  );
}

function gather_suggestions(term, fcl, fcd) {
  return query("name_startsWith", term, fcl, fcd).then(function(partial_name) {
    if (partial_name.geonames.length) {
      return partial_name;
    } else {
      return query("name_equals", term, fcl, fcd);
    }
  });
}
function render_suggestions(term) {
  if (category === "countries") {
    build("A", "PCLI");
  }
  if (category === "cities") {
    build("P", "");
  }

  function render_html(field) {
    let open_tag = `<div class='result list-group-item list-group-item-action' data-name=${
      field.name
    }>`;

    const flag = get_flag(field.countryCode);

    let inside;

    if (category === "countries") {
      inside = `${flag} ${field.name}`;
    }

    if (category === "cities") {
      inside = `${flag} ${field.name}, ${field.adminName1.slice(0, 20)}, ${
        field.countryName
      }`;
    }

    let close_tag = "</div>";

    return `${open_tag}${inside}${close_tag}`;
  }

  function build(fcl, fcd) {
    gather_suggestions(term, fcl, fcd).then(function(data) {
      if (data) {
        $(".flex-center-results").html(
          data.geonames.map(field => render_html(field))
        );
      } else {
        $(".flex-center-results").empty();
      }
    });
  }
}

function show_details(country_name) {
  query("name_equals", country_name, "A", "PCLI").then(function(data) {
    const country = data.geonames[0];
    const result = new Country(country, data.geonames[0].name);
    query("country", country.countryCode, "P", "PPLC").then(function(data) {
      result.set_capital(data.geonames[0].name);
      console.log(result.capital);
      $(".flex-center-results").empty();
      $(".search-info").html(result.output());
      // $("#mapid").css({ height: "555px", width: "1250px" });

      $(".map").css({ visibility: "visible" });

      map.jumpTo({
        center: [52.441864013671875, 41.75389768415882],
        zoom: 14
      });

      map.getLayer();
    });
  });

  class Entity {
    constructor(obj) {
      this.obj = obj;
    }

    // getField(field, term) {
    // console.log(json.Countries);
    // let retrieved = json.Countries.find(e => e["country_uk"] === term)[field];
    // if (retrieved) {
    //   return retrieved.toLocaleString();
    // } else {
    //   return "немає даних";
    // }
    // }
  }

  class Country extends Entity {
    constructor(obj, capital) {
      super(obj);
      this.name = this.obj.name;
      this.country_code = this.obj.countryCode;
      this.lat = this.obj.lat;
      this.lng = this.obj.lng;
      this.population = this.obj.population;
    }

    set_capital(capital) {
      this.capital = capital;
    }
    output() {
      let items = [
        `Назва країни: ${this.name}`,
        `Столиця: ${this.capital}`,
        `Код країни (ISO-3166): ${this.country_code}`,
        `Широта: ${this.lat}°`,
        `Довгота: ${this.lng}°`,
        `Населення: ${this.population.toLocaleString()} осіб`
      ];

      return items.map(field => `<div>${field}</div>`).join(" ");
    }
  }
}
