import { useState } from "react";
import { postListOfPlaces } from "../../services/placesToBeService";

export const EditOrCreatePlace = () => {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response =
      await postListOfPlaces({
        city: city,
        province: province,
        country: country,
        image: image,
      });
    } catch (err) {
      console.log(
        "🚀 ~ file: EditOrCreatePlace.js ~ line 18 ~ handleFormSubmit ~ err",
        err
      );
    }
  };

  const uploadPlaceImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            value={city}
            className="border-2"
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="province">Province:</label>
          <input
            id="province"
            value={province}
            className="border-2"
            onChange={(e) => setProvince(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            value={country}
            className="border-2"
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="placeImage">Image:</label>
          <input
            type="file"
            name="placeToBe"
            onChange={uploadPlaceImage}
          ></input>
        </div>
      </div>
      <div className="button">
        <button className="button">Save</button>
      </div>
    </form>
  );
};
