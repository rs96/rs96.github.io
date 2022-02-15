// basic app types
export interface Ranking {
  event: string;
  rank: {
    uk: number;
    european?: number;
    world?: number;
  };
}

export interface Venue {
  id: string;
  name: string;
  isIndoor: boolean;
  isAtAltitude: boolean;
  isOversized: boolean;
}

export interface Meeting {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  name: string;
}

export interface Athlete {
  id: string;
  name: string;
  club: string;
  sex: string;
  ageGroup: string;
  county: string;
  region: string;
  nation: string;
}

export interface Performance {
  id: string;
  athleteId: string;
  eventId: string;
  performance: number;
  tags: string[];
  wind: number;
  position: number;
  heat: string;
  venueId: string;
  meetingId: string;
  date: number;
}

export interface AthleteData {
  athlete: Athlete;
  venues: Venue[];
  events: Event[];
  meetings: Meeting[];
  performances: Performance[];
}

// app state types
export interface IAthleticsState {
  performances: Performance[];
  rankings: Ranking[];
}

export interface IState {
  performances: Performance[];
  rankings: Ranking[];
  venues: Venue[];
  meetings: Meeting[];
  events: Event[];
}
