export class TennisMatchModel {
    leftPlayer: string;
    rightPlayer: string;
    leftScore: number = 0;
    rightScore: number = 0;
    event: string = 'Тренировка';

    constructor(leftPlayer: string,
        leftScore: number,
        rightPlayer: string,
        rightScore: number) {
        this.leftPlayer = leftPlayer;
        this.leftScore = leftScore;
        this.rightPlayer = rightPlayer;
        this.rightScore = rightScore;
    }
}

export class PlayerInfo {
    name: string;
    shortWinScore: number = 0;
    shortLoseScore: number = 0;
    longWinScore: number = 0;
    longLoseScore: number = 0;

    constructor(name: string,
        shortWinScore: number,
        shortLoseScore: number,
        longWinScore: number,
        longLoseScore: number) {
        this.name = name;
        this.shortWinScore = shortWinScore;
        this.shortLoseScore = shortLoseScore;
        this.longWinScore = longWinScore;
        this.longLoseScore = longLoseScore;
    }

    getEffectiveCoefShort() : number {
        return this.shortWinScore / this.shortLoseScore
    }
}