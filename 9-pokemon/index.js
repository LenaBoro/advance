'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const xhrPokemon = new XMLHttpRequest();
xhrPokemon.open('GET', url);
xhrPokemon.onload = function () {
    if (xhrPokemon.status !== 202 && xhrPokemon.status > 300) {
        xhrPokemon.onerror();
    }
    const pokemon = JSON.parse(xhrPokemon.response);
    const abilityUrl = pokemon.abilities[0].ability.url;
    const xhrPokemonAbility = new XMLHttpRequest();
    xhrPokemonAbility.open('GET', abilityUrl);
    xhrPokemonAbility.onload = function () {
        if (xhrPokemonAbility.status !== 202 && xhrPokemonAbility.status > 300) {
            xhrPokemonAbility.onerror();
        }
        const effectEntries = JSON.parse(xhrPokemonAbility.response).effect_entries;
        for (const key of effectEntries) {
            if (key.language.name === 'en') {
                console.log(key.effect);
            }
        }
    }
    xhrPokemonAbility.onerror = function () {
        alert(`Ошибка соединения с ability`);
    };
    xhrPokemonAbility.send();
}

xhrPokemon.onerror = function () {
    alert(`Ошибка соединения c pokemon`);
};
xhrPokemon.send();

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

function makePromisifiedXhrRequest(url) {
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

let getPokemonEffects = makePromisifiedXhrRequest(url);

getPokemonEffects
    .then((response) => JSON.parse(response))
    .then((data) => {
        const abilityUrl = data.abilities[0].ability.url;
        return makePromisifiedXhrRequest(abilityUrl);
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
