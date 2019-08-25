/**
 * app.js
 * 
 * @description  This file contains code to implement filters in a web form 
 *               using the JavaScript array methods filter() and forEach() 
 *               while using d3 for selection and rendering of html elements
 * @author       Gilberto Ramirez (gramirez77@gmail.com)
 * @version      1 (initial)
 * @comments     UNC Data Analytics Boot Camp Homework (14th week)
 */

// from data.js
var ufoSightings = data;

// select button by ID using d3
var button = d3.select("#filter-btn");

// button click event handler
button.on("click", function() {

    // fetch inputs from the filter search web form
    var inputDatetime = d3.select("#datetime").property("value");
    var inputCity     = d3.select("#city").property("value");
    var inputState    = d3.select("#state").property("value");
    var inputCountry  = d3.select("#country").property("value");
    var inputShape    = d3.select("#shape").property("value");

    // filter ufoSightings data using inputs from the filter search web form
    var filteredData = ufoSightings.filter(ufoSighting => {
        if (inputDatetime !== "" && ufoSighting.datetime !== inputDatetime) {
            return false;
        }
        if (inputCity     !== "" && ufoSighting.city     !== inputCity) {
            return false;
        }
        if (inputState    !== "" && ufoSighting.state    !== inputState) {
            return false;
        }
        if (inputCountry  !== "" && ufoSighting.country  !== inputCountry) {
            return false;
        }
        if (inputShape    !== "" && ufoSighting.shape    !== inputShape) {
            return false;
        }
        return true;
    })

    // Display filtered data as a table
    
    var tbody = d3.select("#ufo-table > tbody");
    tbody.html("");        // clean table body before moving forward
    
    filteredData.forEach(ufoSighting => {

        // add one row to the table for every element in the filteredData array
        var row = tbody.append("tr");

        Object.values(ufoSighting).forEach(value => {
            // add one cell for every key within each object in filteredData 
            // assumption: data array has always the same keys in the same order
            row.append("td").text(value);
        })
    })

});
