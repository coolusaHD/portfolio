import React, { useEffect, useState } from 'react';
import { useTheme, withTheme } from '@mui/styles';
import { Button } from '@mui/material';
import {SiteContent, Section, ScrollIndicator} from './style/homeStyle';
import './style/homeStyle.css';


import AboutMe from '../about-me/index';
import Source from '../source/index';
import Projects from '../projects/index';
import Welcome from '../welcome/index';


export default function Home(props) {
    
    const theme = useTheme();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset);
    console.log(theme.palette.text); 

    return(
        <SiteContent>

            <Section id="home" bg={theme.palette.background.default}>
                <Welcome />
            </Section>

            <ScrollIndicator opacity={window.scrollY/5 < 100 ? (window.scrollY/5-100)*-1 : 0} color={theme.palette.text.primary} /> 

        <div className='spacer layer3'></div>

            <Section id="about-me" bg={theme.palette.secondary.main} color={theme.palette.text.coloredSection}>
                {/* <AboutMe /> */}
                <AboutMe />
            </Section>

            <div className='spacer layer4'></div>

            <Section id="projects" bg={theme.palette.background.default}>
                <Projects />
            </Section>

            <div className='spacer layer1'></div>

            <Section id="source" bg={theme.palette.primary.main} color={theme.palette.text.coloredSection}>
                {/* <Source /> */}
                <Source />
            </Section>
            
            <div className='spacer layer2'></div>

        </SiteContent>
    );
};