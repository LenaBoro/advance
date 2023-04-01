// 'use strict';

// /* map swap key value*/
// let weatherMap = new Map([
//     ['London', 10],
//     ['Paris', 7],
//     ['Milan', 2]
// ]);

// let arrayWeatherMap = [...weatherMap].map((weather) => weather.reverse());
// weatherMap = new Map([...arrayWeatherMap]);

// /* 4 step */

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (((max - min) + 1) + min));
// }

// function convert(sum, currentCurrency, convertToCurrency) {
//     const currencies = [
//         { name: 'USD', mult: 1 },
//         { name: 'RUB', mult: 1 / 70 },
//         { name: 'EUR', mult: 1.1 }
//     ];

//     const initialState = currencies.find(c => c.name === currencies.find(c => c.name === currentCurrency));
//     if (!initialState) { return null; }

//     const convert = currencies.find(c => c.name === currencies.find(c => c.name === convertToCurrency))
//     if (!convert) { return null; }

//     const options = {
//         style: 'currency',
//         currency: convertToCurrency
//     }
//     return new Intl.NumberFormat('ru-Ru', options).format(sum * currencies.mult / convert.mult);
// }
// /* 5 step */

// const user = {
//     name: 'Vasya',
//     birthday: '02/15/2023',
// }

// function isBirthday(user) {
//     const birthdayUser = new Date(user.birthday);
//     const currentDay = new Date();
//     if (birthdayUser.getMonth() !== currentDay.getMonth()) {
//         return false;
//     }
//     if (birthdayUser.getDate() !== currentDay.getDate()) {
//         return false;
//     }
//     return true;
// }

// /* 6 step */
// function pizzaTimer(time) {
//     const finish = new Date.getTime() + time;
//     const correctionEventLoop = 100;

//     //setInterval
//     const interval = setInterval(() => {
//         console.log(
//             new Intl.DateTimeFormat('ru-RU', {
//                 minutes: 'numeric',
//                 seconds: 'numeric',
//             }).format(finish + correctionEventLoop - new Date())
//         )
//     }, 1000)

//     //setTimeout
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('ready')
//     }, time);
// }
// pizzaTimer(5000);


// /* 7 step */
// const Product = function (obj) {
//     const [id, name, count] = obj;
//     this.id = id;
//     this.name = name;
//     this.count = count;
// };

// const Box = function () {
//     this.arrayProducts = [];
// }

// Box.prototype.addProduct = function (obj) {
//     if (this.arrayProducts.find(product => {
//         if (product.is === obj.id) { return; }
//     }))
//         this.arrayProducts.push(obj);
// }

// Box.prototype.increaseProduct = function (id) {
//     this.arrayProducts.map(product => {
//         if (product.id === id) {
//             count += 1;
//             return product
//         }
//         return product;
//     }).filter(product => product.count > 0)
// }

// Box.prototype.decreaseProduct = function (id) {
//     this.arrayProducts.map(product => {
//         if (product.id === id) {
//             count += 1;
//             return product
//         }
//         return product;
//     }).filter(product => product.count > 0)
// }

// const box1 = new Box();
// const product1 = new Product([1, 'Bread', 10]);
// box1.addProduct(product1);
// box1.increaseProduct(1);


// /* 8 step */


// class User {
//     #login;
//     #_password;

//     constructor(login, password) {
//         this.#password = password;
//         this.#login = login;
//     }

//     get loginUser() {
//         return this.#login;
//     }

//     set #password(passw) {
//         return this.#_password = passw.split('').reverse().join('');
//     }

//     get #password() {
//         return this.#_password.split('').reverse().join('');
//     }

//     checkPass(pass) {
//         return this.#password === pass;
//     }
//     changePass(oldPass, newPass) {
//         if (!this.checkPass(oldPass)) {
//             return false;
//         }
//         this.#password = newPass;
//         return true;
//     }
// }
// const user1 = new User('login', '123');
// user1.changePass('123', '012');
// console.log(user1);

// /* 11 */

// const request = new XMLHttpRequest();
// request.open('GET', 'https://dummyjson.com/products');
// request.send();

// request.addEventListener('load', function () {

//     console.log(this.response)
//     const { products } = JSON.parse(this.response);
//     const result = products.reduce((acc, product) => {
//         return acc += product.price;
//     }, 0)
//     console.log(result / products.length);
// })

// // 12 


const url = 'https://dummyjson.com/products/categories';

function createSelect(data) {
    const el = document.querySelector('.select');
    el.innerHTML = `<select>
    ${data.map(dataEl => {
        return `<option value=${dataEl}>${dataEl}</option>`
    })}</select >`

}


const promise = fetch(url)
    .then((response) => response.json())
    .then(data => {
        createSelect(data);
    })
    .catch(error => console.error('error', error));


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
//pizzaTimer(5000);

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


/* 8 step */


class User {
    #login;
    #_password;

    constructor(login, password) {
        this.#password = password;
        this.#login = login;
    }

    get loginUser() {
        return this.#login;
    }

    set #password(passw) {
        return this.#_password = passw.split('').reverse().join('');
    }

    get #password() {
        return this.#_password.split('').reverse().join('');
    }

    checkPass(pass) {
        return this.#password === pass;
    }
    changePass(oldPass, newPass) {
        if (!this.checkPass(oldPass)) {
            return false;
        }
        this.#password = newPass;
        return true;
    }
}
const user1 = new User('login', '123');
user1.changePass('123', '012');
console.log(user1);


/* 11 */

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products');
request.send();

request.addEventListener('load', function () {

    console.log(this.response)
    const { products } = JSON.parse(this.response);
    const result = products.reduce((acc, product) => {
        return acc += product.price;
    }, 0)
    console.log(result / products.length);
})


/*--  14 step --*/
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })
}
async function getCurrLocationUser(position) {
    try {
        const myCoordinate = await getCurrLocationUser(position);
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-clients?latitude=${myCoordinate.coords.latitude}&longitude=${myCoordinate.coords.longitude}`)

        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);
    }
    catch {
        console.error(new Error('error'));
    }
}

//getCurrentPosition(options);
const textActivity = document.querySelector('.activity');

async function getActivity() {
    const result = await fetch('https://www.boredapi.com/api/activity');
    return result.json();
}


async function generatorActivity() {

    try {
        const activities = new Promise.all([
            getActivity(),
            getActivity(),
            getActivity()
        ])
        console.log(activities)
    } catch {
        console.error('error');
    }
}
