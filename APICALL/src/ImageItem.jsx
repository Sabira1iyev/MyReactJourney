function ImageItem({ image }) {
  console.log(image);
  return (
    <>
      <img
        className="imageListImg"
        src={image.urls.small}
        alt={image.urls.alt_description}
      />
    </>
  );
}

export default ImageItem;
