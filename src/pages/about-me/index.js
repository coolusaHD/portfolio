import React from 'react';
import { AboutMeContainer, AboutMeDescription } from './style/aboutMeStyle.js'
import { Link } from '@mui/material';
import { Grid, Typography } from '@mui/material';


export default function AboutMe(props){

    return(
        <Grid container spacing={3}>
            <Grid item xs={1} md={3} />

            <Grid item xs={10} md={6}>

                <AboutMeContainer>
                    <Typography variant="h2">
                        Über mich:
                    </Typography>

                    <br />

                    <Typography variant="h5">
                        Hallo 👋 Ich bin Philipp
                    </Typography>
                    <AboutMeDescription>
                        Ich bin 20 Jahre alt und studiere Informatik an der <Link color='inherit' href="https://uni-tuebingen.de/" underline="always">Eberhard Karls Universität</Link> in Tübingen.
                        <br />
                        <br />
                        Seit ich 16 bin, programmiere ich leidenschaftlich Websiten. Mit den Jahren habe ich durch verschiedenste Projekte immer mehr
                        Erfahrungen in Programmiersprachen und Entwicklung von Web-Applikation gesammelt.
                        <br />
                        <br />
                        Außerhalb meiner IDE findet man mich auch gerne auf dem Fussballfeld oder der Skipiste mit meinen Freunden.
                    </AboutMeDescription>


                </AboutMeContainer>

            </Grid>

            <Grid item xs={1} md={3} />

        </Grid>
    )
}