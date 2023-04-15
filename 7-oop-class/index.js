class Character {
    constructor(name, lang, race) {
        this.name = name;
        this.race = race;
        this.lang = lang;
    }

    log() {
        console.log(`${this.lang}, ${this.race} `);
    }
}

class Ork extends Character {
    constructor(name, lang, race) {
        super(name, lang, race);
        this.weapon = [];
    }
    addWeapon(weapon) {
        this.weapon.push(weapon);
    }
}
class Elf extends Character {
    constructor(name, lang, race) {
        super(name, lang, race);
        this.spell = [];
    }
    createSpell(spell) {
        this.spell.push(spell);
    }
}

const ork1 = new Ork('Semen', 'org\'s tongue', 'ork');
ork1.addWeapon('axe');
ork1.log();


const elf1 = new Elf('Nemes', 'elf\'s tongue', 'elf');
elf1.createSpell('hello');
elf1.log();