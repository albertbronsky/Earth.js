// let country(name, capital, continent, government, population, area) = {
//     name: name;
//     capital: capital;
//     continent: continent;
//     government: government;
//     population: population;
//     area: area;
// }

// Check input
var lastValue = '';
$("#textbox").on('input', function () {
    if ($(this).val() != lastValue) {
        lastValue = $(this).val();
        console.log(lastValue)
    }
});

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