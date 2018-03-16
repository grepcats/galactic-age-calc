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
    // let today = Date.now() / 1000;
    // return (today - this.convertedBirthday);
  }


}
