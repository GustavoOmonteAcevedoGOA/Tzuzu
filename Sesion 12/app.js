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
const jefe = new Character("Tzuzul", 5000, 50);

main.attack(jefe);
jefe.attack(main);


mainAttack.onclick = function(){
    mainAttack.classList.toggle("active");
    main.attack(jefe);
    jefemainth.innerText = jefe.health;
}
jefeAttack.onclick = function(){
    jefeAttack.classList.toggle("active");
    jefe.attack(main);
    mainHealth.innerText = main.health;
}