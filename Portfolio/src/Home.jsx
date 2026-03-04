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
      <div className="home-container">
        <div className="code-content">
          <pre>
            <code>
              {text}
            </code>
          </pre>
        </div>
        <div className="home-content">
          <div className="name-container">
            <h2 className="my-name">
              HI, <span>SABIR</span> IS HERE
            </h2>
          </div>

          <p>
            Software Engineer focused on secure and scalable systems.
            Passionate about clean code and continuous learning.
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
