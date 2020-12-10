const NAME_REGEX = /^[A-Z][a-z]{2,}$/;

var readlineSync = require('readline-sync');
var utility = require('./utility');

readlineSync.question("Welcome to user registration!");
var firstName = readlineSync.question("Enter first name: ");
console.log(utility.validation(NAME_REGEX, firstName));
var lastName = readlineSync.question("Enter last name: ");
console.log(utility.validation(NAME_REGEX, lastName));