'use strict';

/* map swap key value*/
let weatherMap = new Map([
    ['London', 10],
    ['Paris', 7],
    ['Milan', 2]
]);

let arrayWeatherMap = [...weatherMap].map((weather) => weather.reverse());
weatherMap = new Map([...arrayWeatherMap]);