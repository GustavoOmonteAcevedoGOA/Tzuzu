class Character{
    constructor(name, health, attackPower){
        this.name=name;
        this.health=health;
        this.attackPower=attackPower;
    }
    getHealth(){
        return this.health;
    }
    setHealth(health){
        this.health=health;
    }
    attack(object){
        object.setHealth(object.getHealth() - this.attackPower);
        console.log(`${this.name} ha atacado a ${object.name} y le ha quitado ${this.attackPower} de vida`);        
    }
}

const main = new Character("Facundo", 1000, 250);
const mainName = document.getElementById("main-name");
mainName.innerText = main.name;
const mainHealth = document.getElementById("main-health");
mainHealth.innerText = `vida: ${main.health}`;
const mainAttackPower = document.getElementById("main-attackPower");
mainAttackPower.innerText = `poder de ataque: ${main.attackPower}`;
// imagen boton
const mainAttack = document.getElementById("main-attack");



const jefe = new Character("Tzuzul", 5000, 50);
const jefeName = document.getElementById("jefe-name");
jefeName.innerText =jefe.name;
const jefeHealth = document.getElementById("jefe-health");
jefeHealth.innerText = `vida: ${jefe.health}`;
const jefeAttackPower = document.getElementById("jefe-attackPower");
jefeAttackPower.innerText = `poder de ataque: ${jefe.attackPower}`;
const jefeAttack = document.getElementById("jefe-attack");


mainAttack.onclick = function(){
    main.attack(jefe);
    jefeHealth.innerText = `vida: ${jefe.health}`;
}
jefeAttack.onclick = function(){
    jefe.attack(main);
    mainHealth.innerText = `vida: ${main.health}`;
}