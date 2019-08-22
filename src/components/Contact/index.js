import React from 'react';

const Contact = () => (
    <section className="bg-teal-200 contact text-center tracking-wide px-12">
        <div className="container mx-auto">
            <p className="title font-bold pt-12 pb-12">CONTACT ME</p>
            <div className="row">
                <div className="col">
                    <a href="mailto:it.mobec@gmail.com Subject=I%saw%your%online%portfolio"><i class="far fa-envelope fa-4x px-5 pb-6 text-teal-700 hover:text-teal-400"></i></a>{/*<span>MAIL</span>*/}
                    <a href="https://linkedin.com/in/itzelmb" target="blank"><i class="fab fa-linkedin-in fa-4x px-5 pb-6 text-teal-700 hover:text-teal-400"></i></a>{/*<span>LINKEDIN</span>*/}
                    <a href="https://github.com/ItzelMB" target="blank"><i class="fab fa-github fa-4x px-5 pb-6 text-teal-700 hover:text-teal-400"></i></a>{/*<span>GITHUB</span>*/}
                    <a href="https://www.behance.net/itinnamb" target="blank"><i class="fab fa-behance fa-4x px-5 pb-6 text-teal-700 hover:text-teal-400"></i></a>{/*<span>GITHUB</span>*/}
                </div>
            </div>
        </div>
    </section>
);

export default Contact;