import { useState } from "react";

const Widget2 = () => {
  const [toogleColor, setToggleColor] = useState(false);

  return (
    <div className="bg-sky-100 border border-sky-300 p-4 rounded-lg m-4 flex flex-col justify-center items-center">
      <button
        className={`px-4 py-2 text-white rounded-full cursor-pointer ${toogleColor ? "bg-orange-500" : "bg-blue-500"}`}
      onClick={() => setToggleColor(!toogleColor)}>
        Click me
      </button>
    </div>
  );
};

export default Widget2;
