/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.8 + 32;

    let answer = [kelvin, fahrenheit];
    return answer;
};

console.log(convertTemperature(36.5)[0],convertTemperature(36.5)[1]);