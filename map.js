function distanceY(lat1, lat2){
    return -1 * (69.05546608 * (lat2 - lat1))
}

function distanceX(lat1, lat2, long1, long2){
    return -1 * (69.1710411 * Math.cos((lat1 + lat2)/2 * Math.PI/180) * (long2 - long1))
}

function distance(place1, place2){
    return [
        distanceX(place1[0], place2[0], place1[1], place2[1]),
        distanceY(place1[0], place2[0])
    ]
}

function map(places, origin){
    const mapped = []

    for(place in places) {
        mapped.push({[place]: distance(places[place], origin)})
    }

    return mapped
}

const {
    Mansfield,
    Gastonia,
    Springs,
    Kenosha,
    Thermopolis,
    Oxnard
} = require('./constants')

console.log('Distances from Big Spring (miles):\n')
console.log(map({ Mansfield, Gastonia, Kenosha, Thermopolis, Oxnard }, Springs))

const testDistance = distance([40.6447058779225, -73.7796284018022], [37.619311540522745, -122.38161080380019])
console.log('Distance test: ', Math.sqrt(testDistance[0]**2 + testDistance[1]**2))

module.exports = map