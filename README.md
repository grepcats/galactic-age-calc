Super Galactic Age Calculator

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
  * Output: Venus: 11.09 Venus years past life expectancy.
* Program should take more information about a user's demographic and life style to determine life expectancy
  * Input: 1/1/1985, smoker, heavy-drinker, etc
  * Output: ?


## Installation
* npm init
* npm install
* ./node_modules/.bin/jasmine init
* npm install -g karma-cli
* karma init (note - if you have trouble running this in git bash, try PowerShell or another command line terminal)
