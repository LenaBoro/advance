'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function fetchPokemon(url) {
    return (
        fetch(url)
            .then(response => response.json())
            .then(({ abilities }) => fetch(abilities[0].ability.url))
            .then(response => response.json())
            .then(data => {
                for (const key of data.effect_entries) {
                    if (key.language.name === 'en') {
                        return key.effect;
                    }
                }
            })
            .catch((error) => {
                throw new Error(error);
            })
    )
}


fetchPokemon(url)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));