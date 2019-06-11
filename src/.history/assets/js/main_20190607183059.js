$(document).ready(function() {
  // get_json();
  input_check();
});

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
  filtered = db.Countries.filter(e => e.country_uk.startsWith(term));

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

const db = {
  "Countries": [
    {
      "country_uk": "Святий Престол (Держава Ватикану)",
      "city": "Ватикан",
      "continent": "Європа",
      "government": "Незалежна церковна держава",
      "population": "1000",
      "area": 0.4,
      "country_en": "Holy See (Vatican City State)",
      "capital_en": "Citt"
    },
    {
      "country_uk": "Острів Герд і Острови Макдональд",
      "city": null,
      "continent": "Антарктида",
      "government": "Територія Австралії",
      "population": null,
      "area": 359,
      "country_en": "Heard Island and McDonald Islands",
      "capital_en": null
    },
    {
      "country_uk": "Майотта",
      "city": "Мамудзу",
      "continent": "Африка",
      "government": "Департамент Франції",
      "population": "253045",
      "area": 373,
      "country_en": "Mayotte",
      "capital_en": "Mamoutzou"
    },
    {
      "country_uk": "Сент-Вінсент і Гренадини",
      "city": "Кінгстаун",
      "continent": "Північна Америка",
      "government": "Конституційна монархія",
      "population": "109897",
      "area": 388,
      "country_en": "Saint Vincent and the Grenadines",
      "capital_en": "Kingstown"
    },
    {
      "country_en": "Turks and Caicos Islands",
      "capital_en": "Bridgetown",
      "continent": "North America",
      "government": "Dependent Territory of the UK",
      "population": "35446",
      "area": 430
    },
    {
      "country_uk": "Антигуа і Барбуда",
      "city": "Сент-Джонс",
      "continent": "Північна Америка",
      "government": "Конституційна монархія",
      "population": "102012",
      "area": 442,
      "country_en": "Antigua and Barbuda",
      "capital_en": "Saint John's"
    },
    {
      "country_uk": "Сейшели",
      "city": "Вікторія",
      "continent": "Африка",
      "government": "Республіка",
      "population": "94737",
      "area": 455,
      "country_en": "Seychelles",
      "capital_en": "Victoria"
    },
    {
      "country_uk": "Палау",
      "city": "Корор",
      "continent": "Океанія",
      "government": "Республіка",
      "population": "21729",
      "area": 459,
      "country_en": "Palau",
      "capital_en": "Koror"
    },
    {
      "country_uk": "Північні Маріанські острови",
      "city": "Гарапан",
      "continent": "Океанія",
      "government": "Володіння США",
      "population": "55144",
      "area": 464,
      "country_en": "Northern Mariana Islands",
      "capital_en": "Garapan"
    },
    {
      "country_uk": "Андорра",
      "city": "Андорра-ла-Велья",
      "continent": "Європа",
      "government": "Парламентарне князівство",
      "population": "76965",
      "area": 468,
      "country_en": "Andorra",
      "capital_en": "Andorra la Vella"
    },
    {
      "country_uk": "Гуам",
      "city": "Ага",
      "continent": "Океанія",
      "government": "Територія США",
      "population": "164229",
      "area": 549,
      "country_en": "Guam",
      "capital_en": "Aga"
    },
    {
      "country_uk": "Сінгапур",
      "city": "Сінґапур",
      "continent": "Азія",
      "government": "Республіка",
      "population": "5708844",
      "area": 618,
      "country_en": "Singapore",
      "capital_en": "Singapore"
    },
    {
      "country_uk": "Сент-Люсія",
      "city": "Кастрі",
      "continent": "Північна Америка",
      "government": "Конституційна монархія",
      "population": "178844",
      "area": 622,
      "country_en": "Saint Lucia",
      "capital_en": "Castries"
    },
    {
      "country_uk": "Тонга",
      "city": "Нукуалофа",
      "continent": "Океанія",
      "government": "Монархія",
      "population": "108020",
      "area": 650,
      "country_en": "Tonga",
      "capital_en": "Nuku'alofa"
    },
    {
      "country_uk": "Бахрейн",
      "city": "Аль-Манама",
      "continent": "Азія",
      "government": "Монархія (емірат)",
      "population": "1492584",
      "area": 694,
      "country_en": "Bahrain",
      "capital_en": "al-Manama"
    },
    {
      "country_uk": "Кірибаті",
      "city": "Байрікі",
      "continent": "Океанія",
      "government": "Республіка",
      "population": "116398",
      "area": 726,
      "country_en": "Kiribati",
      "capital_en": "Bairiki"
    },
    {
      "country_uk": "Домініка",
      "city": "Розо",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "73925",
      "area": 751,
      "country_en": "Dominica",
      "capital_en": "Roseau"
    },
    {
      "country_uk": "Нідерландські Антильські острови",
      "city": "Віллемстад",
      "continent": "Північна Америка",
      "government": "Неметропольська територія Нідерландів",
      "population": "217000",
      "area": 800,
      "country_en": "Netherlands Antilles",
      "capital_en": "Willemstad"
    },
    {
      "country_uk": "Сан-Томе і Принсіпі",
      "city": "Сан-Томе",
      "continent": "Африка",
      "government": "Республіка",
      "population": "204327",
      "area": 964,
      "country_en": "Sao Tome and Principe",
      "capital_en": "S"
    },
    {
      "country_uk": "Гонконг",
      "city": "Вікторія",
      "continent": "Азія",
      "government": "Спеціальний адміністративний район Китаю",
      "population": "7364883",
      "area": 1075,
      "country_en": "Hong Kong",
      "capital_en": "Victoria"
    },
    {
      "country_uk": "Мартиніка",
      "city": "Фор-де-Франс",
      "continent": "Північна Америка",
      "government": "Заморський департамент Франції",
      "population": "384896",
      "area": 1102,
      "country_en": "Martinique",
      "capital_en": "Fort-de-France"
    },
    {
      "country_uk": "Фарерські острови",
      "city": "Торсхавн",
      "continent": "Європа",
      "government": "Частина Данії",
      "population": "49290",
      "area": 1399,
      "country_en": "Faroe Islands",
      "capital_en": "Tórshavn"
    },
    {
      "country_uk": "Гваделупа",
      "city": "Бас-Тер",
      "continent": "Північна Америка",
      "government": "Заморський департамент Франції",
      "population": "449568",
      "area": 1705,
      "country_en": "Guadeloupe",
      "capital_en": "Basse-Terre"
    },
    {
      "country_uk": "Коморські острови",
      "city": "Мороній",
      "continent": "Африка",
      "government": "Республіка",
      "population": "813912",
      "area": 1862,
      "country_en": "Comoros",
      "capital_en": "Moroni"
    },
    {
      "country_uk": "Маврикій",
      "city": "Порт-Луї",
      "continent": "Африка",
      "government": "Республіка",
      "population": "1265138",
      "area": 2040,
      "country_en": "Mauritius",
      "capital_en": "Port-Louis"
    },
    {
      "country_uk": "Реюньйон",
      "city": "Сен-Дені",
      "continent": "Африка",
      "government": "Заморський департамент Франції",
      "population": "699000",
      "area": 2510,
      "country_en": "Reunion",
      "capital_en": "Saint-Denis"
    },
    {
      "country_uk": "Люксембург",
      "city": "Люксембург",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "583455",
      "area": 2586,
      "country_en": "Luxembourg",
      "capital_en": "Luxembourg [Luxemburg/L"
    },
    {
      "country_uk": "Самоа",
      "city": "Апіа",
      "continent": "Океанія",
      "government": "Парламентська монархія",
      "population": "196440",
      "area": 2831,
      "country_en": "Samoa",
      "capital_en": "Apia"
    },
    {
      "country_uk": "Південна Джорджія та Південні Сандвічеві Острови",
      "city": "Грютвікен",
      "continent": "Антарктида",
      "government": "Залежні території Великобританії",
      "population": null,
      "area": 3903,
      "country_en": "South Georgia and the South Sandwich Islands",
      "capital_en": null
    },
    {
      "country_uk": "Французька Полінезія",
      "city": "Папеете",
      "continent": "Океанія",
      "government": "Неметропольська територія Франції",
      "population": "283007",
      "area": 4000,
      "country_en": "French Polynesia",
      "capital_en": "Papeete"
    },
    {
      "country_uk": "Кабо-Верде",
      "city": "Прая",
      "continent": "Африка",
      "government": "Республіка",
      "population": "546388",
      "area": 4033,
      "country_en": "Cape Verde",
      "capital_en": "Praia"
    },
    {
      "country_uk": "Тринідад і Тобаго",
      "city": "Порт-оф-Спейн",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "1369125",
      "area": 5130,
      "country_en": "Trinidad and Tobago",
      "capital_en": "Port-of-Spain"
    },
    {
      "country_uk": "Бруней",
      "city": "Бандар Сері Бегаван",
      "continent": "Азія",
      "government": "Монархія (Султанат)",
      "population": "428697",
      "area": 5765,
      "country_en": "Brunei",
      "capital_en": "Bandar Seri Begawan"
    },
    {
      "country_uk": "Палестина",
      "city": "Газа",
      "continent": "Азія",
      "government": "Автономний район",
      "population": "4920724",
      "area": 6257,
      "country_en": "Palestine",
      "capital_en": "Gaza"
    },
    {
      "country_uk": "Французькі південні території",
      "city": null,
      "continent": "Антарктида",
      "government": "Неметропольська територія Франції",
      "population": null,
      "area": 7780,
      "country_en": "French Southern territories",
      "capital_en": null
    },
    {
      "country_uk": "Пуерто-Ріко",
      "city": "Сан-Хуан ",
      "continent": "Північна Америка",
      "government": "Володіння США",
      "population": "3663131",
      "area": 8875,
      "country_en": "Puerto Rico",
      "capital_en": "San Juan"
    },
    {
      "country_uk": "Кіпр",
      "city": "Нікосія",
      "continent": "Азія",
      "government": "Республіка",
      "population": "1179551",
      "area": 9251,
      "country_en": "Cyprus",
      "capital_en": "Nicosia"
    },
    {
      "country_uk": "Ліван",
      "city": "Бейрут",
      "continent": "Азія",
      "government": "Республіка",
      "population": "6082357",
      "area": 10400,
      "country_en": "Lebanon",
      "capital_en": "Beirut"
    },
    {
      "country_uk": "Ямайка",
      "city": "Кінгстон",
      "continent": "Північна Америка",
      "government": "Конституційна монархія",
      "population": "2890299",
      "area": 10990,
      "country_en": "Jamaica",
      "capital_en": "Kingston"
    },
    {
      "country_uk": "Катар",
      "city": "Доха",
      "continent": "Азія",
      "government": "Монархія",
      "population": "2639211",
      "area": 11000,
      "country_en": "Qatar",
      "capital_en": "Doha"
    },
    {
      "country_uk": "Гамбія",
      "city": "Банжул",
      "continent": "Африка",
      "government": "Республіка",
      "population": "2100568",
      "area": 11295,
      "country_en": "Gambia",
      "capital_en": "Banjul"
    },
    {
      "country_uk": "Фолклендські острови",
      "city": "Стенлі",
      "continent": "Південна Америка",
      "government": "Залежні території Великобританії",
      "population": "2910",
      "area": 12173,
      "country_en": "Falkland Islands",
      "capital_en": "Stanley"
    },
    {
      "country_uk": "Вануату",
      "city": "Порт-Віла",
      "continent": "Океанія",
      "government": "Республіка",
      "population": "276244",
      "area": 12189,
      "country_en": "Vanuatu",
      "capital_en": "Port-Vila"
    },
    {
      "country_uk": "Багамські острови",
      "city": "Нассау",
      "continent": "Північна Америка",
      "government": "Конституційна монархія",
      "population": "395361",
      "area": 13878,
      "country_en": "Bahamas",
      "capital_en": "Nassau"
    },
    {
      "country_uk": "Східний Тимор",
      "city": "Ділі",
      "continent": "Азія",
      "government": "Керується ООН",
      "population": "1296311",
      "area": 14874,
      "country_en": "East Timor",
      "capital_en": "Dili"
    },
    {
      "country_uk": "Есватіні",
      "city": "Лобамба",
      "continent": "Африка",
      "government": "Монархія",
      "population": "1008000",
      "area": 17364,
      "country_en": "Swaziland",
      "capital_en": "Mbabane"
    },
    {
      "country_uk": "Кувейт",
      "city": "Кувейт",
      "continent": "Азія",
      "government": "Конституційна монархія (емірат)",
      "population": "4136528",
      "area": 17818,
      "country_en": "Kuwait",
      "capital_en": "Kuwait"
    },
    {
      "country_uk": "Острови Фіджі",
      "city": "Сува",
      "continent": "Океанія",
      "government": "Республіка",
      "population": "905502",
      "area": 18274,
      "country_en": "Fiji Islands",
      "capital_en": "Suva"
    },
    {
      "country_uk": "Нова Каледонія",
      "city": "Нумеа",
      "continent": "Океанія",
      "government": "Неметропольська територія Франції",
      "population": "276255",
      "area": 18575,
      "country_en": "New Caledonia",
      "capital_en": "Noum"
    },
    {
      "country_uk": "Словенія",
      "city": "Любляна",
      "continent": "Європа",
      "government": "Республіка",
      "population": "2079976",
      "area": 20256,
      "country_en": "Slovenia",
      "capital_en": "Ljubljana"
    },
    {
      "country_uk": "Сальвадор",
      "city": "Сан-Сальвадор",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "6377853",
      "area": 21041,
      "country_en": "El Salvador",
      "capital_en": "San Salvador"
    },
    {
      "country_uk": "Ізраїль",
      "city": "Єрусалим",
      "continent": "Азія",
      "government": "Республіка",
      "population": "8321570",
      "area": 21056,
      "country_en": "Israel",
      "capital_en": "Jerusalem"
    },
    {
      "country_uk": "Беліз",
      "city": "Бельмопан",
      "continent": "Північна Америка",
      "government": "Конституційна монархія",
      "population": "374681",
      "area": 22696,
      "country_en": "Belize",
      "capital_en": "Belmopan"
    },
    {
      "country_uk": "Джибуті",
      "city": "Джибуті",
      "continent": "Африка",
      "government": "Республіка",
      "population": "956985",
      "area": 23200,
      "country_en": "Djibouti",
      "capital_en": "Djibouti"
    },
    {
      "country_uk": "Північна Македонія",
      "city": "Скоп'є",
      "continent": "Європа",
      "government": "Республіка",
      "population": "2024000",
      "area": 25713,
      "country_en": "North Macedonia",
      "capital_en": "Skopje"
    },
    {
      "country_uk": "Руанда",
      "city": "Кігалі",
      "continent": "Африка",
      "government": "Республіка",
      "population": "12208407",
      "area": 26338,
      "country_en": "Rwanda",
      "capital_en": "Kigali"
    },
    {
      "country_uk": "Гаїті",
      "city": "Порт-о-Пренс",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "10981229",
      "area": 27750,
      "country_en": "Haiti",
      "capital_en": "Port-au-Prince"
    },
    {
      "country_uk": "Бурунді",
      "city": "Бужумбура",
      "continent": "Африка",
      "government": "Республіка",
      "population": "10864245",
      "area": 27834,
      "country_en": "Burundi",
      "capital_en": "Bujumbura"
    },
    {
      "country_uk": "Екваторіальна Гвінея",
      "city": "Малабо",
      "continent": "Африка",
      "government": "Республіка",
      "population": "1267689",
      "area": 28051,
      "country_en": "Equatorial Guinea",
      "capital_en": "Malabo"
    },
    {
      "country_uk": "Албанія",
      "city": "Тирана",
      "continent": "Європа",
      "government": "Республіка",
      "population": "2930187",
      "area": 28748,
      "country_en": "Albania",
      "capital_en": "Tirana"
    },
    {
      "country_uk": "Соломонові острови",
      "city": "Хоніара",
      "continent": "Океанія",
      "government": "Конституційна монархія",
      "population": "611343",
      "area": 28896,
      "country_en": "Solomon Islands",
      "capital_en": "Honiara"
    },
    {
      "country_uk": "Вірменія",
      "city": "Єреван",
      "continent": "Азія",
      "government": "Республіка",
      "population": "2930450",
      "area": 29800,
      "country_en": "Armenia",
      "capital_en": "Yerevan"
    },
    {
      "country_uk": "Лесото",
      "city": "Масеру",
      "continent": "Африка",
      "government": "Конституційна монархія",
      "population": "2233339",
      "area": 30355,
      "country_en": "Lesotho",
      "capital_en": "Maseru"
    },
    {
      "country_uk": "Бельгія",
      "city": "Брюссель",
      "continent": "Європа",
      "government": "Федеральна конституційна монархія",
      "population": "11429336",
      "area": 30518,
      "country_en": "Belgium",
      "capital_en": "Bruxelles [Brussel]"
    },
    {
      "country_uk": "Молдова",
      "city": "Кишинів",
      "continent": "Європа",
      "government": "Республіка",
      "population": "4051212",
      "area": 33851,
      "country_en": "Moldova",
      "capital_en": "Chisinau"
    },
    {
      "country_uk": "Гвінея-Бісау",
      "city": "Бісау",
      "continent": "Африка",
      "government": "Республіка",
      "population": "1861283",
      "area": 36125,
      "country_en": "Guinea-Bissau",
      "capital_en": "Bissau"
    },
    {
      "country_uk": "Швейцарія",
      "city": "Берн",
      "continent": "Європа",
      "government": "Federation",
      "population": "8476005",
      "area": 41284,
      "country_en": "Switzerland",
      "capital_en": "Bern"
    },
    {
      "country_uk": "Нідерланди",
      "city": "Амстердам",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "17035938",
      "area": 41526,
      "country_en": "Netherlands",
      "capital_en": "Amsterdam"
    },
    {
      "country_uk": "Данія",
      "city": "Копенгаген",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "5733551",
      "area": 43094,
      "country_en": "Denmark",
      "capital_en": "Copenhagen"
    },
    {
      "country_uk": "Естонія",
      "city": "Таллінн",
      "continent": "Європа",
      "government": "Республіка",
      "population": "1309632",
      "area": 45227,
      "country_en": "Estonia",
      "capital_en": "Tallinn"
    },
    {
      "country_uk": "Бутан",
      "city": "Тхімпху",
      "continent": "Азія",
      "government": "Монархія",
      "population": "807610",
      "area": 47000,
      "country_en": "Bhutan",
      "capital_en": "Thimphu"
    },
    {
      "country_uk": "Домініканська республіка",
      "city": "Санто-Домінго-де-Гусман",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "10766998",
      "area": 48511,
      "country_en": "Dominican Republic",
      "capital_en": "Santo Domingo de Guzm"
    },
    {
      "country_uk": "Словаччина",
      "city": "Братислава",
      "continent": "Європа",
      "government": "Республіка",
      "population": "5447662",
      "area": 49012,
      "country_en": "Slovakia",
      "capital_en": "Bratislava"
    },
    {
      "country_uk": "Коста-Ріка",
      "city": "Сан-Хосе",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "4905769",
      "area": 51100,
      "country_en": "Costa Rica",
      "capital_en": "San Jos"
    },
    {
      "country_uk": "Боснія і Герцеговина",
      "city": "Сараєво",
      "continent": "Європа",
      "government": "Федеральна республіка",
      "population": "3507017",
      "area": 51197,
      "country_en": "Bosnia and Herzegovina",
      "capital_en": "Sarajevo"
    },
    {
      "country_uk": "Хорватія",
      "city": "Загреб",
      "continent": "Європа",
      "government": "Республіка",
      "population": "4189353",
      "area": 56538,
      "country_en": "Croatia",
      "capital_en": "Zagreb"
    },
    {
      "country_uk": "Того",
      "city": "Ломе",
      "continent": "Африка",
      "government": "Республіка",
      "population": "7797694",
      "area": 56785,
      "country_en": "Togo",
      "capital_en": "Lom"
    },
    {
      "country_uk": "Шпіцберген та Ян-Маєн",
      "city": "Лонг'їр",
      "continent": "Європа",
      "government": "Залежні території Норвегії",
      "population": "3200",
      "area": 62422,
      "country_en": "Svalbard and Jan Mayen",
      "capital_en": "Longyearbyen"
    },
    {
      "country_uk": "Латвія",
      "city": "Рига",
      "continent": "Європа",
      "government": "Республіка",
      "population": "1949670",
      "area": 64589,
      "country_en": "Latvia",
      "capital_en": "Riga"
    },
    {
      "country_uk": "Литва",
      "city": "Вільнюс",
      "continent": "Європа",
      "government": "Республіка",
      "population": "2890297",
      "area": 65301,
      "country_en": "Lithuania",
      "capital_en": "Vilnius"
    },
    {
      "country_uk": "Грузія",
      "city": "Тбілісі",
      "continent": "Азія",
      "government": "Республіка",
      "population": "3912061",
      "area": 69700,
      "country_en": "Georgia",
      "capital_en": "Tbilisi"
    },
    {
      "country_uk": "Ірландія",
      "city": "Дублін",
      "continent": "Європа",
      "government": "Республіка",
      "population": "4761657",
      "area": 70273,
      "country_en": "Ireland",
      "capital_en": "Dublin"
    },
    {
      "country_uk": "Сьєрра-Леоне",
      "city": "Фрітаун",
      "continent": "Африка",
      "government": "Республіка",
      "population": "7557212",
      "area": 71740,
      "country_en": "Sierra Leone",
      "capital_en": "Freetown"
    },
    {
      "country_uk": "Панама",
      "city": "Панама",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "4098587",
      "area": 75517,
      "country_en": "Panama",
      "capital_en": "Ciudad de Panam"
    },
    {
      "country_uk": "Чеська республіка",
      "city": "Прага",
      "continent": "Європа",
      "government": "Республіка",
      "population": "10618303",
      "area": 78866,
      "country_en": "Czech Republic",
      "capital_en": "Praha"
    },
    {
      "country_uk": "Об'єднані Арабські Емірати",
      "city": "Абу-Дабі",
      "continent": "Азія",
      "government": "Федерація емірату",
      "population": "9400145",
      "area": 83600,
      "country_en": "United Arab Emirates",
      "capital_en": "Abu Dhabi"
    },
    {
      "country_uk": "Австрія",
      "city": "Відень",
      "continent": "Європа",
      "government": "Федеральна республіка",
      "population": "8735453",
      "area": 83859,
      "country_en": "Austria",
      "capital_en": "Wien"
    },
    {
      "country_uk": "Азербайджан",
      "city": "Баку",
      "continent": "Азія",
      "government": "Федеральна республіка",
      "population": "9827589",
      "area": 86600,
      "country_en": "Azerbaijan",
      "capital_en": "Baku"
    },
    {
      "country_uk": "Йорданія",
      "city": "Амман",
      "continent": "Азія",
      "government": "Конституційна монархія",
      "population": "9702353",
      "area": 88946,
      "country_en": "Jordan",
      "capital_en": "Amman"
    },
    {
      "country_uk": "Французька Гвіана",
      "city": "Каєнна",
      "continent": "Південна Америка",
      "government": "Заморський департамент Франції",
      "population": "282731",
      "area": 90000,
      "country_en": "French Guiana",
      "capital_en": "Cayenne"
    },
    {
      "country_uk": "Португалія",
      "city": "Лісабон",
      "continent": "Європа",
      "government": "Республіка",
      "population": "10329506",
      "area": 91982,
      "country_en": "Portugal",
      "capital_en": "Lisboa"
    },
    {
      "country_uk": "Угорщина",
      "city": "Будапешт",
      "continent": "Європа",
      "government": "Республіка",
      "population": "9721559",
      "area": 93030,
      "country_en": "Hungary",
      "capital_en": "Budapest"
    },
    {
      "country_uk": "Південна Корея",
      "city": "Сеул",
      "continent": "Азія",
      "government": "Республіка",
      "population": "50982212",
      "area": 99434,
      "country_en": "South Korea",
      "capital_en": "Seoul"
    },
    {
      "capital_en": "Beograd"
    },
    {
      "country_uk": "Ісландія",
      "city": "Рейк'явік",
      "continent": "Європа",
      "government": "Республіка",
      "population": "335025",
      "area": 103000,
      "country_en": "Iceland",
      "capital_en": "Reykjav"
    },
    {
      "country_uk": "Гватемала",
      "city": "Гватемала",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "16913503",
      "area": 108889,
      "country_en": "Guatemala",
      "capital_en": "Ciudad de Guatemala"
    },
    {
      "country_uk": "Куба",
      "city": "Ла-Гавана",
      "continent": "Північна Америка",
      "government": "Соціалістична республіка",
      "population": "11484636",
      "area": 110861,
      "country_en": "Cuba",
      "capital_en": "La Habana"
    },
    {
      "country_uk": "Болгарія",
      "city": "Софія",
      "continent": "Європа",
      "government": "Республіка",
      "population": "7084571",
      "area": 110994,
      "country_en": "Bulgaria",
      "capital_en": "Sofia"
    },
    {
      "country_uk": "Ліберія",
      "city": "Монровія",
      "continent": "Африка",
      "government": "Республіка",
      "population": "4731906",
      "area": 111369,
      "country_en": "Liberia",
      "capital_en": "Monrovia"
    },
    {
      "country_uk": "Гондурас",
      "city": "Тегусігальпа",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "9265067",
      "area": 112088,
      "country_en": "Honduras",
      "capital_en": "Tegucigalpa"
    },
    {
      "country_uk": "Бенін",
      "city": "Порто-Ново",
      "continent": "Африка",
      "government": "Республіка",
      "population": "11175692",
      "area": 112622,
      "country_en": "Benin",
      "capital_en": "Porto-Novo"
    },
    {
      "country_uk": "Еритрея",
      "city": "Асмара",
      "continent": "Африка",
      "government": "Республіка",
      "population": "5068831",
      "area": 117600,
      "country_en": "Eritrea",
      "capital_en": "Asmara"
    },
    {
      "country_uk": "Малаві",
      "city": "Лілонгве",
      "continent": "Африка",
      "government": "Республіка",
      "population": "18622104",
      "area": 118484,
      "country_en": "Malawi",
      "capital_en": "Lilongwe"
    },
    {
      "country_uk": "Північна Корея",
      "city": "Пхеньян",
      "continent": "Азія",
      "government": "Соціалістична республіка",
      "population": "25490965",
      "area": 120538,
      "country_en": "North Korea",
      "capital_en": "Pyongyang"
    },
    {
      "country_uk": "Нікарагуа",
      "city": "Манагуа",
      "continent": "Північна Америка",
      "government": "Республіка",
      "population": "6217581",
      "area": 130000,
      "country_en": "Nicaragua",
      "capital_en": "Managua"
    },
    {
      "country_uk": "Греція",
      "city": "Афіни",
      "continent": "Європа",
      "government": "Республіка",
      "population": "11159773",
      "area": 131626,
      "country_en": "Greece",
      "capital_en": "Athenai"
    },
    {
      "country_uk": "Таджикистан",
      "city": "Душанбе",
      "continent": "Азія",
      "government": "Республіка",
      "population": "8921343",
      "area": 143100,
      "country_en": "Tajikistan",
      "capital_en": "Dushanbe"
    },
    {
      "country_uk": "Бангладеш",
      "city": "Дакка",
      "continent": "Азія",
      "government": "Республіка",
      "population": "164669751",
      "area": 143998,
      "country_en": "Bangladesh",
      "capital_en": "Dhaka"
    },
    {
      "country_uk": "Непал",
      "city": "Катманду",
      "continent": "Азія",
      "government": "Федеральна парламентська республіка",
      "population": "29304998",
      "area": 147181,
      "country_en": "Nepal",
      "capital_en": "Kathmandu"
    },
    {
      "country_uk": "Суринам",
      "city": "Парамарібо",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "563402",
      "area": 163265,
      "country_en": "Suriname",
      "capital_en": "Paramaribo"
    },
    {
      "country_uk": "Туніс",
      "city": "Туніс",
      "continent": "Африка",
      "government": "Республіка",
      "population": "11532127",
      "area": 163610,
      "country_en": "Tunisia",
      "capital_en": "Tunis"
    },
    {
      "country_uk": "Уругвай",
      "city": "Монтевідео",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "3456750",
      "area": 175016,
      "country_en": "Uruguay",
      "capital_en": "Montevideo"
    },
    {
      "country_uk": "Cambodia",
      "city": "Phnom Penh",
      "continent": "Азія",
      "government": "Конституційна монархія",
      "population": "16005373",
      "area": 181035,
      "country_en": "Cambodia",
      "capital_en": "Phnom Penh"
    },
    {
      "country_uk": "Сирія",
      "city": "Дамаск",
      "continent": "Азія",
      "government": "Республіка",
      "population": "18269868",
      "area": 185180,
      "country_en": "Syria",
      "capital_en": "Damascus"
    },
    {
      "country_uk": "Сенегал",
      "city": "Дакар",
      "continent": "Африка",
      "government": "Республіка",
      "population": "15850567",
      "area": 196722,
      "country_en": "Senegal",
      "capital_en": "Dakar"
    },
    {
      "country_uk": "Киргизстан",
      "city": "Бішкек",
      "continent": "Азія",
      "government": "Республіка",
      "population": "6045117",
      "area": 199900,
      "country_en": "Kyrgyzstan",
      "capital_en": "Bishkek"
    },
    {
      "country_uk": "Білорусь",
      "city": "Мінськ",
      "continent": "Європа",
      "government": "Республіка",
      "population": "9468338",
      "area": 207600,
      "country_en": "Belarus",
      "capital_en": "Minsk"
    },
    {
      "country_uk": "Гайана",
      "city": "Джорджтаун",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "777859",
      "area": 214969,
      "country_en": "Guyana",
      "capital_en": "Georgetown"
    },
    {
      "country_uk": "Лаос",
      "city": "В'єнтьян",
      "continent": "Азія",
      "government": "Республіка",
      "population": "6858160",
      "area": 236800,
      "country_en": "Laos",
      "capital_en": "Vientiane"
    },
    {
      "country_uk": "Румунія",
      "city": "Бухарест",
      "continent": "Європа",
      "government": "Республіка",
      "population": "19679306",
      "area": 238391,
      "country_en": "Romania",
      "capital_en": "Bucuresti"
    },
    {
      "country_uk": "Гана",
      "city": "Аккра",
      "continent": "Африка",
      "government": "Республіка",
      "population": "28833629",
      "area": 238533,
      "country_en": "Ghana",
      "capital_en": "Accra"
    },
    {
      "country_uk": "Уганда",
      "city": "Кампала",
      "continent": "Африка",
      "government": "Республіка",
      "population": "42862958",
      "area": 241038,
      "country_en": "Uganda",
      "capital_en": "Kampala"
    },
    {
      "country_uk": "Об'єднане Королівство",
      "city": "Лондон",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "66181585",
      "area": 242900,
      "country_en": "United Kingdom",
      "capital_en": "London"
    },
    {
      "country_uk": "Гвінея",
      "city": "Конакри",
      "continent": "Африка",
      "government": "Республіка",
      "population": "12717176",
      "area": 245857,
      "country_en": "Guinea",
      "capital_en": "Conakry"
    },
    {
      "country_uk": "Західна Сахара",
      "city": "Ель-Аюн",
      "continent": "Африка",
      "government": null,
      "population": "552628",
      "area": 266000,
      "country_en": "Western Sahara",
      "capital_en": "El-Aai"
    },
    {
      "country_uk": "Габон",
      "city": "Лібревіль",
      "continent": "Африка",
      "government": "Республіка",
      "population": "2025137",
      "area": 267668,
      "country_en": "Gabon",
      "capital_en": "Libreville"
    },
    {
      "country_uk": "Нова Зеландія",
      "city": "Веллінгтон",
      "continent": "Океанія",
      "government": "Конституційна монархія",
      "population": "4705818",
      "area": 270534,
      "country_en": "New Zealand",
      "capital_en": "Wellington"
    },
    {
      "country_uk": "Буркіна-Фасо",
      "city": "Уагадугу",
      "continent": "Африка",
      "government": "Республіка",
      "population": "19193382",
      "area": 274000,
      "country_en": "Burkina Faso",
      "capital_en": "Ouagadougou"
    },
    {
      "country_uk": "Еквадор",
      "city": "Кіто",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "16624858",
      "area": 283561,
      "country_en": "Ecuador",
      "capital_en": "Quito"
    },
    {
      "country_uk": "Філіппіни",
      "city": "Маніла",
      "continent": "Азія",
      "government": "Республіка",
      "population": "104918090",
      "area": 300000,
      "country_en": "Philippines",
      "capital_en": "Manila"
    },
    {
      "country_uk": "Італія",
      "city": "Рим",
      "continent": "Європа",
      "government": "Республіка",
      "population": "59359900",
      "area": 301316,
      "country_en": "Italy",
      "capital_en": "Roma"
    },
    {
      "country_uk": "Оман",
      "city": "Маскат",
      "continent": "Азія",
      "government": "Монархія (Султанат)",
      "population": "4636262",
      "area": 309500,
      "country_en": "Oman",
      "capital_en": "Masqat"
    },
    {
      "country_uk": "Кот-д'Івуар",
      "city": "Ямусукро",
      "continent": "Африка",
      "government": "Республіка",
      "population": "24294750",
      "area": 322463,
      "country_en": "Ivory Coast",
      "capital_en": "Yamoussoukro"
    },
    {
      "country_uk": "Польща",
      "city": "Варшава",
      "continent": "Європа",
      "government": "Республіка",
      "population": "38170712",
      "area": 323250,
      "country_en": "Poland",
      "capital_en": "Warszawa"
    },
    {
      "country_uk": "Норвегія",
      "city": "Осло",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "5305383",
      "area": 323877,
      "country_en": "Norway",
      "capital_en": "Oslo"
    },
    {
      "country_uk": "Малайзія",
      "city": "Куала-Лумпур",
      "continent": "Азія",
      "government": "Конституційна монархія",
      "population": "31624264",
      "area": 329758,
      "country_en": "Malaysia",
      "capital_en": "Kuala Lumpur"
    },
    {
      "country_uk": "В'єтнам",
      "city": "Ханой",
      "continent": "Азія",
      "government": "Соціалістична республіка",
      "population": "95540800",
      "area": 331689,
      "country_en": "Vietnam",
      "capital_en": "Hanoi"
    },
    {
      "country_uk": "Фінляндія",
      "city": "Гельсінкі",
      "continent": "Європа",
      "government": "Республіка",
      "population": "5523231",
      "area": 338145,
      "country_en": "Finland",
      "capital_en": "Helsinki [Helsingfors]"
    },
    {
      "country_uk": "Конго",
      "city": "Браззавіль",
      "continent": "Африка",
      "government": "Республіка",
      "population": "5260750",
      "area": 342000,
      "country_en": "Congo",
      "capital_en": "Brazzaville"
    },
    {
      "country_uk": "Німеччина",
      "city": "Берлін",
      "continent": "Європа",
      "government": "Федеральна республіка",
      "population": "82114224",
      "area": 357022,
      "country_en": "Germany",
      "capital_en": "Berlin"
    },
    {
      "country_uk": "Японія",
      "city": "Токіо",
      "continent": "Азія",
      "government": "Конституційна монархія",
      "population": "127484450",
      "area": 377829,
      "country_en": "Japan",
      "capital_en": "Tokyo"
    },
    {
      "country_uk": "Зімбабве",
      "city": "Хараре",
      "continent": "Африка",
      "government": "Республіка",
      "population": "16529904",
      "area": 390757,
      "country_en": "Zimbabwe",
      "capital_en": "Harare"
    },
    {
      "country_uk": "Парагвай",
      "city": "Асунці",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "6811297",
      "area": 406752,
      "country_en": "Paraguay",
      "capital_en": "Asunci"
    },
    {
      "country_uk": "Ірак",
      "city": "Багдад",
      "continent": "Азія",
      "government": "Республіка",
      "population": "38274618",
      "area": 438317,
      "country_en": "Iraq",
      "capital_en": "Baghdad"
    },
    {
      "country_uk": "Марокко",
      "city": "Рабат",
      "continent": "Африка",
      "government": "Конституційна монархія",
      "population": "35739580",
      "area": 446550,
      "country_en": "Morocco",
      "capital_en": "Rabat"
    },
    {
      "country_uk": "Узбекистан",
      "city": "Ташкент",
      "continent": "Азія",
      "government": "Республіка",
      "population": "31910641",
      "area": 447400,
      "country_en": "Uzbekistan",
      "capital_en": "Toskent"
    },
    {
      "country_uk": "Швеція",
      "city": "Стокгольм",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "9910701",
      "area": 449964,
      "country_en": "Sweden",
      "capital_en": "Stockholm"
    },
    {
      "country_uk": "Папуа Нова Гвінея",
      "city": "Порт-Морсбі",
      "continent": "Океанія",
      "government": "Конституційна монархія",
      "population": "8251162",
      "area": 462840,
      "country_en": "Papua New Guinea",
      "capital_en": "Port Moresby"
    },
    {
      "country_uk": "Камерун",
      "city": "Яунд",
      "continent": "Африка",
      "government": "Республіка",
      "population": "24053727",
      "area": 475442,
      "country_en": "Cameroon",
      "capital_en": "Yaound"
    },
    {
      "country_uk": "Туркменістан",
      "city": "Ашхабад",
      "continent": "Азія",
      "government": "Республіка",
      "population": "5758075",
      "area": 488100,
      "country_en": "Turkmenistan",
      "capital_en": "Ashgabat"
    },
    {
      "country_uk": "Іспанія",
      "city": "Мадрид",
      "continent": "Європа",
      "government": "Конституційна монархія",
      "population": "46354321",
      "area": 505992,
      "country_en": "Spain",
      "capital_en": "Madrid"
    },
    {
      "country_uk": "Таїланд",
      "city": "Бангкок",
      "continent": "Азія",
      "government": "Конституційна монархія",
      "population": "69037513",
      "area": 513115,
      "country_en": "Thailand",
      "capital_en": "Bangkok"
    },
    {
      "country_uk": "Ємен",
      "city": "Сана",
      "continent": "Азія",
      "government": "Республіка",
      "population": "28250420",
      "area": 527968,
      "country_en": "Yemen",
      "capital_en": "Sanaa"
    },
    {
      "country_uk": "Франція",
      "city": "Париж",
      "continent": "Європа",
      "government": "Республіка",
      "population": "64979548",
      "area": 551500,
      "country_en": "France",
      "capital_en": "Paris"
    },
    {
      "country_uk": "Кенія",
      "city": "Найробі",
      "continent": "Африка",
      "government": "Республіка",
      "population": "49699862",
      "area": 580367,
      "country_en": "Kenya",
      "capital_en": "Nairobi"
    },
    {
      "country_uk": "Ботсвана",
      "city": "Габороне",
      "continent": "Африка",
      "government": "Республіка",
      "population": "2291661",
      "area": 581730,
      "country_en": "Botswana",
      "capital_en": "Gaborone"
    },
    {
      "country_uk": "Мадагаскар",
      "city": "Антананаріву",
      "continent": "Африка",
      "government": "Федеральна республіка",
      "population": "25570895",
      "area": 587041,
      "country_en": "Madagascar",
      "capital_en": "Antananarivo"
    },
    {
      "country_uk": "Україна",
      "city": "Київ",
      "continent": "Європа",
      "government": "Республіка",
      "population": "44222947",
      "area": 603700,
      "country_en": "Ukraine",
      "capital_en": "Kyiv"
    },
    {
      "country_uk": "Південний Судан",
      "city": "Джуба",
      "continent": "Африка",
      "government": null,
      "population": "12575714",
      "area": 619745,
      "country_en": "South Sudan",
      "capital_en": "Juba"
    },
    {
      "country_uk": "Центральна Африканська Республіка",
      "city": "Бангі",
      "continent": "Африка",
      "government": "Республіка",
      "population": "4659080",
      "area": 622984,
      "country_en": "Central African Republic",
      "capital_en": "Bangui"
    },
    {
      "country_uk": "Сомалі",
      "city": "Могадішо",
      "continent": "Африка",
      "government": "Республіка",
      "population": "14742523",
      "area": 637657,
      "country_en": "Somalia",
      "capital_en": "Mogadishu"
    },
    {
      "country_uk": "Афганістан",
      "city": "Кабул",
      "continent": "Азія",
      "government": "Ісламський Емірат",
      "population": "35530081",
      "area": 652090,
      "country_en": "Afghanistan",
      "capital_en": "Kabul"
    },
    {
      "country_uk": "М'янма",
      "city": "Рангун",
      "continent": "Азія",
      "government": "Республіка",
      "population": "53370609",
      "area": 676578,
      "country_en": "Myanmar",
      "capital_en": "Rangoon (Yangon)"
    },
    {
      "country_uk": "Замбія",
      "city": "Лусака",
      "continent": "Африка",
      "government": "Республіка",
      "population": "17094130",
      "area": 752618,
      "country_en": "Zambia",
      "capital_en": "Lusaka"
    },
    {
      "country_uk": "Чилі",
      "city": "Сантьяго де Чилі",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "18054726",
      "area": 756626,
      "country_en": "Chile",
      "capital_en": "Santiago de Chile"
    },
    {
      "country_uk": "Туреччина",
      "city": "Анкара",
      "continent": "Азія",
      "government": "Республіка",
      "population": "80745020",
      "area": 774815,
      "country_en": "Turkey",
      "capital_en": "Ankara"
    },
    {
      "country_uk": "Пакистан",
      "city": "Ісламабад",
      "continent": "Азія",
      "government": "Республіка",
      "population": "197015955",
      "area": 796095,
      "country_en": "Pakistan",
      "capital_en": "Islamabad"
    },
    {
      "country_uk": "Мозамбік",
      "city": "Мапуту",
      "continent": "Африка",
      "government": "Республіка",
      "population": "29668834",
      "area": 801590,
      "country_en": "Mozambique",
      "capital_en": "Maputo"
    },
    {
      "country_uk": "Намібія",
      "city": "Віндгук",
      "continent": "Африка",
      "government": "Республіка",
      "population": "2533794",
      "area": 824292,
      "country_en": "Namibia",
      "capital_en": "Windhoek"
    },
    {
      "country_uk": "Танзанія",
      "city": "Додома",
      "continent": "Африка",
      "government": "Республіка",
      "population": "57310019",
      "area": 883749,
      "country_en": "Tanzania",
      "capital_en": "Dodoma"
    },
    {
      "country_uk": "Венесуела",
      "city": "Каракас",
      "continent": "Південна Америка",
      "government": "Федеральна республіка",
      "population": "31977065",
      "area": 912050,
      "country_en": "Venezuela",
      "capital_en": "Caracas"
    },
    {
      "country_uk": "Нігерія",
      "city": "Абуджа",
      "continent": "Африка",
      "government": "Федеральна республіка",
      "population": "190886311",
      "area": 923768,
      "country_en": "Nigeria",
      "capital_en": "Abuja"
    },
    {
      "country_uk": "Єгипет",
      "city": "Каїр",
      "continent": "Африка",
      "government": "Республіка",
      "population": "97553151",
      "area": 1001449,
      "country_en": "Egypt",
      "capital_en": "Cairo"
    },
    {
      "country_uk": "Мавританія",
      "city": "Нуакшот",
      "continent": "Африка",
      "government": "Республіка",
      "population": "4420184",
      "area": 1025520,
      "country_en": "Mauritania",
      "capital_en": "Nouakchott"
    },
    {
      "country_uk": "Болівія",
      "city": "Ла-Пас",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "11051600",
      "area": 1098581,
      "country_en": "Bolivia",
      "capital_en": "La Paz"
    },
    {
      "country_uk": "Ефіопія",
      "city": "Аддіс Абеба",
      "continent": "Африка",
      "government": "Республіка",
      "population": "104957438",
      "area": 1104300,
      "country_en": "Ethiopia",
      "capital_en": "Addis Abeba"
    },
    {
      "country_uk": "Колумбія",
      "city": "Богота",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "49065615",
      "area": 1138914,
      "country_en": "Colombia",
      "capital_en": "Santaf"
    },
    {
      "country_uk": "Південна Африка",
      "city": "Преторія",
      "continent": "Африка",
      "government": "Республіка",
      "population": "56717156",
      "area": 1221037,
      "country_en": "South Africa",
      "capital_en": "Pretoria"
    },
    {
      "country_uk": "Малі",
      "city": "Бамако",
      "continent": "Африка",
      "government": "Республіка",
      "population": "18541980",
      "area": 1240192,
      "country_en": "Mali",
      "capital_en": "Bamako"
    },
    {
      "country_uk": "Ангола",
      "city": "Луанда",
      "continent": "Африка",
      "government": "Республіка",
      "population": "29784193",
      "area": 1246700,
      "country_en": "Angola",
      "capital_en": "Luanda"
    },
    {
      "country_uk": "Нігер",
      "city": "Ніамей",
      "continent": "Африка",
      "government": "Республіка",
      "population": "21477348",
      "area": 1267000,
      "country_en": "Niger",
      "capital_en": "Niamey"
    },
    {
      "country_uk": "Чад",
      "city": "Нджамена",
      "continent": "Африка",
      "government": "Республіка",
      "population": "14899994",
      "area": 1284000,
      "country_en": "Chad",
      "capital_en": "N'Djam"
    },
    {
      "country_uk": "Перу",
      "city": "Ліма",
      "continent": "Південна Америка",
      "government": "Республіка",
      "population": "32165485",
      "area": 1285216,
      "country_en": "Peru",
      "capital_en": "Lima"
    },
    {
      "country_uk": "Монголія",
      "city": "Улан-Батор",
      "continent": "Азія",
      "government": "Республіка",
      "population": "3075647",
      "area": 1566500,
      "country_en": "Mongolia",
      "capital_en": "Ulan Bator"
    },
    {
      "country_uk": "Іран",
      "city": "Тегеран",
      "continent": "Азія",
      "government": "Ісламська республіка",
      "population": "81162788",
      "area": 1648195,
      "country_en": "Iran",
      "capital_en": "Tehran"
    },
    {
      "country_uk": "Лівія",
      "city": "Триполі",
      "continent": "Африка",
      "government": "Соціалістична держава",
      "population": "5605000",
      "area": 1759540,
      "country_en": "Libyan Arab Jamahiriya",
      "capital_en": "Tripoli"
    },
    {
      "country_uk": "Судан",
      "city": "Хартум",
      "continent": "Африка",
      "government": "Ісламська республіка",
      "population": "40533330",
      "area": 1886068,
      "country_en": "Sudan",
      "capital_en": "Khartum"
    },
    {
      "country_uk": "Індонезія",
      "city": "Джакарта",
      "continent": "Азія",
      "government": "Республіка",
      "population": "263991379",
      "area": 1904569,
      "country_en": "Indonesia",
      "capital_en": "Jakarta"
    },
    {
      "country_uk": "Мексика",
      "city": "Мехіко",
      "continent": "Північна Америка",
      "government": "Федеральна республіка",
      "population": "129163276",
      "area": 1958201,
      "country_en": "Mexico",
      "capital_en": "Ciudad de M"
    },
    {
      "country_uk": "Саудівська Аравія",
      "city": "Ер-Ріяд",
      "continent": "Азія",
      "government": "Монархія",
      "population": "32938213",
      "area": 2149690,
      "country_en": "Saudi Arabia",
      "capital_en": "Riyadh"
    },
    {
      "country_uk": "Гренландія",
      "city": "Нуук",
      "continent": "Північна Америка",
      "government": "Частина Данії",
      "population": "56480",
      "area": 2166090,
      "country_en": "Greenland",
      "capital_en": "Nuuk"
    },
    {
      "country_uk": "Алжир",
      "city": "Алжир",
      "continent": "Африка",
      "government": "Республіка",
      "population": "41318142",
      "area": 2381741,
      "country_en": "Algeria",
      "capital_en": "Alger"
    },
    {
      "country_uk": "Казахстан",
      "city": "Астана",
      "continent": null,
      "government": "Республіка",
      "population": "18204499",
      "area": 2724900,
      "country_en": "Kazakhstan",
      "capital_en": "Astana"
    },
    {
      "country_uk": "Аргентина",
      "city": "Буенос-Айрес",
      "continent": "Південна Америка",
      "government": "Федеральна республіка",
      "population": "44271041",
      "area": 2780400,
      "country_en": "Argentina",
      "capital_en": "Buenos Aires"
    },
    {
      "country_uk": "Індія",
      "city": "Нью-Делі",
      "continent": "Азія",
      "government": "Федеральна республіка",
      "population": "1339180127",
      "area": 3287263,
      "country_en": "India",
      "capital_en": "New Delhi"
    },
    {
      "country_uk": "Австралія",
      "city": "Канберра",
      "continent": "Океанія",
      "government": "Федеральна конституційна монархія",
      "population": "24450561",
      "area": 7741220,
      "country_en": "Australia",
      "capital_en": "Canberra"
    },
    {
      "country_uk": "Бразилія",
      "city": "Бразиліа",
      "continent": "Південна Америка",
      "government": "Федеральна республіка",
      "population": "209288278",
      "area": 8547403,
      "country_en": "Brazil",
      "capital_en": "Brasília"
    },
    {
      "country_uk": "Сполучені Штати Америки",
      "city": "Вашингтон",
      "continent": "Північна Америка",
      "government": "Федеральна республіка",
      "population": "324459463",
      "area": 9363520,
      "country_en": "United States",
      "capital_en": "Washington"
    },
    {
      "country_uk": "Китай",
      "city": "Пекін",
      "continent": "Азія",
      "government": "Народна республіка",
      "population": "1409517397",
      "area": 9572900,
      "country_en": "China",
      "capital_en": "Peking"
    },
    {
      "country_uk": "Канада",
      "city": "Оттава",
      "continent": "Північна Америка",
      "government": "Конституційна монархія, Federation",
      "population": "36624199",
      "area": 9970610,
      "country_en": "Canada",
      "capital_en": "Ottawa"
    },
    {
      "country_uk": "Антарктида",
      "city": null,
      "continent": "Антарктида",
      "government": "Спільне адміністрування",
      "population": null,
      "area": 13120000,
      "country_en": "Antarctica",
      "capital_en": null
    },
    {
      "country_uk": "Росія",
      "city": "Москва",
      "continent": "Європа",
      "government": "Федеральна республіка",
      "population": "143989754",
      "area": 17075400,
      "country_en": "Russian Federation",
      "capital_en": "Moscow"
    }
  ]
}