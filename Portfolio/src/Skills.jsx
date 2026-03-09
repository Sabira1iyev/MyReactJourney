import cppImage from './assets/c-.png'


function Skills() {
  return (
    <div className="skills-container h-screen bg-red-500 flex flex-col justify-center items-center">
      <div className="skills-title">
        <p>Here are some technologies I use</p>
      </div>
      <div className="content-container">
        <div className="content-1">
            <p></p>
            <div className="cpp-image">
                <img src= {cppImage} alt="" className='w-20' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
