import React from 'react';

const Contact = () => (
    <section className="contact text-center container mx-auto px-12">
        <p className="title font-bold pt-12 pb-12">CONTACT ME</p>
        <div className="row">
            <div className="col">
                <i class="far fa-hand-point-right hand"></i>
            </div>
            <div className="col">
                <ul>
                <li><i class="fas fa-at"></i><span>MAIL</span></li>
                <li><i class="fab fa-linkedin-in"></i><span>LINKEDIN</span></li>
                <li><i class="fab fa-github"></i><span>GITHUB</span></li>
                </ul>
            </div>
        </div>
    </section>
);

export default Contact;