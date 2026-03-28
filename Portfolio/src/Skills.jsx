import jsImage from './assets/js.png';
import reactImage from './assets/react.png';
import tailwindImage from './assets/tailwind.png';
import typescriptImage from './assets/typescript.png'
import nodejsImage from './assets/nodejs.png';

function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-stretch gap-[50px] mt-20" id='skills'>
      <div className="w-full flex justify-center items-center gap-2">
        <p className='text-xl font-bold'>Here are some technologies I use</p>
        <i className="ri-arrow-down-long-line text-xl font-bold"></i>
      </div>
      <div className="w-full px-5 flex flex-col gap-10 justify-center items-center">

        <div className=" flex flex-row justify-center items-center w-full h-[100px]
        border-2 border-yellow-300 rounded-xl gap-2 px-2 text-lg">
          <p className='font-bold text-yellow-300'>JavaScript - Build interactive web apps using modern ES6+ features.</p>
          <div className="js-image">
            <img src={jsImage} alt="" className='w-20' />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full h-[100px]
        border-2 border-[#0d89c2] rounded-xl gap-2 px-2 text-lg">
          <p className='font-bold text-[#0d89c2]'> Create component-based UIs and manage state effectively.</p>
          <div className="react-image">
            <img src={reactImage} alt="" className='w-20' />
          </div>
        </div>


        <div className="flex flex-row justify-center items-center w-full h-[100px]
        border-2 border-[#4bb6b9] rounded-xl gap-2 px-2 text-lg">
          <p className='font-bold text-[#4bb6b9]'>Rapidly design responsive layouts with utility-first classes.</p>
          <div className="tailwind-image">
            <img src={tailwindImage} alt="" className='w-20' />
          </div>
        </div>


        <div className="flex flex-row justify-center items-center w-full h-[100px]
        border-2 border-[#5bb5ff] rounded-xl gap-2 px-2 text-lg">
          <p className='text-[#5bb5ff] font-bold'> Add strong typing and improve code quality in JS projects.</p>
          <div className="typescript-image">
            <img src={typescriptImage} alt="" className='w-20' />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full h-[100px]
        border-2 border-[#006816af] rounded-xl gap-1 px-2 text-lg">
          <p className='node text-[#006816af] font-bold'> Build backend applications and APIs with JavaScript.</p>
          <div className="nodejs-image">
            <img src={nodejsImage} alt="" className='w-20' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
