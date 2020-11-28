import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Rian. I'm a full stack deisgner with experience designing Bonum Mobile, Telkom PMS PWA Apps and Many More.</p>

            <p>My dream is one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>My passion for design and programming began when I was young. I have created numerous projects like random poster maker, Re-Designing User Interface , Making Frame-Work for some web apps</p>
            </Content>
        </div>
    );

}

export default AboutPage;