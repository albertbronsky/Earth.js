// function wipe() {
//   $(".flex-center-results, .search-info").empty();
//   $(".map").css({ visibility: "hidden" });
// }

// function trigger_search() {
//   if (window.user_input.match(/^[а-яА-Яієґї-]+$/)) {
//     render_suggestions();
//   } else {
//     wipe();
//   }
// }

function get_flag(country_code) {
  return flags.find(e => e.code === country_code).emoji;
}

// function suggestions_query(filter, term) {
//   if (category === "countries") {
//     return make_query("A", "PCLI");
//   }
//   if (category === "cities") {
//     return make_query("P", "");
//   }

//   function make_query(fcl, fcd) {
//     return $.getJSON(
//       `http://api.geonames.org/searchJSON?lang=uk&${filter}=${term}&featureClass=${fcl}&featureCode=${fcd}&username=zen&orderby=population&maxRows=15`
//     );
//   }
// }

// function country_query(term) {
//   return $.getJSON(
//     `http://api.geonames.org/countryInfoJSON?&lang=uk&country=${term}&username=zen&style=full`
//   );
// }

// function gather_suggestions(term) {
//   if (category === "cities" || category === "countries") {
//     return suggestions_query("name_startsWith", term).then(function(
//       partial_name
//     ) {
//       if (partial_name.geonames.length) {
//         return partial_name;
//       } else {
//         return suggestions_query("name_equals", term);
//       }
//     });
//   }
// }

class SuggestionsQuery {
  constructor(term) {
    this.term = term;
    this.currentRequest = null;
    if (this.term.match(/^[А-Яа-яёЁЇїІіЄєҐґʼ]+$/)) {
      this.build_query();
    } else {
      this.wipe_suggestions();
    }
  }

  build_query() {
    switch (window.category) {
      case "countries":
        break;
      case "cities":
        break;
      case "subdivisions":
        break;
      case "continents":
        break;
      default:
        this.make_query({});
    }
  }

  make_query({
    filter = "name_startsWith",
    args = "&featureCode=ADM1&featureCode=PPL&featureCode=PPLC&featureCode=PPLA&featureCode=PCLI&featureCode=CONT"
  }) {
    if (this.currentRequest) {
      this.currentRequest.abort();
    }

    this.currentRequest = $.ajax({
      context: this,
      type: "GET",
      data:
        "lang=uk&username=zen&orderby=relevance&maxRows=15&" +
        `${filter}=${this.term}&${args}`,
      url: "http://api.geonames.org/searchJSON?",
      // beforeSend: function() {
      //   if (this.currentRequest) {
      //     this.currentRequest.abort();
      //   }
      // },
      success: function(data) {
        if (data.geonames.length) {
          this.fill_suggestions(
            data.geonames.map(field => {
              if (field.population > 0) {
                return this.render_html(field);
              }
            })
          );
        } else if (!data.geonames.length && filter !== "name") {
          this.make_query({ filter: "name" });
        } else {
          this.wipe_suggestions();
        }
      },
      error: function(e) {
        alert(
          "Помилка завантаження данних, перевірте підключення до Інтернету"
        );
      }
    });
  }

  wipe_suggestions() {
    suggestions_box.empty();
    // this.remove_tooltips();
  }

  remove_tooltips() {
    $(".tooltip").remove();
  }

  fill_suggestions(content) {
    suggestions_box.html(content);
    // this.remove_tooltips();
    $(".result").tooltip();
  }

  render_html(field) {
    let flag;

    if (field.fcode === "CONT") {
      flag = get_flag(field.toponymName);
    } else {
      flag = get_flag(field.countryCode);
    }

    let inside;
    let tooltip;

    switch (field.fcode) {
      case "CONT":
        inside = `${flag} ${field.name}`;
        tooltip = "Континент";
        break;
      case "PCLI":
        inside = `${flag} ${field.countryName}`;
        tooltip = "Країна";
        break;
      case "PPL":
      case "PPLC":
      case "PPLA":
        inside = `${flag} ${field.name}, ${field.adminName1.slice(0, 20)}, ${
          field.countryName
        }`;
        tooltip = "Місто";
        break;
      case "ADM1":
        inside = `${flag} ${field.name}, ${field.countryName}`;
        tooltip = "Регіон";
        break;
    }

    return (
      '<div class="result list-group-item list-group-item-action"' +
      `data-name="${field.name}" ` +
      `data-code="${field.countryCode}" ` +
      `data-toponym='${field.toponymName}' ` +
      `data-placement="left" title="${tooltip}">${inside}</div>`
    );
  }
}

// class Suggestion {
//   constructor(term) {
//     this.term = term;
//   }
// }

// class CountrySuggestion extends Suggestion {
//   constructor(term) {
//     super(term);
//   }
// }

//   function render_html(field) {
//     const flag = get_flag(field.countryCode);

//     let inside;

//     if (category === "countries") {
//       inside = `${flag} ${field.name}`;
//     }

//     if (category === "cities") {
//       inside = `${flag} ${field.name}, ${field.adminName1.slice(0, 20)}, ${
//         field.countryName
//       }`;
//     }

//     return `<div class='result list-group-item list-group-item-action' data-name=${
//       field.name
//     } data-code=${field.countryCode} data-toponym='${
//       field.toponymName
//     }'>${inside}</div>`;
//   }

//   gather_suggestions(term).then(function(data) {
//     if (data) {
//       $(".flex-center-results").html(
//         data.geonames.map(field => render_html(field))
//       );
//     } else {
//       $(".flex-center-results").empty();
//     }
//   });
// }

// function country_details(country_name) {
//   country_query(country_name).then(function(data) {
//     const country = data.geonames[0];
//     const result = new Country(country);

//     $.getJSON(
//       `assets/json/countries-polygon/${result.country_name_en}.json`,
//       function(data) {
//         let coordinates = data.features[0].geometry.coordinates[0];
//         let center = data.features[0].geometry.coordinates[0][0];
//         // let zoom =
//         // ;
//         // render_map(data.features[0].geometry.coordinates[0]);
//       }
//     );
//     // console.log(map);

//     $(".flex-center-results").empty();
//     $(".search-info").html(result.output());
//     $(".map").css({ visibility: "visible" });
//   });

//   class Entity {
//     constructor(obj) {
//       this.obj = obj;
//     }

//     // getField(field, term) {
//     // console.log(json.Countries);
//     // let retrieved = json.Countries.find(e => e["country_uk"] === term)[field];
//     // if (retrieved) {
//     //   return retrieved.toLocaleString();
//     // } else {
//     //   return "немає даних";
//     // }
//     // }
//   }

//   class Country extends Entity {
//     constructor(obj) {
//       super(obj);
//       this.country_name = this.obj.countryName;
//       this.capital = this.obj.capital;
//       this.country_code = this.obj.countryCode;
//       this.currency = this.obj.currencyCode;
//       this.population = this.obj.population;
//       this.continent = this.obj.continent;
//       this.continent_name = this.obj.continentName;
//       this.area = this.obj.areaInSqKm;
//     }

//     output() {
//       let items = [
//         `Назва країни: ${this.country_name}`,
//         `Столиця: ${this.capital}`,
//         `Код країни (ISO-3166): ${this.country_code}`,
//         `Населення: ${this.population.toLocaleString()} осіб`,
//         `Валюта: ${this.currency}`,
//         `Материк: ${this.continent} / ${continent_name}`,
//         `Площа: ${this.area} км²`
//       ];

//       return items.map(field => `<div>${field}</div>`).join(" ");
//     }
//   }
