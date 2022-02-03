// basic app types
export interface Performance {
    value: number;
    event: string;
    location: string;
    position: string;
    date: number;
}

export interface Ranking {
    event: string;
    rank: number;
}

// app state types
export interface IAthleticsState {
    performances: Performance[];
    rankings: Ranking[];
}
