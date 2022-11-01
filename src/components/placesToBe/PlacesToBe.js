import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListOfPlacesToBe } from "../../services/placesToBeService";
import { PlacesGrid } from "../placesGrid/PlacesGrid";

export const PlacesToBe = () => {
  const [placesToBeData, setPlacesToBeData] = useState([]);

  useEffect(() => {
    (async () => {
      const placesToBe = await getListOfPlacesToBe();
      setPlacesToBeData(placesToBe);
    })();
  }, []);

  return (
    <main>
      <button>
        <Link to="/create">Create</Link>
      </button>
      <PlacesGrid cardsData={placesToBeData}></PlacesGrid>
    </main>
  );
};
