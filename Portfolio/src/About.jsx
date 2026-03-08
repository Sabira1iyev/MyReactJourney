import myImage from './assets/myImage.jpg'

function About() {
    return (
        <div className="about-container h-screen flex flex-col justify-center items-center">
            <div className="image-content">
                <img src={myImage} />
            </div>
            <div className="about-content flex flex-col justify-center items-center">
                <p className="text-lg flex justify-center items-center">
                    Hi, I'm SABIR.
                    I'm a software engineering student focused on web development. I build modern and responsive web applications using HTML, CSS, JavaScript, and React.
                    I'm continuously improving my development skills and working on projects to strengthen my understanding of modern web technologies.
                </p>
            </div>
        </div>
    )
}

export default About