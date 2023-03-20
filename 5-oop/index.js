'use strict';

const Character = function ({ name, lang, race }) {
    this.name = name;
    this.lang = lang;
    this.race = race;
};

Character.prototype.sayHi = function () {
    const { lang, name } = this;
    console.log(lang, name);
}

/* ORK */

const Ork = function (obj) {
    Character.apply(this, arguments);
    const { weapon } = obj;
    this.weapon = weapon;
}
Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

/* ELF */
const Elf = function () {
    Character.apply(this, arguments);
    this.spell = [];
}
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function (stringSpell) {
    this.spell.push(stringSpell);
    console.log('new spell ' + stringSpell);
}

const ork1 = new Ork({ name: 'Semen', lang: 'ork\'s toungue', race: 'ork', weapon: 'axe' });
const elf1 = new Elf({ name: 'Nemes', lang: 'elf\'s toungue', race: 'elf' });

ork1.sayHi();
elf1.sayHi();
elf1.createSpell('give me food');