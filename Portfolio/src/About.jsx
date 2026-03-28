import myImage from './assets/myImage.jpg'

function About() {
    return (
        <div className="w-full gap-5 flex flex-col justify-center items-center mt-10
        text-center gap-[30px]" id='about'>
            <div className="image-content wi-full flex justify-center items-center">
                <img src={myImage} className='w-[90%] rounded-[18px] shadow-[10px_5px_50px_#0c3ddd]' />
            </div>
            <div className="w-[90%] px-[5px] text-center">
                <p className="text-lg flex justify-center items-center font-bold text-[#002e85ff]">
                    Hi, I'm SABIR.
                    I'm a software engineering student focused on web development. I build modern and responsive web applications using HTML, CSS, JavaScript, and React.
                    I'm continuously improving my development skills and working on projects to strengthen my understanding of modern web technologies.
                </p>
            </div>
        </div>
    )
}

export default About