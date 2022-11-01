import { useEffect, useState } from "react";
import { getImage } from "../../services/image";

export const Card = (prop) => {
  const [img, setImg] = useState();
  const city = prop.data.city;
  const province = prop.data.province;
  const country = prop.data.country;

  useEffect(() => {
    (async () => {
      setImg(await getImage(city));
    })();
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
      <img
        className="w-full"
        src={img}
        alt={`${city} | ${province} | ${country}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {city} | {province} | {country}
        </div>
        <p className="text-gray-700 text-base">{prop.data.description}</p>
      </div>
    </div>
  );
};
