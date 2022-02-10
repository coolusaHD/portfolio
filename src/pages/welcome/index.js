import React, { Profiler } from 'react';
import { Container, ColoredText, ProfilePicture, ProfilePictureContainer, Description } from './style/welcomeStyle.js'
import { Box, Link } from '@mui/material';
import { Grid, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import MuiLogo from '../../images/mui_logo.png';
import ReactLogo from '../../images/react_logo.png';
import StyledComponentsLogo from '../../images/styled-components_logo.png';
import { useTheme } from '@mui/material/styles';

import Profile from '../../images/profile.png';


export default function Welcome(props){

    const theme = useTheme();

    return(
        <Grid container spacing={3}>
            <Grid item xs={1} md={3} />

            <Grid item xs={10} md={6}>

                
                    <Typography variant="h1">
                        Willkommen 
                    </Typography>

                    <Typography align='right' variant="h2">
                        auf meinem <ColoredText color={theme.palette.secondary.main}>Portfolio</ColoredText>
                    </Typography>

                    <Typography color='primary' align='right' variant="h6" sx={{fontWeight: '300'}}>
                        by Philipp Alber
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>

                            <ProfilePictureContainer>

                                <ProfilePicture src={Profile} alt="Profile Picture" />

                            </ProfilePictureContainer>

                        </Grid>

                        <Grid item xs={12} md={8} sx={{p: 2, mt:{xs: 0, md: 10}}}>
                            <Description>
                                Full-Stack Developer, <br/> UI/UX Designer und Web-Entwickler
                            </Description>
                        </Grid>

                    </Grid>

            </Grid>

            <Grid item xs={1} md={3} />

        </Grid>
    )
}