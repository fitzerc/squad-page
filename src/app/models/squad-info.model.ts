export class SquadInfo {
    name: string = "Squad Page";
    id: string = "0";
    number: number = 0;
    record: SquadRecord = new SquadRecord(0, 0, 0);
}

export class SquadRecord {
    wins: number = 0;
    losses: number = 0;
    draws: number = 0;

    constructor(wins: number, losses: number, draws: number) {
        this.wins = wins;
        this.losses = losses;
        this.draws = draws;
    }

    AddRecord(recToBeAdded: SquadRecord): void
    {
        this.wins += recToBeAdded.wins;
        this.losses += recToBeAdded.losses;
        this.draws += recToBeAdded.draws;
    }
}