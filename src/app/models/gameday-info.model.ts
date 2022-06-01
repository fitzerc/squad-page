export class GameDayInfo {
    id: string;
    gameDate: Date;
    gameLocation: string;
    homeSquadId: string;
    awaySquadId: string;
    gameStatus: string;
    gameType: string;
}

export class GameDayDetails extends GameDayInfo {
    result: MatchResultInfo;
}

export class MatchResultInfo
{
    gameResults: GameResultInfo[] = [];
    gamesWon: number;
    gamesLost: number;
    result: string;

    readonly winString = "Win";
    readonly lossString = "Loss";
    readonly drawString = "Draw";
}

export class GameResultInfo
{
    won: boolean;
    ourScore: number;
    theirScore: number;
}