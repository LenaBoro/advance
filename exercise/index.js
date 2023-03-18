'use strict';

/* map swap key value*/
let weatherMap = new Map([
    ['London', 10],
    ['Paris', 7],
    ['Milan', 2]
]);

let arrayWeatherMap = [...weatherMap].map((weather) => weather.reverse());
weatherMap = new Map([...arrayWeatherMap]);

/* 4 step */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (((max - min) + 1) + min));
}

function convert(sum, currentCurrency, convertToCurrency) {
    const currencies = [
        { name: 'USD', mult: 1 },
        { name: 'RUB', mult: 1 / 70 },
        { name: 'EUR', mult: 1.1 }
    ];

    const initialState = currencies.find(c => c.name === currencies.find(c => c.name === currentCurrency));
    if (!initialState) { return null; }

    const convert = currencies.find(c => c.name === currencies.find(c => c.name === convertToCurrency))
    if (!convert) { return null; }

    const options = {
        style: 'currency',
        currency: convertToCurrency
    }
    return new Intl.NumberFormat('ru-Ru', options).format(sum * currencies.mult / convert.mult);
}
/* 5 step */

const user = {
    name: 'Vasya',
    birthday: '02/15/2023',
}

function isBirthday(user) {
    const birthdayUser = new Date(user.birthday);
    const currentDay = new Date();
    if (birthdayUser.getMonth() !== currentDay.getMonth()) {
        return false;
    }
    if (birthdayUser.getDate() !== currentDay.getDate()) {
        return false;
    }
    return true;
}

/* 6 step */
function pizzaTimer(time) {
    const finish = new Date.getTime() + time;
    const correctionEventLoop = 100;

    //setInterval
    const interval = setInterval(() => {
        console.log(
            new Intl.DateTimeFormat('ru-RU', {
                minutes: 'numeric',
                seconds: 'numeric',
            }).format(finish + correctionEventLoop - new Date())
        )
    }, 1000)

    //setTimeout
    setTimeout(() => {
        clearInterval(interval);
        console.log('ready')
    }, time);
}
pizzaTimer(5000);


/* 7 step */
const Product = function (obj) {
    const [id, name, count] = obj;
    this.id = id;
    this.name = name;
    this.count = count;
};

const Box = function () {
    this.arrayProducts = [];
}

Box.prototype.addProduct = function (obj) {
    if (this.arrayProducts.find(product => {
        if (product.is === obj.id) { return; }
    }))
        this.arrayProducts.push(obj);
}

Box.prototype.increaseProduct = function (id) {
    this.arrayProducts.map(product => {
        if (product.id === id) {
            count += 1;
            return product
        }
        return product;
    }).filter(product => product.count > 0)
}

Box.prototype.decreaseProduct = function (id) {
    this.arrayProducts.map(product => {
        if (product.id === id) {
            count += 1;
            return product
        }
        return product;
    }).filter(product => product.count > 0)
}

const box1 = new Box();
const product1 = new Product([1, 'Bread', 10]);
box1.addProduct(product1);
box1.increaseProduct(1);

