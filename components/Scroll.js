"use client";
import React, { useRef, useEffect } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Scroll = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            },
        }
        );

        return () => {
            pin.kill()
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };
        }
    }, []);


    // ref={triggerRef} ref ={sectionRef}
//   in globalcss
  return (
    <section className="scroll-section-outer">
        <div ref={triggerRef}>
            <div ref ={sectionRef} className="scroll-section-inner">
                
                <div className="scroll-section1  text-white mt-10 px-4">
                    <div className="container1 bg-[#1f1b18] rounded-lg">
                        <img className="scroll-container lazyload mr-12 mb-2 ml-12" src="/anime.png" width="500px" height="500px"/> 
                        <div className="container">
                            <img className="scroll-container lazyload mb-4 ml-12 mt-4" src="/bell.png" width="200px" height="50px"/>
                            <iframe className="ml-4" width="460" height="315" src="https://www.youtube.com/embed/aaxKlj55qT4?si=r3JcpMqYKfOFly95&amp;controls=0" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; web-share" allowfullscreen>             
                            </iframe>
                            
                        </div>
                    </div>
                    <div className="font-semibold flex-1 ml-10 mr-10 text-center bg-[#1a325a] rounded">
                        <ul className='list-disc pl-2 text-xl text-white'>
                            <li> <span className="text-[#4959d3] font-bold xl-text-5xl lg-text-3xl">Smart Bell</span> was a 5 member team, 2 quarter senior desgin project, smart door bell system integrated with 
                            <span className="text-[#df664e] font-bold"> Raspberry Pi3 </span>
                            and a mobile app integrated with <span className="text-[#4e92df] font-bold">Flutter.</span></li>
                            <li> Hands-free sensor doorbell detection system that sends push notifications to the user, Active Livestream, and One-way communication.</li>
                            <li> Cheaper alternative to RING by Amazon. </li>
                        </ul> 
                    
                        <div className="container mt-8">
                            <figure className="mb-5">
                                <div className="hover:opacity-20">
                                    <a href="https://smartbell-372ba.web.app">
                                        <img className="scroll-container lazyload" src="/logo.png" width="100px" height="100px"/>
                                    </a>
                                </div>
                                <figcaption className="font-semibold italic text-center">Click to vist <br/>the website</figcaption>
                            </figure>
                            
                            <figure className="mb-5">
                                <div className="hover:opacity-20">
                                    <a href="https://github.com/SHREYASTELKAR/Smart-Bell">
                                        <img className="scroll-container lazyload ml-24" src="/github.webp" width="100px" height="100px"/>
                                    </a>
                                </div>
                                    <figcaption className="font-semibold italic text-center ml-24 mb-2">View Code</figcaption>
                            </figure>
                            <br/>
                            <iframe width="360" height="280" src="https://www.youtube.com/embed/bjiRkU82dVg?si=Rbhjj02S5_5VSoVK" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen></iframe>
                        </div>
                    </div>      
                </div>


                <div className="scroll-section1 bg-[#db3a3a] flex">
                    
                    <div className="mt-16 ml-32">
                        <h2 className="font-semibold text-4xl text-white text-center mb-4 font-sans bg-black rounded-md"> 
                            Geometry Dash on FPGA
                        </h2>
                        
                        <div className= "border border-black flex-1 mr-20 mt-12" >
                            <a href="https://github.com/SHREYASTELKAR/Similar-to-Geometry-Dash-Platform-Game">
                                <div className="hover:opacity-70">
                                    <img src="/game.png" width="500px" height="500px"/>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="text-white flex-1 mt-48 "> 
                        
                        <ul className="bg-black list-disc pl-2 text-center font-semibold mr-12 xl-2xl lg:text-xl md:text-xl sm:text-xl rounded">
                            <li>Platform game on <span className="text-[#319443] font-bold">FPGA BASYS3</span> board that 
                                features a coin-collecting 
                                and pitfall-avoiding aspect with charged jumping mechanics. </li>
                            <li> Designed with State machines, Sequential Logic, Counters, and Flip-Flops and 
                                displayed on the monitor with VGA. 
                                Implemented a large-scale system with smaller logic components.</li>
                        </ul>
                    
                        <h1 className="text-white text-2xl md:text-xl sm:text-xl font-semibold mt-12 bg-black rounded min-content" 
                        style={{  display: 'inline-block'}}> 
                            ← Go to Code 
                        </h1>

                        <div className="container">
                            <Image className="mt-12"
                            src='/bit_code.png'
                            width={350}
                            height={500}
                            />
                            <Image className="ml-8 mt-12"
                            src='/basys.jpg'
                            width={300}
                            height={100}
                            />    
                        </div>

                    </div>
                </div>


                <div className="scroll-section1 bg-[#464343] text-black">
                    <div className="mt-24 ml-24">
                        <h1 className="text-white text-bold text-4xl"> Traveling Salesman Problem </h1>
                    </div>
                    <div className="container">
                        <Image className="ml-24 mb-12 mt-4"
                        src="/dfs.png"
                        width={400}
                        height={400}
                        />
                    
                        <Image className="ml-24"
                            src="/cities.png"
                            width={400}
                            height={400}
                            />
                        <figure className="mb-5">
                            <div className="hover:opacity-20">
                                <a href="https://github.com/SHREYASTELKAR/">
                                    <img className="scroll-container lazyload ml-24" src="/github.webp" width="100px" height="100px"/>
                                </a>
                            </div>
                                <figcaption className="font-semibold italic text-center ml-24 mb-2">View Code</figcaption>
                        </figure>
                    </div>

                    
                    <ul className="list-disc pl-2 text-white ml-24 font-semibold lg:text-3xl md:text-xl">
                        <li>Finds the shortest hamiltonian path in C using the graph and path methods.</li>
                        <li>Gets the total distance on route</li>
                        
                    </ul>
               
                </div>


                <div className="scroll-section1 bg-black">
                    <div className="container1">
                        <div className="mt-24 ml-24">
                            <div className="container">
                            <h1 className="text-[#4dd48f] text-bold text-4xl mb-8"> Morse Code Decoder </h1>
                                <span>
                                <figure className="mb-5">
                                    <div className="hover:opacity-20 mt-4">
                                        <a href="https://github.com/SHREYASTELKAR/">
                                            <img className="scroll-container lazyload ml-24" src="/github.webp" width="50px" height="50px"/>
                                        </a>
                                    </div>
                                </figure>
                                </span>
                            </div>
                            <ul className="text-[#edd6d6] font-bold text-2xl mb-4 pl-2 list-disc">
                                <li> Photosensor programmed by an ESP32C3 reads in dots and dashes from an LED</li>
                                <li> Program interprets the message and prints the message </li>
                                <li> 3msec LED flash rate </li>
                            </ul>
                        </div>
                        
                        <Image className="ml-24 mb-12 mt-12"
                            src="/morse.webp"
                            width={600}
                            height={600}
                            />
                    </div>
                    <div className="flex-1 py-24">
                        <div className="container">
                         <Image className="ml-24 mb-12"
                            src="/esp.png"
                            width={300}
                            height={300}
                            />
                        
                            <Image className="ml-24"
                                src="/photosensor.webp"
                                width={200}
                                height={150}
                                />

                            <Image
                                src="/led.jpeg"
                                width={250}
                                height={200}
                                />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Scroll