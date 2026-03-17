import { useEffect, useState } from "react";


function Home({ codeContent }) {

  const [text, setText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(codeContent.slice(0, index));
      index++;
      if (index > codeContent.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [codeContent])

  return (
    <>
      <div className="w-full mt-[50px] flex justify-center items-center
      flex-col p-5 gap-[50px]">
        <div className="flex items-center justify-center bg-transparent rounded-[18px]
        px-5 border border-[#81818175] shadow-[10px_5px_50px_#0c3ddd]">
          <pre className="w-full overflow-x-auto text-sm">
            <code className="whitespace-pre-wrap break-all">
              {text}
            </code>
          </pre>
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center
        text-center text-lg leading-[35px] font-bold">
          <div className="name-container">
            <h2 className="text-2xl">
              HI, <span className="text-blue-500">SABIR</span> IS HERE
            </h2>
          </div>

          <p>
            Software Engineer focused on secure and scalable systems.
            Passionate about clean code and continuous learning.
          </p>
        </div>
        <button
          className="sayHi-button bg-blue-600 text-white rounded-full w-40 h-12 flex justify-center items-center"
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
