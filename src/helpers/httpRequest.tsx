import charactersData from "../../data/characters.json";
import episodesData from "../../data/episode.json";
import locationsData from "../../data/location.json";

const delay = 1000;

export const getData = async (filePath: string) => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  switch (filePath) {
    case "characters":
      return charactersData;
    case "episodes":
      return episodesData;
    case "locations":
      return locationsData;
    default:
      throw new Error(`Unknown file path: ${filePath}`);
  }
};
