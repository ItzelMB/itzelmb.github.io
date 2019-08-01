import React from 'react';
import './aboutMe.css'

const AboutMe = () => (
    <main className="aboutMe">
        <div className="container mx-auto px-12">
            <p className="title text-white font-bold text-center pt-12 pb-12">ABOUT ME</p>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-8 mb-10">
                    <img src="../../img/imb-lab.jpg" className="me"></img>
                </div>
                <div className="w-full md:w-1/2 p-8 mb-10">
                    <p class="text-gray-900 md:text-white text-lg text-base float-right">
                        I am a recently graduated front-end web developer with a background in graphic design, 
                        I 've worked in projects related to UI and web development. 
                        My experience has led me to firmly believe that facing challenges is the best opportunity 
                        to be the best version of oneself. That is why I am dedicated, determined, flexible and resilient, 
                        I consider myself a lifelong learner.
                    </p>
                </div>
            </div>
        </div>
    </main>
);

export default AboutMe;