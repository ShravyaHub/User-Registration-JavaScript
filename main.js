const NAME_REGEX = /^[A-Z][a-z]{2,}$/;
const EMAIL_REGEX = /^([a-z0-9]+[-._+]?[a-z0-9]+)+@[a-z0-9-]+.[a-z]{2,3}.[a-z]{2,3}$/;

var readlineSync = require('readline-sync');
var utility = require('./utility');

readlineSync.question("Welcome to user registration!");
var firstName = readlineSync.question("Enter first name: ");
console.log(utility.validation(NAME_REGEX, firstName));
var lastName = readlineSync.question("Enter last name: ");
console.log(utility.validation(NAME_REGEX, lastName));
var email = readlineSync.question("Enter email: ");
console.log(utility.validation(EMAIL_REGEX, email));