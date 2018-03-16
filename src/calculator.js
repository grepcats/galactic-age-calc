const earth = 365;

export class Calculator {

  // const age = this.compareDates();

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

  mercuryConvert() {
    let age = this.compareDates();
    return (age / 60 / 60 / 24 / (earth * .24));
  }

  venusConvert() {
    let age = this.compareDates();
    return (age / 60 / 60 / 24 / (earth * .62));
  }

  marsConvert() {
    let age = this.compareDates();
    return (age / 60 / 60 / 24 / (earth * 1.88));
  }

  jupiterConvert() {
    let age = this.compareDates();
    return (age / 60 / 60 / 24 / (earth * 11.86));
  }

  lifeExpectancy(planet) {
    planet = planet.toLowerCase();
    let earthExpectancy;
    let planetExpectancy;
    let convertedPlanetAge;

    if (this.gender === "male") { earthExpectancy = 76.3; }
    else if (this.gender === "female") { earthExpectancy = 81.1; }

    if (planet === "mercury") { planetExpectancy = earthExpectancy / .24; convertedPlanetAge = this.mercuryConvert(); }
    else if (planet === "venus") { planetExpectancy = earthExpectancy / .62; convertedPlanetAge = this.venusConvert(); }
    else if (planet === "mars") { planetExpectancy = earthExpectancy / 1.88; convertedPlanetAge = this.marsConvert(); }
    else if (planet === "jupiter") { planetExpectancy = earthExpectancy / 11.86; convertedPlanetAge = this.jupiterConvert(); }

    if (planetExpectancy > convertedPlanetAge) {
      return (planetExpectancy - convertedPlanetAge);
    }
    else {
      return (convertedPlanetAge - planetExpectancy);
    }


  }

}
