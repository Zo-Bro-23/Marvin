function lat(distanceY, lat2){
    return lat2 - (-1 * (distanceY) / 69.05546608)
}

function long(distanceX, lat1, lat2, long2){
    return long2 - (-1 * distanceX / (69.1710411 * Math.cos((lat1 + lat2)/2 * Math.PI/180)))
}

function coord(distance, place2){
    return [
        lat(distance[1], place2[0]),
        long(distance[0], lat(distance[1], place2[0]), place2[0], place2[1])
    ]
}

const {
    Mansfield,
    Gastonia,
    Springs,
    Kenosha,
    Thermopolis,
    Oxnard
} = require('./constants')

console.log(`Ideal (4): `, coord([1148.96879215,260.48544407], Springs))
console.log(`\nIdeal (6): `, coord([458.044693727,480.526234594], Springs))

module.exports = coord