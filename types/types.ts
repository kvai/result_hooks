export interface DataType {
  dataType: "character" | "location" | "episode";
}

interface BaseCard {
  id: number;
  name: string;
  created: string;
}

interface CharactersCard extends BaseCard {
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface EpisodesCard extends BaseCard {
  air_date: string;
  episode: string;
}

interface LocationCard extends BaseCard {
  type: string;
  dimension: string;
}

export type Card = CharactersCard | EpisodesCard | LocationCard;

export interface ApiResponse {
  isLoading: boolean;
}

export interface ItemsData {
  created: string;
  episode: string[];
  gender: "Male" | "Female";
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: "Alive" | "Dead";
  type: string | "";
  url: string;
}
