import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Ix5yq3rBTwtU1xiFuLULd08Hn6LwqEm4YkSHVFA1L-c",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
