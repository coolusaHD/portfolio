import { Button } from '@mui/material';
import React from 'react';
import { withTheme } from '@mui/styles';

import {SiteContent, Section} from './style/homeStyle';
import './style/homeStyle.css';


import AboutMe from '../about-me/index';
import Source from '../source/index';


class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        const theme = this.props.theme;

        return(
            <SiteContent>

                <Section id="home" bg={theme.palette.background.default}>
                    <p>Willkommen Text
                    </p>
                </Section>

            <div className='spacer layer3'></div>

                <Section id="about-me" bg={theme.palette.secondary.main} color={theme.palette.text.coloredSection}>
                    {/* <AboutMe /> */}
                    <AboutMe />
                </Section>

                <div className='spacer layer4'></div>

                <Section id="projects" bg={theme.palette.background.default}>
                    <p>Projekte Text
                    </p>
                </Section>

                <div className='spacer layer1'></div>

                <Section id="source" bg={theme.palette.primary.main} color={theme.palette.text.coloredSection}>
                    {/* <Source /> */}
                    <Source />
                </Section>
                
                <div className='spacer layer2'></div>



            </SiteContent>
        );
    }
}export default withTheme(Home);