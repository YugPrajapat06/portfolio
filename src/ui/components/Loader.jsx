import React, { useRef } from 'react'
import './loader.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Loader = ({ onComplete }) => {
  const value = useRef(null)
  const loader_main = useRef(null)

  useGSAP(() => {
    const content_title = document.querySelector('.content_title')

    let split = new SplitText(content_title, {
      type: 'words, chars',
      wordsClass: 'mastWord',
      charsClass: 'mastChar'
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      }
    })

    gsap.set(value.current, {
      width: '0%'
    });

    // gsap.set(content_title, {
    //   opacity: 0,
    //   y: 100
    // });

    tl.from(content_title, {
      opacity: 0,
      y: 100,
      duration: 1
    }).to(content_title, {
      opacity: 0,
      y: 0,
      duration: 1
    }).call(() => {
      content_title.innerHTML = "CODED & DESIGNED  WITH <span className='heart' >❤</span>"

    }).to(content_title, {
      opacity: 1,
      y: 0,
      duration: 1
    }).to(content_title, {
      delay: 0.5,
      opacity: 0,
      duration: 1,
    }).call(() => {
      content_title.innerHTML = "I AM <span className='name' >YUGVENDRA</span> PRAJAPAT"
    }).to(content_title, {
      opacity: 1,
      y: 0,
      duration: 1
    }).to(content_title, {
      delay: 0.5,
      opacity: 0,
      duration: 1
    })
    
    tl.to(value.current, {
      width: '100%',
      duration: tl.duration(),
      ease: 'power1.inOut',

    }, 0)

  }, { scope: loader_main.current })

  return (
    <div ref={loader_main} className='loader_main'>
      <div className="content">
        <h1 className='content_title'>WELCOME TO MY <span>PORTFOLIO</span></h1>
      </div>
      <div className="loader">
        <div className="cover">
          <div ref={value} className="value"></div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </div>
  )
}

export default Loader
