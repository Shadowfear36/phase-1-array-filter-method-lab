// Code your solution here
const driverNames = ["David", "John", "John", "John"];

function findMatching(driverNames, driver){
  return driverNames.filter(driverName => driverName.toUpperCase() === driver.toUpperCase());
}

function fuzzyMatch(driverNames, name){
    return driverNames.filter(driverName => driverName.charAt(0).toUpperCase() === name.charAt(0).toUpperCase());
}

function matchName(driverNames, driver){
    return driverNames.filter(driverName => driver === driverName.name)
}