'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const xhrPokemon = new XMLHttpRequest();
xhrPokemon.open('GET', url);
xhrPokemon.send();
xhrPokemon.onload = function () {
    const pokemon = JSON.parse(xhrPokemon.response);
    const abilityUrl = pokemon.abilities[0].ability.url;
    const xhrPokemonAbilityUrl = new XMLHttpRequest();
    xhrPokemonAbilityUrl.open('GET', abilityUrl);
    xhrPokemonAbilityUrl.send();
    xhrPokemonAbilityUrl.onload = function () {
        const effectEntries = JSON.parse(xhrPokemonAbilityUrl.response).effect_entries;
        for (const key of effectEntries) {
            if (key.language.name === 'en') {
                console.log(key.effect);
            }
        }
    }
};



