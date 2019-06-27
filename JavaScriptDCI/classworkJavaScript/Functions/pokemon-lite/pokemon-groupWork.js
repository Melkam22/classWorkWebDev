/* learnedSkill = [
    [Pikachu, lightning],
    [Pikachu, poisonSeed],
    [Bulbasaur, poisonSeed]
] */




let learnedSkill = [];


class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
    }

    learnAttackSkill(AttackSkill) {


        this.skill = AttackSkill;
        console.log("====", AttackSkill.nameOfAttack);


        learnedSkill.push("Pikachu", AttackSkill.nameOfAttack);

    }
}



class AttackSkill {
    constructor(nameOfAttack, amountOfDamage, requiredMagic) {
        this.nameOfAttack = nameOfAttack;
        this.amountOfDamage = amountOfDamage;
        this.requiredMagic = requiredMagic;
    }
}

// create pokemons
let Pikachu = new Pokemon("Pikachu", 100, 100)
console.log(Pikachu);
let Bulbasaur = new Pokemon("Bulbasaur", 100, 100)
console.log(Bulbasaur);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("Poison Seed", 80, 60);

// learn skills
Pikachu.learnAttackSkill(lightning);
Pikachu.learnAttackSkill(poisonSeed);



console.log(learnedSkill);
