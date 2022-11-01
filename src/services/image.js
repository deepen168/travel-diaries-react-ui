export const getImage = async (place) => {
  let imageBlob = await (
    await fetch(`http://localhost:3000/Image?image=${place}`)
  ).blob();

  let imageLocation = URL.createObjectURL(imageBlob);
  return imageLocation;
};
