import React, { useRef } from 'react'
import './introduce.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import myPhoto from '../../assets/myphoto.png';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Introduce = () => {

    const main = useRef(null)
    const mainImage = useRef(null)
    const overlape = useRef(null)
    const myImage = useRef(null)

    useGSAP(() => {

        const textElements = main.current.querySelectorAll('.maskText');

        const split = new SplitText(textElements, {
            type: 'chars',
            charsClass: 'mastChar'
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: main.current,
                start: 'top top',
                end: 'bottom 20%',
                scrub: 1,
                pin: true,
            }
        });

        tl.to(mainImage.current, {
            transform: 'translate(0, -5%)',
            duration: 3,
            // ease: 'power.inOut'
        }).to(overlape.current, {
            top: '-50vh',
            // bottom: '0%',
            duration: 1.5,
            ease: 'power.inOut'
        }, '-=3').to(myImage.current, {
            transform: 'translate(0, 0%)',
            duration: 1.5,
            ease: 'power1.inOut'
        }, '-=3').from(split.chars, {
            yPercent: 50,
            opacity: 0,
            duration: 0.5,
            ease: 'expo.out',
            stagger: {
                each: 0.06,
                from: 'start'
            }
        }, '-=3')
    }, {})

    return (
        <div ref={main} className='main'>
            <img className='mainImage' ref={mainImage} src="https://i.pinimg.com/1200x/aa/58/72/aa58723a7ff5cdde69ec6960923038e5.jpg" alt="" />
            <div ref={overlape} className='overlape'>
                <div className="upper">
                    <div className="upperLeft">
                        <h1>MERN <span>STACK AND CREATIVE </span>DEVELOPER</h1>
                    </div>
                    <div className="upperRight">
                        <p>A MERN Stack and Generative AI Developer passionate about blending creativity with technology to build intuitive, interactive, and impactful web applications. I enjoy transforming ideas into elegant digital experiences through clean code, thoughtful design, and innovative AI-powered solutions. As a quick learner and collaborative team player, I’m always eager to explore new technologies, solve challenging problems, and continuously grow as a developer.</p>
                        <h1>ENDING IS JUST THE BEGINNING</h1>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottomLeft">
                        <div className="myImageBox">
                            <img ref={myImage} src={myPhoto} alt="" />
                        </div>
                    </div>
                    <div className="bottomRight">
                        <p>
                            My name is <span className='maskText'>Yugvendra Prajapat</span>, and I am from Mandsaur, Madhya Pradesh. I am 7th Sem student of Computer Science Engineering at <span className='maskText'>Sagar Institute of Research and Technology</span>, Bhopal. I am a passionate software developer and Computer Science Engineering student who enjoys transforming ideas into meaningful digital experiences. My expertise lies in full-stack web development using the MERN stack, along with a growing specialization in Artificial Intelligence, Generative AI, Retrieval-Augmented Generation (RAG), LangChain, and LangGraph. I have worked on projects such as an AI-powered Placement Readiness System that conducts mock interviews, evaluates candidate responses, and analyzes speaking confidence. I also have experience working with vector databases like Pinecone, integrating AI models, building backend systems, and exploring containerization and deployment using Docker and Kubernetes. Beyond functionality, I have a strong interest in creative web design, interactive user interfaces, and animation-driven experiences using React, SCSS, and GSAP. I believe in learning by building, solving problems through experimentation, and continuously improving my technical skills. Currently. <br /> I am seeking an <span className='blue'>internship</span> or <span className="blue">full-time opportunity</span> where I can apply my skills, collaborate with experienced professionals, contribute to real-world projects, and grow as a software engineer. My goal is to combine technology, creativity, and problem-solving to build innovative and impactful digital solutions.
                        </p>
                        <div className="links">
                            <button>
                                <a href="http://www.linkedin.com/in/yugvendra-prajapat-687274323">Linkedin</a>
                            </button>
                            <button>
                                <a href="https://drive.google.com/file/d/1c-_3PSoyo_guOmlNbyihDtaH4QiZYWnG/view?usp=drive_link">Resume</a>
                            </button>
                            <button>
                                <a href="https://wa.me/918269154588">Hire Me</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
