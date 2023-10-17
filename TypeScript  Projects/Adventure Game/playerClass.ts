class Player {
    playerName: string;
    health : number = 100;

    constructor(name: string) {
        this.playerName = name;
    }

    healthDecrease(){
        let health = this.health - Math.floor(Math.random() * 100 -1);
        this.health = health;
    }

    healthIncrease(){
        this.health = 100;
    }
}

class Opponent {
    opponentName: string;
    health: number = 100;
    
    constructor(name: string){
        this.opponentName = name;
    }
    healthDecrease(){
        let health = this.health - Math.floor(Math.random() * 100 -1);
        this.health = health;
    }
}

export {Player, Opponent};