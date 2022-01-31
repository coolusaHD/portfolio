import React from 'react';
import { Container, Description, SourceItem, SourceImage, SourceImageContainer } from './style/sourceStyle.js'
import { Link } from '@mui/material';
import { Grid, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import MuiLogo from '../../images/mui_logo.png';
import ReactLogo from '../../images/react_logo.png';
import StyledComponentsLogo from '../../images/styled-components_logo.png';


export default function Source(props){

    return(
        <Grid container spacing={3}>
            <Grid item xs={1} md={3} />

            <Grid item xs={10} md={6}>

                <Container>
                    <Typography variant="h2">
                        Source Pakete
                    </Typography>

                    <br />

                    <Typography variant="h5">
                        Diese Website wurde mitfolgenden Paketen und Weiteren enwickelt:
                    </Typography>
                    <Typography variant="h6">
                        Alle Pakete und den kompletten Quellcode findet ihr auf <Link color='inherit' href="https://github.com/coolusaHD/portfolio" target="_blank" rel="noreferrer">GitHub</Link>.
                    </Typography>
                    <br />
                    <br />

                    <Description>
                        <SourceItem>

                            <Tooltip title="React" arrow placement="top" >
                                <SourceImageContainer onClick={()=>{window.open("https://reactjs.org/")}}>
                                    <SourceImage src={ReactLogo} alt="React Logo" />
                                </SourceImageContainer>
                            </Tooltip>

                            <Tooltip title="MUI" arrow placement="top" >    
                                <SourceImageContainer onClick={()=>{window.open("https://mui.com/")}}>
                                    <SourceImage src={MuiLogo} alt="Mui Logo" />
                                </SourceImageContainer>
                            </Tooltip>

                            <Tooltip title="Styled Components" arrow placement="top" > 
                                <SourceImageContainer onClick={()=>{window.open("https://styled-components.com/")}}>
                                    <SourceImage src={StyledComponentsLogo} alt="Styled Components Logo" />
                                </SourceImageContainer>
                            </Tooltip>

                        </SourceItem>

                        <Button 
                            variant='contained' 
                            color='secondary' 
                            startIcon={<GitHubIcon />} 
                            onClick={()=>{window.open("https://github.com/coolusaHD/portfolio")}} 
                        >
                            Zum Github Repository
                        </Button>

                    </Description>


                </Container>

            </Grid>

            <Grid item xs={1} md={3} />

        </Grid>
    )
}