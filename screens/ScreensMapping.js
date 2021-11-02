import { CreateScreen } from "./CreateScreent";
import { getPeopleFromPage, getPlanets } from "../services/swapi";

export const ScreensMapping = {
  People: CreateScreen(getPeopleFromPage, "Список персонажей"),
  Planets: CreateScreen(getPlanets, "Список планет"),
};
