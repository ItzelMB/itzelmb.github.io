import React from 'react';
import './aboutMe.css';

const AboutMe = () => (
    <main className="aboutMe">
        {/*<p className="title">ABOUT ME</p>*/}
        <image src="../../img/imb-lab.jpg" className="me"></image>

    <div class="max-w-md w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
            <img src="https://github.com/ItzelMB/itzelmb.github.io/blob/tailwindCss/src/img/imb-lab.jpg?raw=true" class="w-auto"></img>
        </div>

        <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="text-black font-bold text-xl mb-2">ABOUT ME</div>
            <p class="text-grey-darker text-base">
                I am a recently graduated front-end web developer with a background in graphic design, 
                I 've worked in projects related to UI and web development. 
                My experience has led me to firmly believe that facing challenges is the best opportunity 
                to be the best version of oneself. That is why I am dedicated, determined, flexible and resilient, 
                I consider myself a lifelong learner.
            </p>
            <a href="../../assets/Itzelmb-Frontend-resume-eng.pdf" download="itzelmb-resume">Download my resume here</a>
        </div>
    </div>

    </main>
);

export default AboutMe;