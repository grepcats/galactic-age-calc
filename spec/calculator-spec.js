import { Calculator } from '../src/calculator.js';

describe('Calculator', function() {
  let calc;

  beforeEach(function() {
    calc = new Calculator("Ben", "4/19/1986");
  });

  it('creates a calculator object with the users name and birthday', function() {
    expect(calc.name).toEqual("Ben");
    expect(calc.birthday).toEqual("4/19/1986");
  });

  it('converts users age to seconds', function() {
    calc.convertToSeconds();
    let seconds = 514278000;

    expect(calc.convertedBirthday).toEqual(seconds);
  });

  it('compares users age in seconds with current date in seconds', function() {
    let snapshot = Math.floor(Date.now() / 1000);
    calc.convertToSeconds();
    let difference = snapshot - calc.convertedBirthday;
    expect(calc.compareDates()).toEqual(difference);

  });
});
