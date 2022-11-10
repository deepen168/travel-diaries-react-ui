const HOST = "http://localhost:3000";

export const getListOfPlacesToBe = async () => {
  let fetchedTravel = await fetch(`${HOST}/getPlacesToBe`);
  let response = await fetchedTravel.json();
  return response;
};

export const postListOfPlaces = async (body) => {
  const formData = new FormData();

  for (let [key, value] of Object.entries(body)) {
    formData.append(key, value);
  }

  let response = await fetch(`${HOST}/saveNewPlace`, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });

  if (response.ok) {
    let listOfPlaces = await response.json();
    return listOfPlaces;
  } else {
    throw new Error(`Request failed with status code ${response.status}`);
  }
};
