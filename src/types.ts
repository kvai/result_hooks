export type ResultType = Character[] | Episode[] | Location[];

export interface DataType {
    dataType: 'characters' | 'locations' | 'episodes';
  }
  
  interface BaseCard {
    id: number
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