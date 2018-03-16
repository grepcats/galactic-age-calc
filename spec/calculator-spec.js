import { Calculator } from '../src/calculator.js';

describe('Calculator', function() {
  it('creates a calculator object with the users name and birthday', function() {
    let calc = new Calculator("Ben", "4/19/1986");

    expect(calc.name).toEqual("Ben");
    expect(calc.birthday).toEqual("4/19/1986");
  });

  it('converts users age to seconds', function() {
    let calc = new Calculator("Ben", "4/19/1986");
    calc.convertToSeconds();
    let seconds = 514278000;

    expect(calc.convertedBirthday.toEqual(seconds));
  });
});
