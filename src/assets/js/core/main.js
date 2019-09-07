class Base {
  geonames_query({
    input = true,
    lang = "uk",
    service = "searchJSON",
    filter = "name_startsWith",
    term,
    args = "&orderby=relevance&maxRows=12",
    fcodes = "&featureCode=ADM1&featureCode=PPL&featureCode=PPLC&featureCode=PPLA&featureCode=PCLI&featureCode=CONT"
  } = {}) {
    $.ajax({
      context: this,
      type: "GET",
      data: `username=annmgerian&lang=${lang}&${filter}=${term}${args}${fcodes}`,
      url: `http://api.geonames.org/${service}?`,
      success: function(data) {
        if ((input && this.term === window.user_input) || !input) {
          this.parse_geonames(data, filter);
        }
      },
      error: function() {
        this.show_error();
      }
    });
  }

  get_flag(country_code) {
    return flags.find(e => e.code === country_code).emoji;
  }

  show_error() {
    alert("Помилка завантаження данних, перевірте підключення до Інтернету");
  }

  hide_suggestions() {
    suggestions_box.empty();
    $(".tooltip").remove();
  }
}

class SuggestionsQuery extends Base {
  constructor(term) {
    super();
    this.term = term;
    if (this.term.match(/^[А-Яа-яёЁЇїІіЄєҐґʼ-]+$/)) {
      this.build_query();
    } else {
      this.hide_suggestions();
    }
  }

  build_query() {
    switch (category) {
      case "countries":
        this.fcodes = "&featureCode=PCLI";
        this.geonames_query({ term: this.term, fcodes: this.fcodes });
        break;
      case "cities":
        this.fcodes = "&featureCode=PPL&featureCode=PPLC&featureCode=PPLA";
        this.geonames_query({
          term: this.term,
          fcodes: this.fcodes
        });
        break;
      case "subdivisions":
        this.fcodes = "&featureCode=ADM1";
        this.geonames_query({ term: this.term, fcodes: this.fcodes });
        break;
      case "continents":
        this.fcodes = "&featureCode=CONT";
        this.geonames_query({ term: this.term, fcodes: this.fcodes });
        break;
      default:
        this.geonames_query({ term: this.term });
    }
  }

  parse_geonames(data, filter) {
    if (data.geonames.length) {
      this.fill(
        data.geonames.map(field => {
          if (field.population > 0) {
            return this.render_html(field);
          }
        })
      );
    } else if (!data.geonames.length && filter !== "name") {
      this.geonames_query({
        filter: "name",
        term: this.term,
        fcodes: this.fcodes
      });
    } else {
      this.hide_suggestions();
    }
  }

  fill(content) {
    this.hide_suggestions();
    suggestions_box.html(content);
    $(".result").tooltip();
  }

  render_html(field) {
    let flag;

    if (field.fcode === "CONT") {
      flag = this.get_flag(field.toponymName);
    } else {
      flag = this.get_flag(field.countryCode);
    }

    let inside;
    let tooltip;
    let type;
    let country = field.countryCode;
    let name = field.name;

    switch (field.fcode) {
      case "CONT":
        type = "continent";
        inside = `${flag} ${field.name}`;
        tooltip = "Материк";
        break;
      case "PCLI":
        type = "country";
        inside = `${flag} ${field.countryName}`;
        tooltip = "Країна";
        name = field.countryName;
        break;
      case "PPL":
      case "PPLC":
      case "PPLA":
        type = "city";
        inside = `${flag} ${field.name}, ${field.adminName1}, ${
          field.countryName
        }`;
        tooltip = "Місто";
        break;
      case "ADM1":
        type = "subdivision";
        inside = `${flag} ${field.adminName1}, ${field.countryName}`;
        tooltip = "Регіон";
        break;
    }

    return (
      '<div class="result list-group-item list-group-item-action" data-placement="left" ' +
      `data-type="${type}" ` +
      `data-name="${name}" ` +
      `data-country="${country}" ` +
      `data-state="${field.adminName1}" ` +
      `data-population="${field.population}" ` +
      `data-toponym="${field.toponymName}" ` +
      `title="${tooltip}">${inside}</div>`
    );
  }
}

class Details extends Base {
  constructor(type, country, state, name, toponym, population) {
    super();
    this.osm_type = "administrative";

    switch (type) {
      case "continent":
        new ContinentDetails(...arguments);
        break;
      case "country":
        new CountryDetails(...arguments);
        break;
      case "city":
        new CityDetails(...arguments);
        break;
      case "subdivision":
        new SubdivisionDetails(...arguments);
        break;
    }
  }

  osm_query({
    filter = "q",
    term = this.name,
    args = `&countrycodes=${this.code}`
  } = {}) {
    $.ajax({
      context: this,
      type: "GET",
      data:
        `${filter}=${term}${args}` +
        "&format=json&accept-language=uk&polygon_geojson=1",
      url: `https://nominatim.openstreetmap.org/search?`,
      success: function(data) {
        this.parse_osm(data);
      },
      error: function() {
        this.show_error();
      }
    });
  }

  hide_map() {
    map_box.css({ visibility: "hidden" });
  }

  show_map() {
    map_box.css({ visibility: "visible" });
  }

  fill(content) {
    this.hide_suggestions();
    search_info.html(content);
    this.show_map();
  }

  filter_osm(data) {
    const has_type = data.find(e => e.type === this.osm_type);

    if (has_type) return has_type;

    const has_boundary = data.find(e => e.class === "boundary");

    if (has_boundary) return has_boundary;
    else {
      switch (this.fail_stage) {
        case undefined:
          this.fail_stage = 0;
          this.osm_query({ term: this.toponym });
          break;
        case 0:
          const has_place = data.find(e => e.class === "place");

          if (has_place) return has_place;
          else return data.find(e => e.geojson);
      }
    }
  }

  parse_osm(data) {
    const field = this.filter_osm(data);

    if (field) {
      this.geojson = field.geojson;
      this.lon = field.lon;
      this.lat = field.lat;
      this.render_html(field);
      this.render_map();
    }
  }

  render_map() {
    this.show_map();

    if (map.getLayer("selection")) {
      map.removeLayer("selection");
    }

    if (map.getSource("highlight")) {
      map.removeSource("highlight");
    }

    map.addSource("highlight", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: []
      }
    });

    if (this.geojson.type === "Point") {
      map.addLayer({
        id: "selection",
        type: "symbol",
        source: "highlight",
        layout: {
          "icon-image": "pulsing-dot"
        }
      });
    } else {
      map.addLayer({
        id: "selection",
        type: "fill",
        source: "highlight",
        paint: {
          "fill-color": "#4285f4",
          "fill-opacity": 0.8
        }
      });
    }

    switch (this.type) {
      case "country":
        if (this.area < 20) this.calculated_zoom = 14;
        else if (this.area < 100000) this.calculated_zoom = 5;
        else if (this.area < 200000) this.calculated_zoom = 4;
        else if (this.area < 1000000) this.calculated_zoom = 3;
        else if (this.area < 2000000) this.calculated_zoom = 2;
        else this.calculated_zoom = 3.5;
        break;
      case "continent":
        this.calculated_zoom = 1.5;
        break;
      case "city":
        // Power curve equation
        this.calculated_zoom =
          17.37104 * Math.pow(this.population, -0.05202411);
        break;
      case "subdivision":
        this.calculated_zoom = 4;
    }

    map.getSource("highlight").setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: this.geojson
        }
      ]
    });

    map.flyTo({
      center: [this.lon, this.lat],
      zoom: this.calculated_zoom
    });
  }
}

class SubdivisionDetails extends Details {
  constructor(type, country, state, name, toponym, population) {
    super();
    this.type = type;
    this.code = country;
    this.name = name;
    this.state = state;
    this.toponym = toponym;
    this.population = population;
    this.osm_query({ filter: "state" });
  }

  render_html(field) {
    const items = [
      `Назва регіону: ${this.name}`,
      `Код країни: ${this.get_flag(this.code)}${this.code}`,
      `Довгота: ${field.lon}°`,
      `Широта: ${field.lat}°`,
      `Населення: ${Number(this.population).toLocaleString()} осіб`
    ];

    this.fill(items.map(item => `<div>${item}</div>`).join(" "));
  }
}

class CityDetails extends Details {
  constructor(type, country, state, name, toponym, population) {
    super();
    this.type = type;
    this.code = country;
    this.name = name;
    this.state = state;
    this.toponym = toponym;
    this.population = population;
    this.osm_type = "city";
    this.osm_query({
      filter: "city",
      args: `&state=${this.state}&countrycodes=${this.code}`
    });
  }

  render_html(field) {
    const items = [
      `Назва міста: ${this.name}`,
      `Код країни: ${this.get_flag(this.code)}${this.code}`,
      `Довгота: ${field.lon}°`,
      `Широта: ${field.lat}°`,
      `Населення: ${Number(this.population).toLocaleString()} осіб`
    ];

    this.fill(items.map(item => `<div>${item}</div>`).join(" "));
  }
}

class ContinentDetails extends Details {
  constructor(type, country, state, name, toponym, population) {
    super();
    this.type = type;
    this.code = country;
    this.name = name;
    this.state = state;
    this.toponym = toponym;
    this.population = population;
    this.osm_type = "continent";
    this.osm_query({
      args: ""
    });
  }

  parse_osm(data) {
    const field = this.filter_osm(data);

    if (field) {
      this.geojson = continents_polygon.find(
        e => e.properties.CONTINENT === this.toponym
      ).geometry;

      this.lon = field.lon;
      this.lat = field.lat;

      this.render_html(field);
      this.render_map();
    }
  }

  render_html(field) {
    const items = [
      `Назва материка: ${this.get_flag(this.toponym)} ${this.name}`,
      `Довгота: ${field.lon}°`,
      `Широта: ${field.lat}°`,
      `Населення: ${Number(this.population).toLocaleString()} осіб`
    ];

    this.fill(items.map(item => `<div>${item}</div>`).join(" "));
  }
}

class CountryDetails extends Details {
  constructor(type, country, state, name, toponym, population) {
    super();
    this.type = type;
    this.code = country;
    this.name = name;
    this.state = state;
    this.toponym = toponym;
    this.population = population;
    this.geonames_query({
      input: false,
      service: "countryInfoJSON",
      filter: this.type,
      term: this.code,
      args: "",
      fcodes: ""
    });
  }

  parse_geonames(data) {
    if (data.geonames.length) {
      data.geonames.map(field => {
        this.render_html(field);
      });
    } else this.fill("Помилка бази даних");
  }

  parse_osm(data) {
    const field = this.filter_osm(data);

    if (field) {
      this.geojson = field.geojson;
      this.lon = field.lon;
      this.lat = field.lat;
      this.render_map();
    }
  }

  render_html(field) {
    this.area = Number(field.areaInSqKm);

    const items = [
      `Назва країни: ${this.get_flag(field.countryCode)} ${field.countryName}`,
      `Столиця: ${field.capital}`,
      `Код країни: ${field.countryCode}`,
      `Населення: ${Number(field.population).toLocaleString()} осіб`,
      `Валюта: ${field.currencyCode}`,
      `Материк: ${field.continent} / ${field.continentName}`,
      `Площа: ${this.area.toLocaleString()} км²`
    ];

    this.osm_query({
      filter: "country"
    });

    this.fill(items.map(item => `<div>${item}</div>`).join(" "));
  }
}
