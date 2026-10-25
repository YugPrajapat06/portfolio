import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './opening.scss'
import tree1 from '../../assets/opening/tree1.png'
import crow1 from '../../assets/opening/crow1.png'
import crow2 from '../../assets/opening/crow2.png'
import ghost1 from '../../assets/opening/ghost1.png'

import blackholeSound from '../../assets/opening/sound/blackhole.mp3';
import crowSound from '../../assets/opening/sound/crow.mp3';
import ghostSound from '../../assets/opening/sound/ghost.mp3';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const skill_set = [
  'Frontend',
  'Backend',
  'Database',
  'UI/UX',
  'Design',
  'DevOps',
  'Gen AI',
  'Animations'
]
const Latters = [
  {
    text: 'Y',
    left: 5,
    bottom: 20
  },
  {
    text: 'U',
    left: 10,
    bottom: 12
  },
  {
    text: 'G',
    left: 18,
    bottom: 6
  },
  {
    text: 'V',
    left: 26,
    bottom: 22
  },
  {
    text: 'E',
    left: 35,
    bottom: 10
  },
  {
    text: 'N',
    left: 45,
    bottom: 20
  },
  {
    text: 'D',
    left: 50,
    bottom: 11
  },
  {
    text: 'R',
    left: 58,
    bottom: 20
  },
  {
    text: 'A',
    left: 65,
    bottom: 13
  },
  {
    text: '',
    left: 72,
    bottom: 8
  },
  {
    text: '',
    left: 80,
    bottom: 12
  },
  {
    text: '',
    left: 88,
    bottom: 18
  },
]

const skill_set2 = [
  {
    top: 15,
    left: 0,
    value: 'React.js',
    dir: 'left',
    logo: 'https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg'
  },
  {
    top: 30,
    left: 0,
    value: 'Node.js',
    dir: 'left',
    logo: 'https://i.pinimg.com/736x/0c/81/21/0c8121171fefa57a22351d1a10e96c2b.jpg'
  },
  {
    top: 15,
    right: 0,
    value: 'Express.js',
    dir: 'right',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmebxSmR8bA24xzvqDdX0U3AQFmMCLHaIcI6DzoEJy3KedsxZv3jljdQ&s=10'
  },
  {
    top: 30,
    right: 0,
    value: 'Mongo DB',
    dir: 'right',
    logo: 'https://i.pinimg.com/736x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg'
  },
  {
    top: 45,
    left: 0,
    value: 'JavaScript',
    dir: 'left',
    logo: 'https://i.pinimg.com/736x/1d/fd/5f/1dfd5fcd5850962f901047478720f277.jpg'
  },
  {
    top: 45,
    right: 0,
    value: 'LangChain',
    dir: 'right',
    logo: 'https://i.pinimg.com/1200x/65/d3/5c/65d35cc6f5504ce12f1da6ef273eb2ce.jpg'
  },
  {
    top: 60,
    left: 0,
    value: 'LLM',
    dir: 'left',
    logo: 'https://i.pinimg.com/736x/4e/d8/43/4ed843ff7c5ec6e472d621d71c0d1e6a.jpg'
  },
  {
    top: 60,
    right: 0,
    value: 'RAG',
    dir: 'right',
    logo: 'https://i.pinimg.com/736x/07/3a/20/073a207b3e7a2d5af18d3cacf01c5457.jpg'
  },
  {
    top: 75,
    left: 0,
    value: 'GSAP',
    dir: 'left',
    logo: 'https://i.pinimg.com/736x/28/b8/e6/28b8e6fb3ff8bb9c18932a1f308ccdee.jpg'
  },
  {
    top: 75,
    right: 0,
    value: 'DevOps',
    dir: 'right',
    logo: 'https://i.pinimg.com/736x/ac/f7/5a/acf75a515419a54918e5eedb3ee6edbf.jpg'
  }
]

const smallBoxes = [
  // Top — above the screen
  { left: 10, right: 90, top: -15, down: 115, radius: 35, angle: 270 },
  { left: 30, right: 70, top: -22, down: 122, radius: 42, angle: 285 },
  { left: 55, right: 45, top: -12, down: 112, radius: 38, angle: 250 },
  { left: 80, right: 20, top: -18, down: 118, radius: 45, angle: 300 },

  // Bottom — below the screen
  { left: 15, right: 85, top: 115, down: -15, radius: 33, angle: 90 },
  { left: 40, right: 60, top: 122, down: -22, radius: 41, angle: 105 },
  { left: 65, right: 35, top: 112, down: -12, radius: 36, angle: 75 },
  { left: 90, right: 10, top: 118, down: -18, radius: 44, angle: 120 },

  // Left — beyond the left edge
  { left: -15, right: 115, top: 20, down: 80, radius: 34, angle: 180 },
  { left: -22, right: 122, top: 45, down: 55, radius: 43, angle: 195 },
  { left: -12, right: 112, top: 70, down: 30, radius: 37, angle: 165 },

  // Right — beyond the right edge
  { left: 115, right: -15, top: 25, down: 75, radius: 45, angle: 0 },
  { left: 122, right: -22, top: 50, down: 50, radius: 32, angle: 15 },
  { left: 112, right: -12, top: 78, down: 22, radius: 40, angle: 345 },
  { left: 105, right: -5, top: 95, down: 5, radius: 36, angle: 330 },
];

const Opening = () => {

  const main = useRef(null)
  const professionText = useRef(null)
  const crow = useRef(null)
  const crowR = useRef(null)
  const ghost_frame = useRef(null)
  const skills = useRef(null)
  const skill_left = useRef([])
  const tree = useRef(null)
  const skill_right = useRef([])
  const letterBox = useRef([])
  const blackhole_pos = useRef(null)
  const blackhole = useRef(null)
  const latter_orbit = useRef(null)
  const smallBox = useRef([]);
  const audioRef = useRef([]);
  const myself = useRef(null)


  const callSound = (sound) => {

    audioRef.current.forEach((audio) => {
      audio.pause()
    })

    const audio = new Audio(sound)
    audio.volume = 0.5
    audioRef.current.push(audio)
    audio.play().catch((error) => {
      console.log('Audio playback failed:', error);
    });
  }

  const stopSound = () => {

    audioRef.current.forEach((audio) => {
      audio.pause()
    })
  }

  useGSAP(() => {

    let i = 0;

    let split = new SplitText(professionText.current, {
      type: 'chars',
      charsClass: 'professionChar'
    })

    let split2 = new SplitText(myself.current, {
      type: 'words',
      charsClass: 'myselfwords'
    })



    gsap.from(split.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'expo.out',
      stagger: {
        each: 0.06,
        from: 'center'
      }
    })


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: 'top top',
        end: '+=5000',
        scrub: true,
        pin: true,
      }
    });

    gsap.set(crow.current, {
      position: 'absolute',
      left: '0%',
    })
    for (let i = 0; i < 8; i++) {

      let split_s = new SplitText(`.s-${i}`, {
        type: 'chars',
        charsClass: 'skillChar'
      })

      tl.to(crow.current, {
        left: (i + 1) * 100,
        ease: 'power1.inOut',
        duration: 0.2,
      }).from(
        `.s-${i} .skillChar`,
        {
          opacity: 0,
          ease: 'power1.inOut',
          duration: 0.2,
          yPercent: -100,
          stagger: {
            each: 0.02,
            from: 'start'
          }
        },
        '-=0.2'
      );
    }

    tl.to(crow.current, {
      left: 1800,
      ease: 'power1.inOut',
      duration: 0.2,
    }).to(crowR.current, {
      left: -3500,
      ease: 'power1.inOut',
      duration: 3,
      top: '-200%',
      height: "600%",
      width: 1500,
      scrub: true,
      onStart: () => {
        callSound(crowSound)
      }
    }).from(ghost_frame.current, {
      opacity: 0,
      display: 'none',
      transform: 'translateY(-50%)',
    }, '-=2').to(skills.current, {
      transform: 'translateY(-20px)',
      opacity: 0
    }, '-=2').from('.skills_2', {
      opacity: 0,
      duration: 0.02,
    }, '-=1.5').to(skill_left.current, {
      x: '-500%',
      duration: 0.5,
      ease: 'power1.inOut',
    }, '-=0.5').to(skill_right.current, {
      x: '500%',
      duration: 0.5,
      ease: 'power1.inOut',
    }, '-=0.5').to(ghost_frame.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.inOut',
      scale: 1.4
    }, '-=0.4').to(letterBox.current, {
      boxShadow: '1px 2px 10px  rgba(0, 190, 133, 0.767)',
      color: 'rgb(0, 190, 133)',
      duration: 0.4,
      ease: 'power1.inOut',
    }).to(letterBox.current, {
      transform: 'translateY(-80%)',
      duration: 0.5,
    }, '+=0.5').from(blackhole.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.inOut',
      scale: 0.2
    }, '-=0.2').to(blackhole_pos.current, {
      display: 'flex',
      duration: 0.5,
      ease: 'power1.inOut',

      onStart: () => {
        callSound(blackholeSound)
      },

    }, '-=0.5').to(latter_orbit.current, {
      height: '600px',
      width: '600px',
      borderRadius: '100%',

      // backgroundColor: 'white',
      duration: 1,
      ease: 'power1.inOut',

    }).to(latter_orbit.current, {
      animation: 'rotateX 5s linear infinite',
    }, '-=0.5')

    for (let i = 0; i < Latters.length; i++) {

      const angle = (i * 360) / Latters.length;
      const radius = 50;

      const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
      const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

      tl.to(letterBox.current[i], {
        left: `${x}%`,
        top: `${y}%`,
        duration: 0.5,
        transform: 'translate(-50%, -50%)',
        ease: 'power1.inOut',

      }, '-=0.5')
    }

    for (let i = 0; i < smallBoxes.length; i++) {
      const box = smallBoxes[i];

      const angle = box.angle;
      const radius = box.radius;

      const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
      const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

      tl.to(smallBox.current[i], {
        left: `${x}%`,
        top: `${y}%`,
        duration: 0.5,
        transform: 'translate(-50%, -50%)',
        ease: 'power1.inOut',
      }, '-=0.5');
    }

    tl.to(blackhole_pos.current, {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      duration: 1,
      borderRadius: 0,
      onComplete: () => {
        stopSound()
      }
    }).to(blackhole.current, {
      height: '200%',
      width: '200%',
      objectFit: 'cover',

    }, "-=1").to(myself.current, {
      opacity: 1,
      duration: 0.5,
    }).from(split2.words, {
      opacity: 0,
      yPercent: 100,
      ease: 'power1.inOut',
    }).to('.value', {
      width: '100%',
      duration: 1,
      ease: 'power1.inOut',
      backgroundColor: 'rgb(255, 136, 0)'
    }).to('.introOpening', {
      opacity: 0,
      duration: 0.3,
      ease: 'power1.out'
    })



    // const mytl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: myself.current,
    //     start: 'top top',
    //     end: '+=1000',
    //     scrub: true,
    //     pin: true,
    //   }
    // })
  }, {})

  return (
    <div ref={main} className='main'>
      <div className='background'>
        <div ref={crowR} className='crowR'>
          <img src={crow2} alt="" />
        </div>
        <div className='overlape'>
          <div ref={blackhole_pos} className='blackhole-position'>
            <div ref={blackhole} className='blackHole'>
              <img src="https://i.pinimg.com/736x/60/ef/f2/60eff242a216dc95c1a400ca3fa3daa7.jpg" alt="" />
            </div>
          </div>
          <div ref={latter_orbit} className="latter-orbit">
            {
              Latters.map((latter, index) => {
                return <div ref={(el) => letterBox.current.push(el)} key={index} className='latter' style={{ left: `${latter.left}%`, bottom: `${latter.bottom}%` }}> {latter.text}</div>
              })
            }
            {smallBoxes.map((item, index) => (
              <div
                ref={(el) => {
                  smallBox.current[index] = el;
                }}
                key={index}
                className="smallBox"
                style={{
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                }}
              />
            ))}
          </div>
        </div>
        <div className='back'>
          <img ref={tree} src={tree1} alt="" />
          <div ref={ghost_frame} className='ghost-frame'>
            <img className='ghost-image' src={ghost1} alt="" />
            {
              skill_set2.map((skill, index) => {
                return <div ref={(el) => skill.dir == 'left' ? skill_left.current.push(el) : skill_right.current.push(el)} style={{ top: `${skill.top}%`, right: `${skill.right}%`, left: `${skill.left}%`, bottom: `${skill.bottom}%` }} className={`s2-${index} skill2-${skill.dir} skills_2`}>
                  {/* <img src={skill.logo} alt="" /> */}
                  <p>{skill.value}</p>
                </div>
              })
            }
          </div>
          <div className='profession-tags'>
            <h1 className='red small'>CREATIVE</h1>

            <h1 ref={professionText} className='profession'>FULL STACK DEVELOPER</h1>
            <div ref={skills} className='skills'>
              {
                skill_set.map((skill, index) => {
                  return <div key={index} className={`skill s-${index}`}>{skill}</div>
                })
              }
              <div ref={crow} className='crow'>
                <img src={crow1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='surface'>

        </div>
      </div>
      <div ref={myself} className='myself'>
        <div className="introOpening">
          <h1>नमस्ते</h1>
          <h1><span>Now</span>I Introduce Myself</h1>
          <div className='loader'>
            <div className="value"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Opening
