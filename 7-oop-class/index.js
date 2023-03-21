class Character {
    constructor(name, lang, race) {
        this.name = name;
        this.race = race;
        this.lang = lang;
    }

    sayHi() {
        console.log(`${this.lang}, ${this.race} `)
    }
}

class Ork extends Character {
    constructor(name, lang, race) {
        super(name, lang, race)
        this.weapon = [];
    }
    addWeapon(weapon) {
        this.weapon.push(weapon)
    }
}
class Elf extends Character {
    constructor(name, lang, race) {
        super(name, lang, race);
        this.spell = [];
    }
    createSpell(spell) {
        this.spell.push(spell)
    }
}

const ork1 = new Ork('Semen', 'org\'s tongue', 'ork', 'axe');
console.log(ork1)

const elf1 = new Elf('Nemes', 'elf\'s tongue', 'elf');
console.log(elf1)