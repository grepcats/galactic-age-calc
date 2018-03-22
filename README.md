# Super Galactic Age Calculator

#### _A calculator that takes the user's birthday, name, and gender to display what their age would be on other planets and what their life expectancy would be on those planets. 3/16/2018_

## Specs
* Program should take a user's current age and convert it to seconds
  * Input: 35 years
  * Output: 1,104,493,320 Seconds
* Program should take two dates and determine the difference between the two in seconds
  * Input: 4/19/1986; 3/16/2018 (current date)
  * Output: 1,006,905,600 seconds
* Program should return the age of a person in Mercury years (.24 earth years)
  * Input: 4/19/1986
  * Output: 133.04 years old in Mercury years
* Program should return the age of a person in Venus years (.62 earth years)
  * Input: 4/19/1986
  * Output: 51.50 years old in Venus years
* Program should return the age of a person in Mars years (1.88 earth years)
  * Input: 4/19/1986
  * Output: 16.99 years old in Mars years
* Program should return the age of a person in Jupiter years (11.86 earth years)
  * Input: 4/19/1986
  * Output: 2.69 years old in Jupiter years
* Program should determine how many years a person has left to live on each planet based on average life expectancy for their demographic. Demographic in this case is assumption that user lives in US and considers gender. In US Overall, 76.3 for males, 81.1 for females, overall 78.7
  * Input: 4/19/1986 & female
  * Output: (Venus): 79.31 Venus years left
* Program should return the number of years the user has lived past life expectancy if they have already lived past it on that planet
  * Input: 1/1/1930 & female
  * Output: Venus: 11.6 Venus years past life expectancy.

## Setup and Installation
* clone repository: git clone https://github.com/grepcats/galactic-age-calc
* install node. if you are on a mac, use `brew install node`. Otherwise, go to https://nodejs.org/en/download/ and download/install the appropriate installer.
* in the project directory, type
```
npm init
npm install (this installs the packages and dependencies listed in the package.json file)
npm install -g karma-cli (you should only have to do this once on your machine)

```
* to test, run `npm test`
* to open the development server, run `npm start`

From here, you should be able to enter your information and see results.

## Known Bugs
No known bugs.

## Support and Contact Details
If there are any issues or questions, please contact me at kayla.renee at gmail dot com or create an issue in GitHub.

## Technologies Used
JavaScript, Node.js, npm, Bootstrap, jQuery
Testing: Jasmine, Karma

## License
MIT License

Copyright (c) 2018 Kayla Ondracek

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
