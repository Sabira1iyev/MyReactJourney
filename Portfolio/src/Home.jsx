import { useEffect, useState } from "react";


function Home({ codeContent, aboutMe }) {

  const [text, setText] = useState("");
  const [nameLetter, setNameLetter] = useState("");


  useEffect(() => {
    let index = 0;
    let interval;

    interval = setInterval(() => {
      setText(codeContent.slice(0, index));
      index++;
      if (index > codeContent.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [codeContent])


  useEffect(() => {
    let letterIndex = 0;
    let isDeleting = false;
    let currentTimer;


    const type = () => {
      setNameLetter(aboutMe.slice(0, letterIndex));
      if (!isDeleting) {
        if (letterIndex < aboutMe.length) {
          letterIndex++;
          currentTimer = setTimeout(type, 80);
        }
        else {
          isDeleting = true;
          currentTimer = setTimeout(type, 1000);
        }
      }
      else {
        if (letterIndex > 0) {
          letterIndex--;
          currentTimer = setTimeout(type, 100);
        }
        else {
          isDeleting = false;
          currentTimer = setTimeout(type, 500);
        }
      }
    };

    currentTimer = setTimeout(type, 30);
    return () => clearTimeout(currentTimer);
  }, [aboutMe]);

  return (
    <div id="home">
      <div className="w-full mt-[50px] flex justify-center items-center
      flex-col p-3 gap-[50px]">
        <div className="flex items-center justify-center bg-transparent rounded-[18px]
        px-5 border border-[#81818175]" style={{
            background: "linear-gradient(#0f1535, #0f1535) padding-box, linear-gradient(135deg, #2d2fbd, #0a2a88) border-box",
            border: "1px solid transparent",
            borderRadius: "18px",
            boxShadow: "0px 0px 30px 5px #2d2fbd55"
          }}>
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
              {nameLetter}
              {/* HI, <span className="text-blue-500">SABIR</span> IS HERE */}
            </h2>
          </div>

          <p className="text-xl font-bold">
            Software Engineer focused on secure and scalable systems.
            Passionate about clean code and continuous learning.
          </p>
        </div>
        <button
          className="text-white rounded-full w-40 h-12 flex justify-center items-center font-bold text-xl
           hover:scale-110 transition-all duration-200 ease-in-out"
          style={{
            background: "linear-gradient(#0f1535, #002e85ff) padding-box, linear-gradient(135deg, #2d2fbd, #0a2a88) border-box",
            border: "1px solid transparent",
            borderRadius: "18px",
            boxShadow: "0px 0px 30px 5px #2d2fbd55"

          }}
          onClick={() => {
            window.location.href = "mailto:s.aliyev2005@gmail.com";
          }}
        >
          SAY HI
        </button>
      </div>
    </div>
  );
}

export default Home;
