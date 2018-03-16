import { Calculator } from '../src/calculator.js';

describe('Calculator', function() {
  let calc;
  const yearCalc = 86400;

  beforeEach(function() {
    calc = new Calculator("Ben", "4/19/1986", "male");
    calc.convertToSeconds();
  });

  it('creates a calculator object with the users name and birthday', function() {
    expect(calc.name).toEqual("Ben");
    expect(calc.birthday).toEqual("4/19/1986");
  });

  it('converts users age to seconds', function() {
    let seconds = 514278000;
    expect(calc.convertedBirthday).toEqual(seconds);
  });

  it('compares users age in seconds with current date in seconds', function() {
    let snapshot = Math.floor(Date.now() / 1000);
    let difference = snapshot - calc.convertedBirthday;
    expect(calc.compareDates()).toEqual(difference);
  });

  it('returns the users age in mercury years', function() {
    let age = calc.compareDates();
    let result = age / yearCalc / (365 * .24);
    expect(calc.planetAgeConvert("mercury")).toEqual(result);
  });

  it('returns the users age in earth years', function() {
    let age = calc.compareDates();
    let result = age / yearCalc / 365;
    expect(calc.planetAgeConvert("earth")).toEqual(result);
  });

  it('returns the users age in venus years', function() {
    let age = calc.compareDates();
    let result = age / yearCalc / (365 * .62);
    expect(calc.planetAgeConvert("venus")).toEqual(result);
  });

  it('returns the users age in mars years', function() {
    let age = calc.compareDates();
    let result = age / yearCalc / (365 * 1.88);
    expect(calc.planetAgeConvert("mars")).toEqual(result);
  });

  it('returns the users age in jupiter years', function() {
    let age = calc.compareDates();
    let result = age / yearCalc / (365 * 11.86);
    expect(calc.planetAgeConvert("jupiter")).toEqual(result);
  });

  it('provides life expectancy for user given planet', function() {
    let venusExpectancy = 76.3 / .62
    let result = "Your life expectancy is " + Number(venusExpectancy - calc.planetAgeConvert("venus")).toFixed(1) + " more years.";
    expect(calc.lifeExpectancy("venus")).toEqual(result);
  });

  it('tells user how many years theyve passed life expectancy if they have', function() {
    let older = new Calculator("Bill", "1/1/1930", "male");
    older.convertToSeconds();
    let venusExpectancy = 76.3 / .62
    let venusAge = older.planetAgeConvert("venus");
    let result = "You've outlived your life expectancy by " + Number(venusAge - venusExpectancy).toFixed(1) + " years.";
    expect(older.lifeExpectancy("venus")).toEqual(result);
  });

});
