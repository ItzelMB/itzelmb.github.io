import React from 'react';

const Projects = () => (
    <section className="projects text-center">
        <p className="title font-bold pt-12 pb-12 container mx-auto px-12">HERE ARE SOME PROJECTS I'VE WORKED IN</p>
        <div className="row">
            <div className="col">
                <h3>Pokédiscover</h3>
                <img className="dataLovers" src="https://previews.dropbox.com/p/thumb/AAcAeS5rVRnFQ113dS5I8aDaI4r9PPmoThcGKw4p5vQOqZ5GRY6hHOSJyGcBZ-VTum4JLsanIcEUO1guIgyTcVIsORSnp0-9_aonAACQAejSuFWe35WKuhRq4VTTBWfQT4mF86aDskLL3zFHCvQG7NmtZwdsJXviOYP4YAqf5w5JhaK3GFC1MSZiFB5bIP4dD1StZP4Iw6mcC6FI8ewCCMqLnkSFlvbf4yrlU3W4EgABHB4bi8Fd9Sx_KYOq5qdaDaWM5zjP9x00xlR1VrbBySaSeJtBzmGAXe_E6bVUUKE2k8hZK_KAqGeMS2JRG00PX0ZxAjK-fRmUXspSBpHLBi93/p.png?fv_content=true&size_mode=5" alt="dataLovers"></img>
                <button>Go to the project</button>
            </div>
            <div className="col description">
                <p className="subtitle">DESCRIPTION</p>
                <p>This is a Landing page about Pokémon</p>
                <p>Made with:</p>
                <div className="tag">Javascript</div>
                <div className="tag">HTML5</div>
                <div className="tag">CSS3</div>
            </div>
        </div>
    </section>
);

export default Projects;