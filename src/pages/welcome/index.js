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

                    <Box sx={{display: 'flex'}}>
                        <Box sx={{width: '40%'}}>

                            <ProfilePictureContainer>

                                <ProfilePicture src={Profile} alt="Profile Picture" />

                            </ProfilePictureContainer>

                        </Box>

                        <Box sx={{width: '60%', mt: '7rem',  backgroundColor: theme.palette.background.paper, p: 2, borderRadius: 2}}>
                            <Description>
                                Front-End Developer, <br/> UI/UX Designer und Web-Entwickler
                            </Description>
                        </Box>

                    </Box>

            </Grid>

            <Grid item xs={1} md={3} />

        </Grid>
    )
}