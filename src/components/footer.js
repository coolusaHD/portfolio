import React from "react";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";



export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        return(
            
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Box>
                    Footer
                </Box>
            </Toolbar>
        );
    }
}