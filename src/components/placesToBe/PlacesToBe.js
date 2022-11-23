import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlacesToBeContext } from "../../contexts/PlacesContext";
import { getListOfPlacesToBe } from "../../services/placesToBeService";
import { PlacesGrid } from "../placesGrid/PlacesGrid";

export const PlacesToBe = () => {
  const { placesToBeData, setPlacesToBeData } = useContext(PlacesToBeContext);
  const [show, setshow] = useState(true);

  useEffect(() => {
    (async () => {
      const placesToBe = await getListOfPlacesToBe();
      setPlacesToBeData(placesToBe);
    })();
  }, []);

  const toggle = () => {
    setshow(!show);
  };
  return (
    <main>
      <button>
        <Link to="/create">Create</Link>
      </button>
      <PlacesGrid cardsData={placesToBeData}></PlacesGrid>
      <button onClick={toggle}>Click to Toggle</button>
    </main>
  );
};
