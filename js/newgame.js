
export class NewGame {
    constructor(){
        this.globalCounter = [0, 0];
        this.turnCounter = [0, 0];
        this.player = 0;
        this.dice = null;
    }

    get diceValue() {
        return this.dice;
    }

    set diceValue() {
        this.dice = Math.floor(Math.random() * 6) + 1;
    }

    get turnCounterArray() {
        return this.turnCounter;
    }

    set turnCounterArray(player, diceValue) {
        if(diceValue == 1){
            this.turnCounter[player] = 0;
            this.player = +!player;
            break;
        }
       
        this.turnCounter[player] += diceValue;
    }
}