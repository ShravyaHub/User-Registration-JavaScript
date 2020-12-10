module.exports = {
    validation: function validate(regex, value) {
        if(regex.test(value)) return "Valid";
        else return "Invalid";
    }
};
  