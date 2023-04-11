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