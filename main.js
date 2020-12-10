const NAME_REGEX = /^[A-Z][a-z]{2,}$/;

var readlineSync = require('readline-sync');
var utility = require('./utility');

var firstName = readlineSync.question('Enter first name: ');
console.log(utility.validation(NAME_REGEX, firstName));