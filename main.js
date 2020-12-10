const NAME_REGEX = /^[A-Z][a-z]{2,}$/;
const EMAIL_REGEX = /^([a-z0-9]+[-._+]?[a-z0-9]+)+@[a-z0-9-]+.[a-z]{2,3}.[a-z]{2,3}$/;
const PHONE_NUMBER_REGEX = /^[9][1][ ][6-9][0-9]{9}$/;
const PASSWORD_REGEX = /^.{8,}$/;

var readlineSync = require('readline-sync');
var utility = require('./utility');

readlineSync.question("Welcome to user registration!");
var firstName = readlineSync.question("Enter first name: ");
console.log(utility.validation(NAME_REGEX, firstName));
var lastName = readlineSync.question("Enter last name: ");
console.log(utility.validation(NAME_REGEX, lastName));
var email = readlineSync.question("Enter email: ");
console.log(utility.validation(EMAIL_REGEX, email));
var phoneNumber = readlineSync.question("Enter phone number: ");
console.log(utility.validation(PHONE_NUMBER_REGEX, phoneNumber));
var password = readlineSync.question("Enter password: ");
console.log(utility.validation(PASSWORD_REGEX, password));