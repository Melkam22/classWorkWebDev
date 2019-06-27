
function Pokemon(name, health, magic) {

    //pokemon name
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];

    //learn an attack skill

    //save our attack skill to our skills array
    this.learnAttackSkill = function (attack) {
        this.skills.push(attack);

        // console.log(this.skills);
    }
    this.showStatus = function () {
        console.log(`status: name: ${this.name}, health: ${this.health}, magic: ${this.magic}`);
    }
    this.attack = function (attackIndex, enemy) {

        //self dead
        if (this.health <= 0) {
            console.log(`${this.name} is dead...whoops!`);
            return;
        }
        // enemy dead 
        if (enemy.health <= 0) {
            console.log(`${enemy.name} is already dead!`)
            return;
        }
        // not enough magic
        else if (this.magic < this.skills[attackIndex].magic) {
            console.log("Not enough magic, cannot attack. too bad");
            return;
        }
        // damage greater than enemy health (kills our enemy)

        else if (this.skills[attackIndex].damage >= enemy.health) {
            console.log(`${this.name} just launched ${this.skills[attackIndex].attack} successfully. ${enemy.name} is killed`);
            enemy.health -= this.skills[attackIndex].damage;
            this.magic -= this.skills[attackIndex].magic;
            return;
        }
        // attack successful, but enemy didn't die
        else {
            console.log(`${this.name} just launched ${this.skills[attackIndex].attack} successfully. ${enemy.name} took ${this.skills[attackIndex].damage} damage`);
            enemy.health -= this.skills[attackIndex].damage;
            this.magic -= this.skills[attackIndex].magic;
            return;
        }
    }
    this.getMagic = function() {
        this.magic += 5;
        console.log(`${this.name} gained 5 magic. Total magic = ${this.magic}`);
    }
}

function AttackSkill(attack, damage, magic) {
    this.attack = attack;
    this.damage = damage;
    this.magic = magic;
}

let pikachu = new Pokemon("pikachu", 30, 50);
let bulbasaur = new Pokemon("bulbasaur", 40, 30);

let lightning = new AttackSkill("lightning", 10, 10);
let beatUp = new AttackSkill("beat up", 10, 15);

pikachu.showStatus();
bulbasaur.showStatus();

console.log(`--------------`);
pikachu.learnAttackSkill(lightning);

bulbasaur.learnAttackSkill(beatUp);

pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);

pikachu.getMagic();

console.log(`--------------`);
bulbasaur.attack(0, pikachu);
bulbasaur.getMagic();

console.log(`-----------------`);
pikachu.showStatus();
bulbasaur.showStatus();