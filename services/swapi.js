const baseUrl = "https://swapi.dev/api";
const resources = {
  films: `${baseUrl}/films`,
  people: `${baseUrl}/people`,
  planets: `${baseUrl}/planets`,
  species: `${baseUrl}/species`,
  starships: `${baseUrl}/starships`,
  vehicles: `${baseUrl}/vehicles`,
};

export const getPeopleFromPage = async (page) => {
  const queryParams = page ? `?page=${page}` : "";
  const requestUrl = `${resources.people}/${queryParams}`;
  const response = await fetch(requestUrl);
  const json = await response.json();

  return json;
};

export const getPeopleById = async (id = 1) => {
  const requestUrl = `${resources.people}/${id}`;
  const response = await fetch(requestUrl);
  const json = await response.json();

  return json;
};

export const getAllPeople = async (updateHandler) => {
  const { results, count } = await getPeopleFromPage(1);
  const loop = async (id) => {
    if (id >= count) {
      return;
    }

    results.push(await getPeopleById(id));
    updateHandler(results);
    loop(id + 1);
  };
  loop(results.length + 1);
};

export const getPlanets = async () => Promise.resolve({ results: [] });
