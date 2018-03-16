import { Calculator } from './calculator.js';

$(document).ready(function(){
  $("#birthday-form").submit(function(event) {
    event.preventDefault();
    let person = new Calculator($("#name").val(), $("#birthday").val(), $("#gender").val());
    person.convertToSeconds();
    $("#results").append("<p>Your age on Earth would be " + Number((person.earthConvert()).toFixed(1)) + ".</p>");
    $("#results").append("<p>Your age on Mercury would be " + Number((person.mercuryConvert()).toFixed(1)) + ". " + person.lifeExpectancy("mercury") + "</p>");
    $("#results").append("<p>Your age on Venus would be " + Number((person.venusConvert()).toFixed(1)) + ". " + person.lifeExpectancy("venus") + "</p>");
    $("#results").append("<p>Your age on Mars would be " + Number((person.marsConvert()).toFixed(1)) + ". " + person.lifeExpectancy("mars") + "</p>");
    $("#results").append("<p>Your age on Jupiter would be " + Number((person.jupiterConvert()).toFixed(1)) + ". " + person.lifeExpectancy("jupiter") + "</p>");

  });
});
