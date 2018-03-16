const earth = 365;

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

    if (this.gender === "male") { earthExpectancy = 76.3; }
    else if (this.gender === "female") { earthExpectancy = 81.1; }

    if (planet === "mercury") {
      let mercuryExpectancy = earthExpectancy / .24;
      return (mercuryExpectancy - this.mercuryConvert());
    }
    else if (planet === "venus") {
      let venusExpectancy = earthExpectancy / .62;
      // console.log("venus expectancy " + venusExpectancy);
      // console.log("venus age " + this.venusConvert());
      // console.log("name: " + this.name);
      if (venusExpectancy > this.venusConvert()) {
        return (venusExpectancy - this.venusConvert());
      }
      else {
        return (this.venusConvert() - venusExpectancy);
      }

    }
    else if (planet === "mars") {
      let marsExpectancy = earthExpectancy / 1.88;
      return (marsExpectancy - this.marsConvert());
    }
    else if (planet === "jupiter") {
      let jupiterExpectancy = earthExpectancy / 11.86;
      return (jupiterExpectancy - this.jupiterConvert());
    }
    else {
      return ("What")
    }

  }

}
