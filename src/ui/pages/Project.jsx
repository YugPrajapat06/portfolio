import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './project.scss'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText);

const projects = [
    {
        name: 'Pre Placement Drive',
        img: 'https://i.pinimg.com/1200x/ce/69/51/ce69517eda4d4f255563f6bdabdbfe04.jpg',
        techStack: 'MERN Stack, GEN AI, PineCone, LangChain, RAG, LLMs',
        Description: 'An AI-powered placement preparation platform featuring resume-based question generation, technical and behavioral mock interviews, aptitude assessments, and intelligent answer evaluation to help students enhance their problem-solving abilities, communication, and campus placement readiness.',
        link: '',
        github: 'https://github.com/YugPrajapat06/Pre_Placement_Drive',
        Team: 'Self'
    },
    {
        name: 'HealthAxis AI',
        img: 'https://i.pinimg.com/736x/01/41/68/014168b74e64d22fcfb0c7f2feddaceb.jpg',
        techStack: 'MERN Stack, GEN AI, LangChain, LangGraph, LLMs, MultyModel AI System',
        Description: 'An AI-powered healthcare platform featuring an intelligent virtual doctor, symptom-based disease prediction, personalized health recommendations, and risk assessment to help users understand their health conditions and access preliminary medical guidance.',
        link: 'https://healthaxis-plum.vercel.app/',
        github: 'https://github.com/VanshNamdev2104/Healthaxis',
        Team: '4 Members'
    },
    {
        name: 'AI Negotiation Game',
        img: 'https://i.pinimg.com/736x/b1/d9/22/b1d922166e6157c72696fc1ca4d1dc53.jpg',
        techStack: 'MERN Stack, GEN AI, LangChain, LLMs',
        Description: 'An AI-powered negotiation platform featuring an intelligent virtual seller, dynamic product price negotiation, context-aware AI responses, and a competitive leaderboard to help users improve their negotiation, decision-making, and bargaining skills.',
        link: '',
        github: 'https://github.com/YugPrajapat06/cohort_2.0_projects/tree/main/Negotiation-Game',
        Team: 'Self'
    }
]

const Project = () => {

    const project_main = useRef(null)
    const project_main_image = useRef(null)
    const coverStrip = useRef([])
    const hoverTl = useRef(null)
    const upperLeftImage = useRef(null)
    const cover_strip2 = useRef([])
    const projectTl = useRef(null)
    const projectName = useRef(null)

    const [projectIndex, setProjectIndex] = useState(1)

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: project_main.current,
                start: 'top top',
                end: '+=1000',
                scrub: 1,
                pin: false,
            }
        })

        tl.to(project_main_image.current, {
            scrollTrigger: {
                start: 'top bottom',
                end: 'bottom bottom',
                trigger: project_main_image.current,
                scrub: true
            },
            transform: 'translate(0, 0%)',
            duration: 0.5,
            ease: 'power1.inOut'
        })

        hoverTl.current = gsap.timeline({ paused: true })

        hoverTl.current.to(coverStrip.current, {
            width: '100%',
            stagger: {
                each: 0.05,
                from: 'edges'
            }
        }).to(upperLeftImage.current, {
            scale: 1.2,
            opacity: 1,
            duration: 0.5,
        })

        projectTl.current = gsap.timeline({ paused: true })

        projectTl.current.set('.cover_overlape', {
            height: '100%'
        }).to(cover_strip2.current, {
            height: '100%',
            PointerEvent: 'all',
            stagger: {
                each: 0.05,
                from: 'edges'
            }
        }).to('.content', {
            opacity: 1,
            duration: 0.5,
        }).to(cover_strip2.current, {
            opacity: 0,
            PointerEvent: 'none',
        })

    }, {})
    
    return (
        <div ref={project_main} className='project_main'>
            <img className='projectMainImage' ref={project_main_image} src="https://i.pinimg.com/736x/c8/9e/46/c89e460668273815c5c092b4dc535d31.jpg" alt="" />
            <div className="overlape">
                <div className="upper">
                    <div className="upperLeft">
                        {
                            Array.from({ length: 5 }).map((_, index) => {
                                return <div ref={(el) => coverStrip.current.push(el)}
                                    className="coverStrip">
                                </div>
                            })
                        }
                        <img ref={upperLeftImage} className='upperLeftImage' src={projects[projectIndex]?.img} alt="" />
                    </div>
                    <div className="upperRight">
                        {/* <h1 ref={projectName}>{projects[projectIndex]?.name}</h1> */}
                    </div>
                </div>
                <div className='bottom'>
                    <div className="bottomLeft">
                        <h1>MY PROJECTS</h1>
                        <p>I showcase 3 selected full-stack projects that reflect my passion for clean code, creative design, and intelligent solutions — combining modern technologies, seamless interactions, and real-world problem-solving. Each project is crafted with curiosity, creativity, and a genuine love for coding ❤️.</p>
                    </div>
                    <div className="bottomRight">
                        {
                            projects.map((project, index) => {
                                return <div key={index} className='project'>
                                    <img
                                        onMouseEnter={() => {
                                            setProjectIndex(index % 3)
                                            hoverTl.current?.restart()
                                        }}
                                        onMouseLeave={() => {
                                            // setProjectIndex(0)
                                            hoverTl.current?.reverse()
                                        }}
                                        onClick={() => {
                                            projectTl.current?.play();
                                        }}
                                        className='projectImage' src={project.img} alt="" />
                                        <h2>
                                            {project.name}
                                        </h2>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='cover_overlape'>
                    {
                        Array.from({ length: 8 }).map((_, index) => {
                            return <div ref={(el) => cover_strip2.current.push(el)} className='cover_strip'></div>
                        })
                    }
                    <div className="content">
                        <div className="left">
                            <div className="backButton">
                                <button onClick={() => {
                                    projectTl.current?.reverse()
                                }}>Back</button>
                            </div>
                            <div className="imageBox">
                                <img src={projects[projectIndex]?.img} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h1>{projects[projectIndex]?.name}</h1>
                            <p>{projects[projectIndex]?.Description}</p>
                            <div className="team">
                                <h3>TEAM</h3>
                                <p>{projects[projectIndex]?.Team}</p>
                            </div>
                            <div className="techStack">
                                <h3>TECH STACK</h3>
                                <p>{projects[projectIndex]?.techStack}</p>
                            </div>
                            <div className="links">
                                <button>
                                    <a href={projects[projectIndex]?.github}>Github</a>
                                </button>
                                <button>
                                    <a href={projects[projectIndex]?.link}>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project
