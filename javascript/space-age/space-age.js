function SpaceAge (seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function () {
  var earthYear = this.seconds / 31557600;
  return parseFloat(earthYear.toFixed(2))
}

SpaceAge.prototype.onMercury = function () {
  var earthYear = this.seconds / 31557600;
  var mercuryYear = earthYear / 0.2408467;
  return parseFloat(mercuryYear.toFixed(2))
}

SpaceAge.prototype.onVenus = function () {
  var earthYear = this.seconds / 31557600;
  var venusYear = earthYear / 0.61519726;
  return parseFloat(venusYear.toFixed(2));
}

SpaceAge.prototype.onMars = function () {
  var earthYear = this.seconds / 31557600;
  var marsYear = earthYear / 1.8808158;
  return parseFloat(marsYear.toFixed(2));
}

SpaceAge.prototype.onJupiter = function () {
  var earthYear = this.seconds / 31557600;
  var jupiterYear = earthYear / 11.862615;
  return parseFloat(jupiterYear.toFixed(2));
}

SpaceAge.prototype.onSaturn = function () {
  var earthYear = this.seconds / 31557600;
  var saturnYear = earthYear / 29.447498;
  return parseFloat(saturnYear.toFixed(2));
}

SpaceAge.prototype.onUranus = function () {
  var earthYear = this.seconds / 31557600;
  var uranusYear = earthYear / 84.016846;
  return parseFloat(uranusYear.toFixed(2));
}

SpaceAge.prototype.onNeptune = function () {
  var earthYear = this.seconds / 31557600;
  var neptuneYear = earthYear / 164.79132;
  return parseFloat(neptuneYear.toFixed(2));
}





console.log('mars');

module.exports = SpaceAge;
