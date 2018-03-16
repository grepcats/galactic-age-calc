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
    calc.convertToSeconds();
    let snapshot = Math.floor(Date.now() / 1000);
    let difference = snapshot - calc.convertedBirthday;
    expect(calc.compareDates()).toEqual(difference);
  });

  it('returns the users age in mercury years', function() {
    calc.convertToSeconds();
    let age = calc.compareDates();
    let result = age / 60 / 60 / 24 / (365 * .24);
    expect(calc.mercuryConvert()).toEqual(result);
  });
});
