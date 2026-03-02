import myImage from "./assets/image.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="image-content">
          <img src={myImage} alt="" />
        </div>
        <div className="home-content">
          <h2 className="my-name">
            HI, <span>SABIR</span> IS HERE
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            possimus animi laborum? Esse dolores excepturi labore animi sed
            minima cupiditate.
          </p>
        </div>
        <button
          className="bg-blue-600 text-white rounded-full w-40 h-12 flex justify-center items-center"
          onClick={() => {
            window.location.href = "mailto:s.aliyev2005@gmail.com";
          }}
        >
          SAY HI
        </button>
      </div>
    </>
  );
}

export default Home;
