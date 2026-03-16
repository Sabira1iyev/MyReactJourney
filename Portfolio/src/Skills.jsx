import jsImage from './assets/js.png';
import reactImage from './assets/react.png';
import tailwindImage from './assets/tailwind.png';
import typescriptImage from './assets/typescript.png'
import nodejsImage from './assets/nodejs.png';

function Skills() {
  return (
    <div className="skills-container h-screen flex flex-col">
      <div className="skills-title">
        <p>Here are some technologies I use</p>
      </div>
      <div className="content-container flex flex-col gap-10">

        <div className="content-1 flex flex-row justify-center items-center">
          <p>JavaScript - Build interactive web apps using modern ES6+ features.</p>
          <div className="js-image">
            <img src={jsImage} alt="" className='w-20' />
          </div>
        </div>

        <div className="content-2 flex flex-row justify-center items-center">
          <p> Create component-based UIs and manage state effectively.</p>
          <div className="react-image">
            <img src={reactImage} alt="" className='w-20' />
          </div>
        </div>


        <div className="content-3 flex flex-row justify-center items-center">
          <p>Rapidly design responsive layouts with utility-first classes.</p>
          <div className="tailwind-image">
            <img src={tailwindImage} alt="" className='w-20' />
          </div>
        </div>


        <div className="content-4 flex flex-row justify-center items-center">
          <p> Add strong typing and improve code quality in JS projects.</p>
          <div className="typescript-image">
            <img src={typescriptImage} alt="" className='w-20' />
          </div>
        </div>

        <div className="content-5 flex flex-row justify-center items-center">
          <p> Build backend applications and APIs with JavaScript.</p>
          <div className="nodejs-image">
            <img src={nodejsImage} alt="" className='w-20' />
          </div>
        </div>




      </div>
    </div>
  );
}

export default Skills;
