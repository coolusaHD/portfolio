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
                <Grid container sapcing={4} >
                    <Grid item sm={1} md={3} />
                    <Grid item sm={6} md={4}>
                        <Box sx={{ flexGrow: 1, display:'flex', py: 1 , justifyContent: 'flex-start' ,alignItems: 'baseline'}}>
                        © 2022 Philipp Alber. All Rights Reserved.
                        </Box>
                    </Grid>
                    <Grid item sm={3} md={2}>
                        <Box sx={{ flexGrow: 1, display: 'flex', py: 1 , justifyContent: 'space-around' ,alignItems: 'baseline', gap: 1}}>
                            <Link href="#" underline="none">
                                Impressum
                            </Link>
                            <Link href="#" underline="none">
                                Datenschutz
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item sm={1} md={3} />
                </Grid>
            </Toolbar>
        );
    }
}