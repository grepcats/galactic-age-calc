const earth = 365;

export class Calculator {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
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
    if (planet === "venus") {
      let venusExpectancy = 81.1 / .62
      return (venusExpectancy - this.venusConvert());

    }


  }

}
