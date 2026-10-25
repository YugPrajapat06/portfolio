import React, { useRef } from 'react'
import './ending.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const Ending = () => {

    const end_main = useRef(null)
    const endMainImage = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: end_main.current,
                start: 'top top',
                end: '+=1000',
                scrub: 1,
                pin: false,
            }
        })

        tl.fromTo(endMainImage.current,{yPercent: -35}, {
            scrollTrigger: {
                start: 'top bottom',
                end: 'bottom bottom',
                trigger: endMainImage.current,
                scrub: true
            },
            yPercent: 0,
            duration: 1,
            ease: 'power1.inOut'
        })
    }, {})


    return (
        <div ref={end_main} className='end_main'>
            <img ref={endMainImage} className='endMainImage' src="https://i.pinimg.com/736x/a8/c1/64/a8c164cc63d88d9d93a7c4ac068b50ca.jpg" alt="" />
            <div className="endOverlape">
                <div className="upper">
                    <div className="upper_left">
                        <h2>HAVE A PROJECT IN MIND?</h2>
                        <h1>LET'S BUILD
                            <br /> SOMETHING
                            <br /> <span>EXTRAORDINARY.</span></h1>
                    </div>

                    <div className="upper_middle">
                        <h3>Get In Touch</h3>
                        <p>If you're a company looking for a creative developer who blends technical expertise, interactive experiences, and AI-powered solutions, I'm always open to exciting opportunities and meaningful collaborations.</p>
                        <button>
                            <a href="https://wa.me/918269154588">HIRE ME</a>
                        </button>
                    </div>

                    <div className="upper_right">
                        <p>@2026 yugprajapat6@gmail.com</p>

                        <div className="links">
                            <a href="www.linkedin.com/in/yugvendra-prajapat-687274323">LinkedIn</a>
                            <a href="https://github.com/YugPrajapat06">Github</a>
                            <a href="https://www.instagram.com/yugprajapat13/">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className='name'>YUGVENDRA</h1>
                    <h1 className="cast">PRAJAPAT</h1>
                </div>
            </div>
        </div>
    )
}

export default Ending
