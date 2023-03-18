'use strict';

const Character = function (obj) {
    const { name, lang, race } = obj;
    this.name = name;
    this.lang = lang;
    this.race = race;
};

Character.prototype.sayHi = function () {
    const { lang, name } = this;
    console.log(lang, name);
}

const Ork = function (obj) {
    Character.apply(this, arguments);
    const { weapon } = obj
    this.weapon = weapon;
}
Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;


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

const ork1 = new Ork({ name: 'Semen', lang: 'en', race: 'ork' });
const elf1 = new Ork({ name: 'Nemes', lang: 'elf\'s toungue', race: 'elf' });

ork1.sayHi();
elf1.sayHi();

elf1.createspell('give me food');