import { postListOfPlcases } from "../../services/placesToBeService";

export const EditOrCreatePlace = () => {
  const saveChanges = async () => {
    const response = await postListOfPlcases({ foo: "too" });
    console.log(
      "🚀 ~ file: EditOrCreatePlace.js ~ line 6 ~ saveChanges ~ response",
      response
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="city">City:</label>
        <input id="city" className="border-2"></input>
      </div>
      <div>
        <label htmlFor="province">Province:</label>
        <input id="province" className="border-2"></input>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input id="country" className="border-2"></input>
      </div>
      <div>
        <button className="button" onClick={saveChanges}>
          Save
        </button>
      </div>
    </div>
  );
};
