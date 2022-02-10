import React from "react";
import { Box, Link } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Grid} from "@mui/material";


export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        return(
            <Toolbar variant="dense" >
                <Grid container spacing={4} >
                    <Grid item sm={1} md={3} />
                    <Grid item sm={10} md={6} >
                        <Box sx={{ display:'flex', py: 1 , justifyContent: 'center' ,alignItems: 'baseline', gap: 1}}>
                        © 2022 Philipp Alber | All Rights Reserved.
                        </Box>
                    </Grid>
                    <Grid item sm={1} md={3} />
                </Grid>
            </Toolbar>
        );
    }
}