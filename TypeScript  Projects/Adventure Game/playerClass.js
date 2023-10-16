class Player {
    playerName;
    health = 100;
    constructor(name) {
        this.playerName = name;
    }
}
class Opponent {
    opponentName;
    health = 100;
    constructor(name) {
        this.opponentName = name;
    }
}
export { Player, Opponent };
