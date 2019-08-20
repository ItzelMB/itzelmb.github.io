import React from 'react';
import './softskills.css';
import teamwork from '../../assets/icon1.svg';
import organization from '../../assets/icon2.svg';
import selflearning from '../../assets/icon3.svg';
import creative from '../../assets/icon4.svg';
import flexible from '../../assets/icon5.svg';
import communication from '../../assets/icon6.svg';

const SoftSkills = () => (
    <section className="softskills">
        <div className="container text-center tracking-wider pt-12 pb-12 mx-auto px-12">
            <p className="title font-bold text-white mb-10">THESE ARE MY PERSONALITY HIGHLIGHTS</p>
            <div className="flex flex-wrap text-white text-center">
                <div className="w-1/3 ml-auto md:flex-1 m-4">
                    <img src={organization} alt="organization" className="mb-6"></img>
                    <p>PLANNING & ORGANIZATION</p></div>
                <div className="w-1/3 ml-auto md:flex-1 m-4">
                    <img src={selflearning} alt="self-learning" className="mb-6"></img>
                    <p>SELF-LEARNING</p>
                </div>
                <div className="w-1/3 ml-auto md:flex-1 m-4">
                    <img src={teamwork} alt="teamwork" className="mb-6"></img>
                    <p>WORKING AS A TEAM</p>
                </div>
                <div className="w-1/3 ml-auto md:flex-1 m-4">
                    <img src={creative} alt="creativity" className="mb-6"></img>
                    <p>CREATIVE</p>
                </div>
                <div className="w-1/3 ml-auto md:flex-1 m-4">
                    <img src={flexible} alt="flexible" className="mb-6"></img>
                    <p>FLEXIBLE</p>
                </div>
                <div className="w-1/3 ml-auto md:flex-1 m-4">
                    <img src={communication} alt="communication" className="mb-6"></img>
                    <p>GOOD COMMUNICATION</p>
                </div>
                {/*<div className="w-1/3 m-4"><p className="font-bold">PROBLEM SOLVING</p></div>
                <div className="w-1/3 m-4"><p className="font-bold">RESPONSIBLE</p></div>
                */}
            </div>
        </div>
    </section>
);

export default SoftSkills;