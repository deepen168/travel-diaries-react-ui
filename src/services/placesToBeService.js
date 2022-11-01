const HOST = "http://localhost:3000";

export const getListOfPlacesToBe = async () => {
  let fetchedTravel = await fetch(`${HOST}/getPlacesToBe`);
  let response = await fetchedTravel.json();
  return response;
};

export const postListOfPlcases = async (body) => {
  let postListOfPlaces = await fetch(`${HOST}/saveNewPlace`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  let response = await postListOfPlaces.json();
  return response;
};
