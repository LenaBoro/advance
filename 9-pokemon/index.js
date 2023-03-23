'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const xhrPokemon = new XMLHttpRequest();
xhrPokemon.open('GET', url);
xhrPokemon.send();
xhrPokemon.onload = function () {
    const pokemon = JSON.parse(xhrPokemon.response);
    const abilityUrl = pokemon.abilities[0].ability.url;
    const xhrPokemonAbility = new XMLHttpRequest();
    xhrPokemonAbility.open('GET', abilityUrl);
    xhrPokemonAbility.send();
    xhrPokemonAbility.onload = function () {
        const effectEntries = JSON.parse(xhrPokemonAbility.response).effect_entries;
        for (const key of effectEntries) {
            if (key.language.name === 'en') {
                console.log(key.effect);
            }
        }
    }
    xhrPokemonAbility.onerror = function () {
        alert(`Ошибка соединения`);
    };
};

xhrPokemon.onerror = function () {
    alert(`Ошибка соединения`);
};

// promisify more readable code

function loadPokemon(url, cb) {
    const xhrRequest = new XMLHttpRequest();
    xhrRequest.open('GET', url);
    xhrRequest.onload = function () {
        cb(null, xhrRequest.response);
    }
    xhrRequest.onerror = function () {
        cb(new Error('Ошибка'));
    }
    xhrRequest.send();
}

function makePokemonRequest(url) {
    return new Promise(function (resolve, reject) {
        const xhrRequest = new XMLHttpRequest();
        xhrRequest.open('GET', url);
        xhrRequest.onload = function () {
            if (xhrRequest.status === 200 && xhrRequest.status < 300) {
                resolve(xhrRequest.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }
        }
        xhrRequest.onerror = function () {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        xhrRequest.send();
    })
}

makePokemonRequest(url)
    .then((response) => JSON.parse(response))
    .then((data) => {
        const abilityUrl = data.abilities[0].ability.url;
        return makePokemonRequest(abilityUrl);
    })
    .then(response => JSON.parse(response))
    .then((data) => {
        const effectEntries = data.effect_entries;
        for (const key of effectEntries) {
            if (key.language.name === 'en') {
                console.log(key.effect);
            }
        }
    })
    .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
    });
