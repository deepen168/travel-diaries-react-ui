import { Card } from "../card/Card";

export const PlacesGrid = (prop) => {
  return (
    <div className="flex justify-center flex-wrap">
      {prop.cardsData.map((cardData) => {
        return <Card key={cardData.city} data={cardData}></Card>;
      })}
    </div>
  );
};
