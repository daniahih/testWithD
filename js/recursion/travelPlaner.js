// 1. Calculate Total Trip Days
function totalTripDays(durations) {
  if (durations.length === 0) return 0;
  return durations[0] + totalTripDays(durations.slice(1));
}

console.log(totalTripDays([3, 5, 7, 2])); // Output: 17

// 2. Count Cities Visited
function countCitiesVisited(cities) {
  if (cities.length === 0) return 0;
  if (Array.isArray(cities[0]))
    return countCitiesVisited(cities[0]) + countCitiesVisited(cities.slice(1));
  return 1 + countCitiesVisited(cities.slice(1));
}

console.log(
  countCitiesVisited([["Paris", "London"], ["Rome", "Florence"], ["New York"]])
); // Output: 5

// 3. Find Destination
function findDestination(trips, city) {
  for (let key in trips) {
    if (typeof trips[key] === "object") {
      if (findDestination(trips[key], city)) return true;
    } else if (trips[key] === city) {
      return true;
    }
  }
  return false;
}

console.log(
  findDestination(
    { Europe: { France: "Paris", Italy: "Rome" }, USA: { NY: "New York" } },
    "Rome"
  )
); // Output: true

// 4. Calculate Average Distance
function averageDistance(distances) {
  function sum(distances) {
    if (distances.length === 0) return 0;
    return distances[0] + sum(distances.slice(1));
  }
  return sum(distances) / distances.length;
}

console.log(averageDistance([200, 150, 400, 100])); // Output: 212.5

// 5. Sum Trip Costs
function sumTripCosts(trips) {
  if (trips.length === 0) return 0;
  if (Array.isArray(trips[0]))
    return sumTripCosts(trips[0]) + sumTripCosts(trips.slice(1));
  return trips[0] + sumTripCosts(trips.slice(1));
}

console.log(sumTripCosts([[100, 200], [150, 300], [50]])); // Output: 800

// 6. Find Longest Trip
function findLongestTrip(trips) {
  if (trips.length === 1) return trips[0];
  const longestRest = findLongestTrip(trips.slice(1));
  return trips[0] > longestRest ? trips[0] : longestRest;
}

console.log(findLongestTrip([10, 20, 15, 25])); // Output: 25

// 7. List All Cities Alphabetically
function listCitiesAlphabetically(cities) {
  if (cities.length === 0) return [];
  if (Array.isArray(cities[0]))
    return [
      ...listCitiesAlphabetically(cities[0]),
      ...listCitiesAlphabetically(cities.slice(1)),
    ].sort();
  return [cities[0], ...listCitiesAlphabetically(cities.slice(1))].sort();
}

console.log(
  listCitiesAlphabetically([
    ["Paris", "London"],
    ["Rome", "Florence"],
    ["New York"],
  ])
); // Output: ['Florence', 'London', 'New York', 'Paris', 'Rome']

// 8. Find Most Expensive Trip
function findMostExpensiveTrip(trips) {
  if (trips.length === 1) return Math.max(...trips[0]);
  const maxRest = findMostExpensiveTrip(trips.slice(1));
  return Math.max(Math.max(...trips[0]), maxRest);
}

console.log(findMostExpensiveTrip([[500, 300], [800, 200], [1000]])); // Output: 1000

// 9. Track Flight Transfers
function countTransfers(flights) {
  if (flights === null) return 0;
  for (let key in flights) {
    if (typeof flights[key] === "object") {
      return 1 + countTransfers(flights[key]);
    }
  }
  return 0;
}

console.log(
  countTransfers({
    flight1: {
      transfer: "London",
      flight2: { transfer: "New York", flight3: null },
    },
  })
); // Output: 2

// 10. Flatten City List
function flattenCityList(cities) {
  if (cities.length === 0) return [];
  if (Array.isArray(cities[0]))
    return [...flattenCityList(cities[0]), ...flattenCityList(cities.slice(1))];
  return [cities[0], ...flattenCityList(cities.slice(1))];
}

console.log(
  flattenCityList([["Paris"], ["Rome", ["Florence", "Venice"]], ["New York"]])
); // Output: ['Paris', 'Rome', 'Florence', 'Venice', 'New York']

// 11. Total Accommodation Cost
function totalAccommodationCost(trips) {
  if (trips.length === 0) return 0;
  return trips[0].hotel + totalAccommodationCost(trips.slice(1));
}

console.log(
  totalAccommodationCost([
    { hotel: 200, food: 100 },
    { hotel: 300, food: 150 },
    { hotel: 250, food: 120 },
  ])
); // Output: 1120

// 12. Find Longest City Name
function findLongestCityName(cities) {
  if (cities.length === 0) return "";
  if (Array.isArray(cities[0]))
    return findLongestCityName(cities[0].concat(cities.slice(1)));
  const rest = findLongestCityName(cities.slice(1));
  return cities[0].length > rest.length ? cities[0] : rest;
}

console.log(
  findLongestCityName([
    ["Paris", "Los Angeles"],
    ["New York", "Florence"],
  ])
); // Output: 'Los Angeles'
