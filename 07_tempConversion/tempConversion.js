const convertToCelsius = function(temperature) {
  let farenheitToCelius = (temperature - 32) * (5/9);
  return Math.round(farenheitToCelius * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  let celciusToFarenheit = (temperature * (9/5)) + 32;
  return Math.round(celciusToFarenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
