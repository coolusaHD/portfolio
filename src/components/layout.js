import { Button } from "@mui/material";
import React from "react";
import NavigationBar from "../components/navigationBar";
import routes from "../routes";
import Footer from "./footer";
import { withTheme } from '@mui/styles';
import { Divider } from "@mui/material";
import { MainSiteContent } from './style/layoutStyle';

class MainLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        return(
            <MainSiteContent>
                <NavigationBar changeColorMode={this.props.changeColorMode} />
                {routes}
                <Divider flexItem variant="middle"/>
                <Footer />
            </MainSiteContent>
        );
    }
}export default withTheme(MainLayout);