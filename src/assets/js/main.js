// Check input
var lastValue = '';
$("#textbox").on('input', function () {
    if ($(this).val() != lastValue) {
        lastValue = $(this).val();
        country_search(lastValue);
    }
});

function country_search(term) {
    // class Country {
    //     name: name;
    //     capital: capital;
    //     continent: continent;
    //     government: government;
    //     population: population;
    //     area: area;
    // }

    class Country {
        constructor(name, capital, continent, government, population, area) {
            this.name = name;
            this.capital = capital;
            this.continent = continent;
            this.government = government;
            this.population = population;
            this.area = area;

            this.getName = function () {
                // return "User's name: " + this.firstName + " " + this.lastName;
            }
        }
    }

    var user001 = new Country("test", "Smith", 1985);
}

$.getJSON("assets/json/db.json", function (data) {
    // console.log(data.find(x => x.country === 'Aruba').population);
    // console.log(items[0]);
    for (i in data) {
        console.log(i)
    }
    // $.each( data, function( key, val ) {
    //     items.push( "<li id='" + key + "'>" + val + "</li>" );
    // });
    //
    // $( "<ul/>", {
    //     "class": "my-new-list",
    //     html: items.join( "" )
    // }).appendTo( "body" );
});