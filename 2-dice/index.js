'use strict';

const d4 = [1, 4];
const d6 = [1, 6];
const d8 = [1, 8];
const d10 = [1, 10];
const d12 = [1, 12];
const d16 = [1, 16];
const d20 = [1, 20];

function rollDice(typeDice) {
    const [min, max] = typeDice;
    return Math.floor(Math.random() * ((max - min) + 1) + min);
}