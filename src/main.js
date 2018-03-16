import { Calculator } from './calculator.js';

$(document).ready(function(){
  $("#birthday-form").submit(function(event) {
    event.preventDefault();
    let person = new Calculator($("#name").val(), $("#birthday").val(), $("#gender").val());
    person.convertToSeconds();
    $("#results").append("<p>Your age on Earth would be " + Number((person.planetAgeConvert("earth")).toFixed(1)) + ". " + person.lifeExpectancy("earth") + "</p>");
    $("#results").append("<p>Your age on Mercury would be " + Number((person.planetAgeConvert("mercury")).toFixed(1)) + ". " + person.lifeExpectancy("mercury") + "</p>");
    $("#results").append("<p>Your age on Venus would be " + Number((person.planetAgeConvert("venus")).toFixed(1)) + ". " + person.lifeExpectancy("venus") + "</p>");
    $("#results").append("<p>Your age on Mars would be " + Number((person.planetAgeConvert("mars")).toFixed(1)) + ". " + person.lifeExpectancy("mars") + "</p>");
    $("#results").append("<p>Your age on Jupiter would be " + Number((person.planetAgeConvert("jupiter")).toFixed(1)) + ". " + person.lifeExpectancy("jupiter") + "</p>");
  });
});
