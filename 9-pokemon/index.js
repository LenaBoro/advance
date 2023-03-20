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
        console.log(JSON.parse(xhrPokemonAbilityUrl.response));
    }
};



