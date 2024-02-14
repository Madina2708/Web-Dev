function getLocalDay(date) {
  var day = date.getDay();
  return day === 0 ? 7 : day; // Adjust for European standard
}


var date = new Date(); // Current date
console.log(getLocalDay(date)); // Output the European day of the week
