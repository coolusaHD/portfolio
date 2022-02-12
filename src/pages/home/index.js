import React from 'react';
import { useTheme } from '@mui/styles';
import {SiteContent, Section, ScrollIndicator} from './style/homeStyle';
import './style/homeStyle.css';


import AboutMe from '../about-me/index';
import Source from '../source/index';
import Projects from '../projects/index';
import Welcome from '../welcome/index';


export default function Home(props) {

    const HomeRef = props.HomeRef;
    const AboutMeRef = props.AboutMeRef;
    const SourceRef = props.SourceRef;
    const ProjectsRef = props.ProjectsRef;
    
    const theme = useTheme();
   

    return(
        <SiteContent>

            <Section ref={HomeRef} id="home" bg={theme.palette.background.default}>
                <Welcome />
            </Section>

            <ScrollIndicator opacity={window.scrollY/3 < 1000 ? (window.scrollY/3-100)*-1 : 0} color={theme.palette.text.primary} /> 

        <div className='spacer layer3'></div>

            <Section ref={AboutMeRef} id="about-me" bg={theme.palette.secondary.main} color={theme.palette.text.coloredSection}>
                {/* <AboutMe /> */}
                <AboutMe />
            </Section>

            <div className='spacer layer4'></div>

            <Section ref={ProjectsRef} id="projects" bg={theme.palette.background.default}>
                <Projects />
            </Section>

            <div className='spacer layer1'></div>

            <Section ref={SourceRef} id="source" bg={theme.palette.primary.main} color={theme.palette.text.coloredSection}>
                {/* <Source /> */}
                <Source />
            </Section>
            
            <div className='spacer layer2'></div>

        </SiteContent>
    );
};