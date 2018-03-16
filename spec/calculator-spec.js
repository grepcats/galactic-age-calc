import { Calculator } from '../src/calculator.js';

describe('Calculator', function() {
  let calc;
  let older;
  const yearCalc = 86400;

  beforeEach(function() {
    calc = new Calculator("Ben", "4/19/1986", "male");
    older = new Calculator("Bill", "1/1/1930", "male");
    calc.convertToSeconds();
    older.convertToSeconds();
  });

  it('creates a calculator object with the users name and birthday', function() {
    expect(calc.name).toEqual("Ben");
    expect(calc.gender).toEqual("male");
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

  it('provides life expectancy for earth', function() {
    let expectency = 76.3;
    let result = "Your life expectancy is " + Number(expectency - calc.planetAgeConvert("earth")).toFixed(1) + " more years.";
    expect(calc.lifeExpectancy("earth")).toEqual(result);
  });

  it('provides life expectancy for mercury', function() {
    let expectency = 76.3 / .24;
    let result = "Your life expectancy is " + Number(expectency - calc.planetAgeConvert("mercury")).toFixed(1) + " more years.";
    expect(calc.lifeExpectancy("mercury")).toEqual(result);
  });

  it('provides life expectancy for venus', function() {
    let expectency = 76.3 / .62;
    let result = "Your life expectancy is " + Number(expectency - calc.planetAgeConvert("venus")).toFixed(1) + " more years.";
    expect(calc.lifeExpectancy("venus")).toEqual(result);
  });

  it('provides life expectancy for mars', function() {
    let expectency = 76.3 / 1.88;
    let result = "Your life expectancy is " + Number(expectency - calc.planetAgeConvert("mars")).toFixed(1) + " more years.";
    expect(calc.lifeExpectancy("mars")).toEqual(result);
  });

  it('provides life expectancy for jupiter', function() {
    let expectency = 76.3 / 11.86;
    let result = "Your life expectancy is " + Number(expectency - calc.planetAgeConvert("jupiter")).toFixed(1) + " more years.";
    expect(calc.lifeExpectancy("jupiter")).toEqual(result);
  });

  it('tells user how many years theyve passed life expectancy for earth', function() {
    let expectancy = 76.3;
    let result = "You've outlived your life expectancy by " + Number(older.planetAgeConvert("earth") - expectancy).toFixed(1) + " years.";
    expect(older.lifeExpectancy("earth")).toEqual(result);
  });

  it('tells user how many years theyve passed life expectancy for mercury', function() {
    let expectancy = 76.3 / .24;
    let result = "You've outlived your life expectancy by " + Number(older.planetAgeConvert("mercury") - expectancy).toFixed(1) + " years.";

    expect(older.lifeExpectancy("mercury")).toEqual(result);
  });

  it('tells user how many years theyve passed life expectancy for venus', function() {
    let expectancy = 76.3 / .62;
    let result = "You've outlived your life expectancy by " + Number(older.planetAgeConvert("venus") - expectancy).toFixed(1) + " years.";
    expect(older.lifeExpectancy("venus")).toEqual(result);
  });

  it('tells user how many years theyve passed life expectancy for mars', function() {
    let expectancy = 76.3 / 1.88;
    let result = "You've outlived your life expectancy by " + Number(older.planetAgeConvert("mars") - expectancy).toFixed(1) + " years.";
    expect(older.lifeExpectancy("mars")).toEqual(result);
  });

  it('tells user how many years theyve passed life expectancy for jupiter', function() {
    let expectancy = 76.3 / 11.86;
    let result = "You've outlived your life expectancy by " + Number(older.planetAgeConvert("jupiter") - expectancy).toFixed(1) + " years.";
    expect(older.lifeExpectancy("jupiter")).toEqual(result);
  });
});
