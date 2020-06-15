export interface IRouting {
  name: string;
  link: string;
}

export interface ISelectedGame {
  id: number;
  date: string;
  type: string;
  typeImg: string;
  country: string;
  countryImg: string;
  league: string;
  game: string;
}

export interface IGameStats {
  yellow_cards: number;
  red_cards: number;
  penalties: number;
  goals: number;
  corners: number;
}