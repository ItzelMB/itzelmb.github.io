import React from 'react';
import PouaImg from '../../img/mockup-poua.png';
import Marvelpedia from '../../img/mockup-marvelpedia.png';

const Projects = () => (
    <section className="projects text-center bg-gray-100">
        <div className="container mx-auto px-12">
            <p className="title font-bold pt-12 pb-12 tracking-wide ">HERE ARE SOME PROJECTS I'VE WORKED IN</p>
            <div className="w-full md:flex">
                <div className="md:w-2/5">
                    <img src={PouaImg} alt="poua login"></img>
                </div>
                <div className="md:w-3/5 p-6 text-left">
                    <h3 className="font-bold text-lg mb-4">Poua social network</h3>
                    <p className="subtitle font-bold text-lg mt-4">DESCRIPTION</p>
                    <p>Poua is a social network created to tell the story of Mexico by sharing among users the places where History happened, all of this from the perspective and knowledge of the places that each user knows better.</p>
                    <p className="font-bold text-lg pt-4">MADE WITH:</p>
                    <div className="flex flex-wrap">
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> React Js <i class="fas fa-angle-right"></i></div>
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> Bootstrap <i class="fas fa-angle-right"></i></div>
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> Firebase <i class="fas fa-angle-right"></i></div>
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> HTML5 <i class="fas fa-angle-right"></i></div>
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> CSS3 <i class="fas fa-angle-right"></i></div>
                    </div>
                    <div className="pt-4">
                        <a href="https://itzelmb.github.io/poua-social-network" target="blank" className="text-teal-700 md:mr-8 hover:text-teal-400 font-medium text-lg">GO TO THE DEMO</a>
                    </div>
                    <div>
                        <a href="https://github.com/ItzelMB/poua-social-network" target="blank" className="text-teal-700 hover:text-teal-400 font-medium text-lg">GO TO THE REPO</a>
                    </div>
                </div>
            </div>
            <div className=" w-full md:flex bg-gray-100">
                <div className="md:w-2/5"><img src={Marvelpedia} alt="mervelpedia login"></img></div>
                <div className="md:w-3/5 p-6 text-left">
                    <h3 className="font-bold text-lg mb-4">Marvelpedia</h3>
                    <p className="subtitle font-bold text-lg mt-4">DESCRIPTION</p>
                    <p>Marvelpedia is a project to introduce users to the marvel film world.</p>
                    <p className="font-bold text-lg pt-4">MADE WITH:</p>
                    <div className="flex flex-wrap">
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> JAVASCRIPT VANILLA <i class="fas fa-angle-right"></i></div>
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> HTML5 <i class="fas fa-angle-right"></i></div>
                        <div className="tag w-full md:flex-1 bg-teal-200 m-2"><i class="fas fa-angle-left"></i> CSS3 <i class="fas fa-angle-right"></i></div>
                    </div>
                    <div className="pt-4">
                        <a href="https://itzelmb.github.io/GDL002-hackathon-interna/index.html" target="blank" className="text-teal-700 hover:text-teal-400 font-medium text-lg">GO TO THE DEMO</a>
                    </div>
                    <div>
                        <a href="https://github.com/ItzelMB/GDL002-hackathon-interna" target="blank" className="text-teal-700 hover:text-teal-400 font-medium text-lg">GO TO THE REPO</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;