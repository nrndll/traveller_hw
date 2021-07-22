const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => journey.startLocation);
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => journey.endLocation);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport === transport);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => journey.distance > minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey) => runningTotal += journey.distance, 0);
  return result;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   modes = [];
//   this.journeys.forEach((journey) => {
//     if (modes.includes(journey.transport) !== true){
//       modes.push(journey.transport);
//     } 
//   })
//   return modes;
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modes = this.journeys.reduce((accumulator, journey) => {
    if (accumulator.indexOf(journey.transport) === -1){
      accumulator.push(journey.transport);
    }
    return accumulator;
  }, []);
  return modes;
}



module.exports = Traveller;
