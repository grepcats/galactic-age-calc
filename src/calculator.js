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
    this.convertToSeconds();
    let age = this.compareDates();
    return (age / 60 / 60 / 24 / (365 * .24));

  }


}
