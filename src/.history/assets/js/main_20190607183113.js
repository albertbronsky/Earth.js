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
  Countries: [
    {
      country_uk: "Святий Престол (Держава Ватикану)",
      city: "Ватикан",
      continent: "Європа",
      government: "Незалежна церковна держава",
      population: "1000",
      area: 0.4,
      country_en: "Holy See (Vatican City State)",
      capital_en: "Citt"
    },
    {
      country_uk: "Уругвай",
      city: "Монтевідео",
      continent: "Південна Америка",
      government: "Республіка",
      population: "3456750",
      area: 175016,
      country_en: "Uruguay",
      capital_en: "Montevideo"
    },
    {
      country_uk: "Cambodia",
      city: "Phnom Penh",
      continent: "Азія",
      government: "Конституційна монархія",
      population: "16005373",
      area: 181035,
      country_en: "Cambodia",
      capital_en: "Phnom Penh"
    },
    {
      country_uk: "Сирія",
      city: "Дамаск",
      continent: "Азія",
      government: "Республіка",
      population: "18269868",
      area: 185180,
      country_en: "Syria",
      capital_en: "Damascus"
    },
    {
      country_uk: "Сенегал",
      city: "Дакар",
      continent: "Африка",
      government: "Республіка",
      population: "15850567",
      area: 196722,
      country_en: "Senegal",
      capital_en: "Dakar"
    },
    {
      country_uk: "Киргизстан",
      city: "Бішкек",
      continent: "Азія",
      government: "Республіка",
      population: "6045117",
      area: 199900,
      country_en: "Kyrgyzstan",
      capital_en: "Bishkek"
    },
    {
      country_uk: "Білорусь",
      city: "Мінськ",
      continent: "Європа",
      government: "Республіка",
      population: "9468338",
      area: 207600,
      country_en: "Belarus",
      capital_en: "Minsk"
    },
    {
      country_uk: "Гайана",
      city: "Джорджтаун",
      continent: "Південна Америка",
      government: "Республіка",
      population: "777859",
      area: 214969,
      country_en: "Guyana",
      capital_en: "Georgetown"
    },
    {
      country_uk: "Лаос",
      city: "В'єнтьян",
      continent: "Азія",
      government: "Республіка",
      population: "6858160",
      area: 236800,
      country_en: "Laos",
      capital_en: "Vientiane"
    },
    {
      country_uk: "Румунія",
      city: "Бухарест",
      continent: "Європа",
      government: "Республіка",
      population: "19679306",
      area: 238391,
      country_en: "Romania",
      capital_en: "Bucuresti"
    },
    {
      country_uk: "Гана",
      city: "Аккра",
      continent: "Африка",
      government: "Республіка",
      population: "28833629",
      area: 238533,
      country_en: "Ghana",
      capital_en: "Accra"
    },
    {
      country_uk: "Уганда",
      city: "Кампала",
      continent: "Африка",
      government: "Республіка",
      population: "42862958",
      area: 241038,
      country_en: "Uganda",
      capital_en: "Kampala"
    },
    {
      country_uk: "Об'єднане Королівство",
      city: "Лондон",
      continent: "Європа",
      government: "Конституційна монархія",
      population: "66181585",
      area: 242900,
      country_en: "United Kingdom",
      capital_en: "London"
    },
    {
      country_uk: "Гвінея",
      city: "Конакри",
      continent: "Африка",
      government: "Республіка",
      population: "12717176",
      area: 245857,
      country_en: "Guinea",
      capital_en: "Conakry"
    },
    {
      country_uk: "Західна Сахара",
      city: "Ель-Аюн",
      continent: "Африка",
      government: null,
      population: "552628",
      area: 266000,
      country_en: "Western Sahara",
      capital_en: "El-Aai"
    },
    {
      country_uk: "Габон",
      city: "Лібревіль",
      continent: "Африка",
      government: "Республіка",
      population: "2025137",
      area: 267668,
      country_en: "Gabon",
      capital_en: "Libreville"
    },
    {
      country_uk: "Нова Зеландія",
      city: "Веллінгтон",
      continent: "Океанія",
      government: "Конституційна монархія",
      population: "4705818",
      area: 270534,
      country_en: "New Zealand",
      capital_en: "Wellington"
    },
    {
      country_uk: "Буркіна-Фасо",
      city: "Уагадугу",
      continent: "Африка",
      government: "Республіка",
      population: "19193382",
      area: 274000,
      country_en: "Burkina Faso",
      capital_en: "Ouagadougou"
    },
    {
      country_uk: "Еквадор",
      city: "Кіто",
      continent: "Південна Америка",
      government: "Республіка",
      population: "16624858",
      area: 283561,
      country_en: "Ecuador",
      capital_en: "Quito"
    },
    {
      country_uk: "Філіппіни",
      city: "Маніла",
      continent: "Азія",
      government: "Республіка",
      population: "104918090",
      area: 300000,
      country_en: "Philippines",
      capital_en: "Manila"
    },
    {
      country_uk: "Італія",
      city: "Рим",
      continent: "Європа",
      government: "Республіка",
      population: "59359900",
      area: 301316,
      country_en: "Italy",
      capital_en: "Roma"
    },
    {
      country_uk: "Оман",
      city: "Маскат",
      continent: "Азія",
      government: "Монархія (Султанат)",
      population: "4636262",
      area: 309500,
      country_en: "Oman",
      capital_en: "Masqat"
    },
    {
      country_uk: "Кот-д'Івуар",
      city: "Ямусукро",
      continent: "Африка",
      government: "Республіка",
      population: "24294750",
      area: 322463,
      country_en: "Ivory Coast",
      capital_en: "Yamoussoukro"
    },
    {
      country_uk: "Польща",
      city: "Варшава",
      continent: "Європа",
      government: "Республіка",
      population: "38170712",
      area: 323250,
      country_en: "Poland",
      capital_en: "Warszawa"
    },
    {
      country_uk: "Норвегія",
      city: "Осло",
      continent: "Європа",
      government: "Конституційна монархія",
      population: "5305383",
      area: 323877,
      country_en: "Norway",
      capital_en: "Oslo"
    },
    {
      country_uk: "Малайзія",
      city: "Куала-Лумпур",
      continent: "Азія",
      government: "Конституційна монархія",
      population: "31624264",
      area: 329758,
      country_en: "Malaysia",
      capital_en: "Kuala Lumpur"
    },
    {
      country_uk: "В'єтнам",
      city: "Ханой",
      continent: "Азія",
      government: "Соціалістична республіка",
      population: "95540800",
      area: 331689,
      country_en: "Vietnam",
      capital_en: "Hanoi"
    },
    {
      country_uk: "Фінляндія",
      city: "Гельсінкі",
      continent: "Європа",
      government: "Республіка",
      population: "5523231",
      area: 338145,
      country_en: "Finland",
      capital_en: "Helsinki [Helsingfors]"
    },
    {
      country_uk: "Конго",
      city: "Браззавіль",
      continent: "Африка",
      government: "Республіка",
      population: "5260750",
      area: 342000,
      country_en: "Congo",
      capital_en: "Brazzaville"
    },
    {
      country_uk: "Німеччина",
      city: "Берлін",
      continent: "Європа",
      government: "Федеральна республіка",
      population: "82114224",
      area: 357022,
      country_en: "Germany",
      capital_en: "Berlin"
    },
    {
      country_uk: "Японія",
      city: "Токіо",
      continent: "Азія",
      government: "Конституційна монархія",
      population: "127484450",
      area: 377829,
      country_en: "Japan",
      capital_en: "Tokyo"
    },
    {
      country_uk: "Зімбабве",
      city: "Хараре",
      continent: "Африка",
      government: "Республіка",
      population: "16529904",
      area: 390757,
      country_en: "Zimbabwe",
      capital_en: "Harare"
    },
    {
      country_uk: "Парагвай",
      city: "Асунці",
      continent: "Південна Америка",
      government: "Республіка",
      population: "6811297",
      area: 406752,
      country_en: "Paraguay",
      capital_en: "Asunci"
    },
    {
      country_uk: "Ірак",
      city: "Багдад",
      continent: "Азія",
      government: "Республіка",
      population: "38274618",
      area: 438317,
      country_en: "Iraq",
      capital_en: "Baghdad"
    },
    {
      country_uk: "Марокко",
      city: "Рабат",
      continent: "Африка",
      government: "Конституційна монархія",
      population: "35739580",
      area: 446550,
      country_en: "Morocco",
      capital_en: "Rabat"
    },
    {
      country_uk: "Узбекистан",
      city: "Ташкент",
      continent: "Азія",
      government: "Республіка",
      population: "31910641",
      area: 447400,
      country_en: "Uzbekistan",
      capital_en: "Toskent"
    },
    {
      country_uk: "Швеція",
      city: "Стокгольм",
      continent: "Європа",
      government: "Конституційна монархія",
      population: "9910701",
      area: 449964,
      country_en: "Sweden",
      capital_en: "Stockholm"
    },
    {
      country_uk: "Папуа Нова Гвінея",
      city: "Порт-Морсбі",
      continent: "Океанія",
      government: "Конституційна монархія",
      population: "8251162",
      area: 462840,
      country_en: "Papua New Guinea",
      capital_en: "Port Moresby"
    },
    {
      country_uk: "Камерун",
      city: "Яунд",
      continent: "Африка",
      government: "Республіка",
      population: "24053727",
      area: 475442,
      country_en: "Cameroon",
      capital_en: "Yaound"
    },
    {
      country_uk: "Туркменістан",
      city: "Ашхабад",
      continent: "Азія",
      government: "Республіка",
      population: "5758075",
      area: 488100,
      country_en: "Turkmenistan",
      capital_en: "Ashgabat"
    },
    {
      country_uk: "Іспанія",
      city: "Мадрид",
      continent: "Європа",
      government: "Конституційна монархія",
      population: "46354321",
      area: 505992,
      country_en: "Spain",
      capital_en: "Madrid"
    },
    {
      country_uk: "Таїланд",
      city: "Бангкок",
      continent: "Азія",
      government: "Конституційна монархія",
      population: "69037513",
      area: 513115,
      country_en: "Thailand",
      capital_en: "Bangkok"
    },
    {
      country_uk: "Ємен",
      city: "Сана",
      continent: "Азія",
      government: "Республіка",
      population: "28250420",
      area: 527968,
      country_en: "Yemen",
      capital_en: "Sanaa"
    },
    {
      country_uk: "Франція",
      city: "Париж",
      continent: "Європа",
      government: "Республіка",
      population: "64979548",
      area: 551500,
      country_en: "France",
      capital_en: "Paris"
    },
    {
      country_uk: "Кенія",
      city: "Найробі",
      continent: "Африка",
      government: "Республіка",
      population: "49699862",
      area: 580367,
      country_en: "Kenya",
      capital_en: "Nairobi"
    },
    {
      country_uk: "Ботсвана",
      city: "Габороне",
      continent: "Африка",
      government: "Республіка",
      population: "2291661",
      area: 581730,
      country_en: "Botswana",
      capital_en: "Gaborone"
    },
    {
      country_uk: "Мадагаскар",
      city: "Антананаріву",
      continent: "Африка",
      government: "Федеральна республіка",
      population: "25570895",
      area: 587041,
      country_en: "Madagascar",
      capital_en: "Antananarivo"
    },
    {
      country_uk: "Україна",
      city: "Київ",
      continent: "Європа",
      government: "Республіка",
      population: "44222947",
      area: 603700,
      country_en: "Ukraine",
      capital_en: "Kyiv"
    },
    {
      country_uk: "Південний Судан",
      city: "Джуба",
      continent: "Африка",
      government: null,
      population: "12575714",
      area: 619745,
      country_en: "South Sudan",
      capital_en: "Juba"
    },
    {
      country_uk: "Центральна Африканська Республіка",
      city: "Бангі",
      continent: "Африка",
      government: "Республіка",
      population: "4659080",
      area: 622984,
      country_en: "Central African Republic",
      capital_en: "Bangui"
    },
    {
      country_uk: "Сомалі",
      city: "Могадішо",
      continent: "Африка",
      government: "Республіка",
      population: "14742523",
      area: 637657,
      country_en: "Somalia",
      capital_en: "Mogadishu"
    },
    {
      country_uk: "Афганістан",
      city: "Кабул",
      continent: "Азія",
      government: "Ісламський Емірат",
      population: "35530081",
      area: 652090,
      country_en: "Afghanistan",
      capital_en: "Kabul"
    },
    {
      country_uk: "М'янма",
      city: "Рангун",
      continent: "Азія",
      government: "Республіка",
      population: "53370609",
      area: 676578,
      country_en: "Myanmar",
      capital_en: "Rangoon (Yangon)"
    },
    {
      country_uk: "Замбія",
      city: "Лусака",
      continent: "Африка",
      government: "Республіка",
      population: "17094130",
      area: 752618,
      country_en: "Zambia",
      capital_en: "Lusaka"
    },
    {
      country_uk: "Чилі",
      city: "Сантьяго де Чилі",
      continent: "Південна Америка",
      government: "Республіка",
      population: "18054726",
      area: 756626,
      country_en: "Chile",
      capital_en: "Santiago de Chile"
    },
    {
      country_uk: "Туреччина",
      city: "Анкара",
      continent: "Азія",
      government: "Республіка",
      population: "80745020",
      area: 774815,
      country_en: "Turkey",
      capital_en: "Ankara"
    },
    {
      country_uk: "Пакистан",
      city: "Ісламабад",
      continent: "Азія",
      government: "Республіка",
      population: "197015955",
      area: 796095,
      country_en: "Pakistan",
      capital_en: "Islamabad"
    },
    {
      country_uk: "Мозамбік",
      city: "Мапуту",
      continent: "Африка",
      government: "Республіка",
      population: "29668834",
      area: 801590,
      country_en: "Mozambique",
      capital_en: "Maputo"
    },
    {
      country_uk: "Намібія",
      city: "Віндгук",
      continent: "Африка",
      government: "Республіка",
      population: "2533794",
      area: 824292,
      country_en: "Namibia",
      capital_en: "Windhoek"
    },
    {
      country_uk: "Танзанія",
      city: "Додома",
      continent: "Африка",
      government: "Республіка",
      population: "57310019",
      area: 883749,
      country_en: "Tanzania",
      capital_en: "Dodoma"
    },
    {
      country_uk: "Венесуела",
      city: "Каракас",
      continent: "Південна Америка",
      government: "Федеральна республіка",
      population: "31977065",
      area: 912050,
      country_en: "Venezuela",
      capital_en: "Caracas"
    },
    {
      country_uk: "Нігерія",
      city: "Абуджа",
      continent: "Африка",
      government: "Федеральна республіка",
      population: "190886311",
      area: 923768,
      country_en: "Nigeria",
      capital_en: "Abuja"
    },
    {
      country_uk: "Єгипет",
      city: "Каїр",
      continent: "Африка",
      government: "Республіка",
      population: "97553151",
      area: 1001449,
      country_en: "Egypt",
      capital_en: "Cairo"
    },
    {
      country_uk: "Мавританія",
      city: "Нуакшот",
      continent: "Африка",
      government: "Республіка",
      population: "4420184",
      area: 1025520,
      country_en: "Mauritania",
      capital_en: "Nouakchott"
    },
    {
      country_uk: "Болівія",
      city: "Ла-Пас",
      continent: "Південна Америка",
      government: "Республіка",
      population: "11051600",
      area: 1098581,
      country_en: "Bolivia",
      capital_en: "La Paz"
    },
    {
      country_uk: "Ефіопія",
      city: "Аддіс Абеба",
      continent: "Африка",
      government: "Республіка",
      population: "104957438",
      area: 1104300,
      country_en: "Ethiopia",
      capital_en: "Addis Abeba"
    },
    {
      country_uk: "Колумбія",
      city: "Богота",
      continent: "Південна Америка",
      government: "Республіка",
      population: "49065615",
      area: 1138914,
      country_en: "Colombia",
      capital_en: "Santaf"
    },
    {
      country_uk: "Південна Африка",
      city: "Преторія",
      continent: "Африка",
      government: "Республіка",
      population: "56717156",
      area: 1221037,
      country_en: "South Africa",
      capital_en: "Pretoria"
    },
    {
      country_uk: "Малі",
      city: "Бамако",
      continent: "Африка",
      government: "Республіка",
      population: "18541980",
      area: 1240192,
      country_en: "Mali",
      capital_en: "Bamako"
    },
    {
      country_uk: "Ангола",
      city: "Луанда",
      continent: "Африка",
      government: "Республіка",
      population: "29784193",
      area: 1246700,
      country_en: "Angola",
      capital_en: "Luanda"
    },
    {
      country_uk: "Нігер",
      city: "Ніамей",
      continent: "Африка",
      government: "Республіка",
      population: "21477348",
      area: 1267000,
      country_en: "Niger",
      capital_en: "Niamey"
    },
    {
      country_uk: "Чад",
      city: "Нджамена",
      continent: "Африка",
      government: "Республіка",
      population: "14899994",
      area: 1284000,
      country_en: "Chad",
      capital_en: "N'Djam"
    },
    {
      country_uk: "Перу",
      city: "Ліма",
      continent: "Південна Америка",
      government: "Республіка",
      population: "32165485",
      area: 1285216,
      country_en: "Peru",
      capital_en: "Lima"
    },
    {
      country_uk: "Монголія",
      city: "Улан-Батор",
      continent: "Азія",
      government: "Республіка",
      population: "3075647",
      area: 1566500,
      country_en: "Mongolia",
      capital_en: "Ulan Bator"
    },
    {
      country_uk: "Іран",
      city: "Тегеран",
      continent: "Азія",
      government: "Ісламська республіка",
      population: "81162788",
      area: 1648195,
      country_en: "Iran",
      capital_en: "Tehran"
    },
    {
      country_uk: "Лівія",
      city: "Триполі",
      continent: "Африка",
      government: "Соціалістична держава",
      population: "5605000",
      area: 1759540,
      country_en: "Libyan Arab Jamahiriya",
      capital_en: "Tripoli"
    },
    {
      country_uk: "Судан",
      city: "Хартум",
      continent: "Африка",
      government: "Ісламська республіка",
      population: "40533330",
      area: 1886068,
      country_en: "Sudan",
      capital_en: "Khartum"
    },
    {
      country_uk: "Індонезія",
      city: "Джакарта",
      continent: "Азія",
      government: "Республіка",
      population: "263991379",
      area: 1904569,
      country_en: "Indonesia",
      capital_en: "Jakarta"
    },
    {
      country_uk: "Мексика",
      city: "Мехіко",
      continent: "Північна Америка",
      government: "Федеральна республіка",
      population: "129163276",
      area: 1958201,
      country_en: "Mexico",
      capital_en: "Ciudad de M"
    },
    {
      country_uk: "Саудівська Аравія",
      city: "Ер-Ріяд",
      continent: "Азія",
      government: "Монархія",
      population: "32938213",
      area: 2149690,
      country_en: "Saudi Arabia",
      capital_en: "Riyadh"
    },
    {
      country_uk: "Гренландія",
      city: "Нуук",
      continent: "Північна Америка",
      government: "Частина Данії",
      population: "56480",
      area: 2166090,
      country_en: "Greenland",
      capital_en: "Nuuk"
    },
    {
      country_uk: "Алжир",
      city: "Алжир",
      continent: "Африка",
      government: "Республіка",
      population: "41318142",
      area: 2381741,
      country_en: "Algeria",
      capital_en: "Alger"
    },
    {
      country_uk: "Казахстан",
      city: "Астана",
      continent: null,
      government: "Республіка",
      population: "18204499",
      area: 2724900,
      country_en: "Kazakhstan",
      capital_en: "Astana"
    },
    {
      country_uk: "Аргентина",
      city: "Буенос-Айрес",
      continent: "Південна Америка",
      government: "Федеральна республіка",
      population: "44271041",
      area: 2780400,
      country_en: "Argentina",
      capital_en: "Buenos Aires"
    },
    {
      country_uk: "Індія",
      city: "Нью-Делі",
      continent: "Азія",
      government: "Федеральна республіка",
      population: "1339180127",
      area: 3287263,
      country_en: "India",
      capital_en: "New Delhi"
    },
    {
      country_uk: "Австралія",
      city: "Канберра",
      continent: "Океанія",
      government: "Федеральна конституційна монархія",
      population: "24450561",
      area: 7741220,
      country_en: "Australia",
      capital_en: "Canberra"
    },
    {
      country_uk: "Бразилія",
      city: "Бразиліа",
      continent: "Південна Америка",
      government: "Федеральна республіка",
      population: "209288278",
      area: 8547403,
      country_en: "Brazil",
      capital_en: "Brasília"
    },
    {
      country_uk: "Сполучені Штати Америки",
      city: "Вашингтон",
      continent: "Північна Америка",
      government: "Федеральна республіка",
      population: "324459463",
      area: 9363520,
      country_en: "United States",
      capital_en: "Washington"
    },
    {
      country_uk: "Китай",
      city: "Пекін",
      continent: "Азія",
      government: "Народна республіка",
      population: "1409517397",
      area: 9572900,
      country_en: "China",
      capital_en: "Peking"
    },
    {
      country_uk: "Канада",
      city: "Оттава",
      continent: "Північна Америка",
      government: "Конституційна монархія, Federation",
      population: "36624199",
      area: 9970610,
      country_en: "Canada",
      capital_en: "Ottawa"
    },
    {
      country_uk: "Антарктида",
      city: null,
      continent: "Антарктида",
      government: "Спільне адміністрування",
      population: null,
      area: 13120000,
      country_en: "Antarctica",
      capital_en: null
    },
    {
      country_uk: "Росія",
      city: "Москва",
      continent: "Європа",
      government: "Федеральна республіка",
      population: "143989754",
      area: 17075400,
      country_en: "Russian Federation",
      capital_en: "Moscow"
    }
  ]
};
