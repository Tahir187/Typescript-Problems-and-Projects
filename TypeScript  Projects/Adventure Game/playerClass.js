class Player {
    playerName;
    health = 100;
    constructor(name) {
        this.playerName = name;
    }
    healthDecrease() {
        let health = this.health - Math.floor(Math.random() * 100 - 1);
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class Opponent {
    opponentName;
    health = 100;
    constructor(name) {
        this.opponentName = name;
    }
    healthDecrease() {
        let health = this.health - Math.floor(Math.random() * 100 - 1);
        this.health = health;
    }
}
export { Player, Opponent };
