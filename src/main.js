import { Calculator } from './calculator.js';
import './styles.css';

$(document).ready(function(){
  $("#birthday-form").submit(function(event) {
    event.preventDefault();
    $("p").remove();
    $("h2").remove();
    let person = new Calculator($("#name").val(), $("#birthday").val(), $("#gender").val());
    person.convertToSeconds();
    let planets = ["earth", "mercury", "venus", "mars", "jupiter"];
    $("#results").append("<h2>Hello " + person.name + "! Here are your results...")
    planets.forEach(function(planet) {
      $("#results").append("<p>Your age on " + planet[0].toUpperCase() + planet.slice(1) + " would be " + Number((person.planetAgeConvert(planet)).toFixed(1)) + ". " + person.lifeExpectancy(planet) + "</p>");
    });
  });
});
