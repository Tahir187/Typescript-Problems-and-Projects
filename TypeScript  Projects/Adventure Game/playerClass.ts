class Player {
    playerName: string;
    health : number = 100;

    constructor(name: string) {
        this.playerName = name;
    }
}

class Opponent {
    opponentName: string;
    health: number = 100;
    
    constructor(name: string){
        this.opponentName = name;
    }
}

export {Player, Opponent};