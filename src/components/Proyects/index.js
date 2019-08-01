import React from 'react';

const Projects = () => (
    <section className="projects text-center">
        <div className="container mx-auto px-12">
            <p className="title font-bold pt-12 pb-12 tracking-wide ">HERE ARE SOME PROJECTS I'VE WORKED IN</p>
            <h3 className="font-bold text-lg mb-4">Poua social network</h3>
            <img src="https://66.media.tumblr.com/75aeaec5ac57e3f40f5c8b2561fb7e09/tumblr_pvgzrrHGcO1uww4jco1_1280.png" alt="poua social network"></img>
            <div className="">
                <p className="subtitle font-bold text-lg mt-4">DESCRIPTION</p>
                <p>Poua es una red social creada para contar la historia de México compartiendo entre usuarios los lugares en los que la Historia ocurrió, todo esto desde la perspectiva y conocimiento de los lugares que conoce cada usuario.</p>
                <p className="font-bold text-lg pt-4">MADE WITH:</p>
                <div className="tag"><i class="fas fa-angle-left"></i> React Js <i class="fas fa-angle-right"></i></div>
                <div className="tag"><i class="fas fa-angle-left"></i> Bootstrap <i class="fas fa-angle-right"></i></div>
                <div className="tag"><i class="fas fa-angle-left"></i> Firebase <i class="fas fa-angle-right"></i></div>
                <div className="tag"><i class="fas fa-angle-left"></i> HTML5 <i class="fas fa-angle-right"></i></div>
                <div className="tag"><i class="fas fa-angle-left"></i> CSS3 <i class="fas fa-angle-right"></i></div>
                <div className="pt-4">
                    <a href="https://itzelmb.github.io/poua-social-network" target="blank" className="text-teal-700 hover:text-teal-400 font-medium text-lg">GO TO THE DEMO</a>
                </div>
                <div className="pb-8">
                    <a href="https://github.com/ItzelMB/poua-social-network" target="blank" className="text-teal-700 hover:text-teal-400 font-medium text-lg">GO TO THE REPO</a>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;