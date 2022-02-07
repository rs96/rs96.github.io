// basic app types
export interface Performance {
  value: number;
  event: string;
  location: string;
  position: number;
  date: number;
}

export interface Ranking {
  event: string;
  rank: {
    uk: number;
    european?: number;
    world?: number;
  };
}

// export type MeasuredEvent = "Hammer" | "High Jump" | "Long Jump" | "";

// app state types
export interface IAthleticsState {
  performances: Performance[];
  rankings: Ranking[];
}
