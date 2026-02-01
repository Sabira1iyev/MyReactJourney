import "./App.css";
import searchImages from "./api";
import "./App.css";
import SearchHeader from "./SearchHeader";
import { useState } from "react";
import ImageList from "./ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images}/>
    </>
  );
}

export default App;
