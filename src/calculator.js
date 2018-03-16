const earth = 365;
const yearCalc = 86400;

export class Calculator {
  constructor(name, birthday, gender) {
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.convertedBirthday = new Date();
  }

  convertToSeconds() {
    this.convertedBirthday = Date.parse(this.birthday) / 1000;
  }

  compareDates() {
    let today = Math.floor(Date.now() / 1000);
    return (today - this.convertedBirthday);
  }

  planetAgeConvert(planet) {
    let age = this.compareDates();
    if (planet === "earth") {
      return (age / yearCalc / earth)
    }
    else if (planet === "mercury") {
      return (age / yearCalc / (earth * .24));
    }
    else if (planet === "venus") {
      return (age / yearCalc / (earth * .62));
    }
    else if (planet === "mars") {
      return (age / yearCalc / (earth * 1.88));
    }
    else if (planet === "jupiter") {
      return (age / 86400 / (earth * 11.86));
    }
  }


  lifeExpectancy(planet) {
    planet = planet.toLowerCase();
    let earthExpectancy;
    let planetExpectancy;
    let convertedPlanetAge;

    if (this.gender === "male") { earthExpectancy = 76.3; }
    else if (this.gender === "female") { earthExpectancy = 81.1; }
    else if (this.gender === "undisc") { earthExpectancy = 78.7; }

    if (planet === "earth") { planetExpectancy = earthExpectancy; convertedPlanetAge = this.planetAgeConvert("earth"); }
    else if (planet === "mercury") { planetExpectancy = earthExpectancy / .24; convertedPlanetAge = this.planetAgeConvert("mercury"); }
    else if (planet === "venus") { planetExpectancy = earthExpectancy / .62; convertedPlanetAge = this.planetAgeConvert("venus"); }
    else if (planet === "mars") { planetExpectancy = earthExpectancy / 1.88; convertedPlanetAge = this.planetAgeConvert("mars"); }
    else if (planet === "jupiter") { planetExpectancy = earthExpectancy / 11.86; convertedPlanetAge = this.planetAgeConvert("jupiter"); }

    if (planetExpectancy > convertedPlanetAge) {
      return ("Your life expectancy is " + Number(planetExpectancy - convertedPlanetAge).toFixed(1) + " more years.");
    }
    else {
      return ("You've outlived your life expectancy by " + Number(convertedPlanetAge - planetExpectancy).toFixed(1) + " years.");
    }
  }

}
