import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Grid, Link } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

import { DarkModeToggle } from "react-dark-mode-toggle-2";

import { MenuItem, MenuItemBold } from './style/navigationBarStyle';
import { withTheme } from "@mui/styles";


class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		}
	}

	scrollTo = (id) => {
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	}




	render() {


		const { theme } = this.props;

	

		return (
			<AppBar position="fixed" color="transparent" elevation={0} >
					<Toolbar disableGutters sx={{backdropFilter: 'blur(10px)', backgroundColor: theme.palette.background.toolbar}}>
						<Grid container spacing={1} alignItems="center">
							<Grid item sm={1} md={3} />
							<Grid item sm={10} md={6}>
								<Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, py: 1 , justifyContent: 'space-around' ,alignItems: 'baseline'}}>

									<MenuItemBold onClick={()=>this.scrollTo('home')}>
										Philipp Alber
									</MenuItemBold>

									<MenuItem onClick={()=>this.scrollTo('about-me')}>
										Über mich
									</MenuItem> 

									<MenuItem onClick={()=>this.scrollTo('projects')}>
										Projekte
									</MenuItem>

									<MenuItem onClick={()=>this.scrollTo('source')}>
										Source
									</MenuItem>

									<Link color='inherit' href="mailto:info@philippalber.de" underline="none">
										<MenuItem>
											Kontakt <EmailIcon />
										</MenuItem>
									</Link>

								</Box>
							</Grid>
							<Grid item sm={1} md={3}>
								<Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, py: 1 , justifyContent: 'space-around'}}>
									<DarkModeToggle
									onChange={this.props.changeColorMode}
									isDarkMode={this.props.theme.palette.mode === 'dark'}
									size={50}
									/>
								</Box>
							</Grid>
						</Grid>
					</Toolbar>
			</AppBar>
		);
	}
}export default withTheme(NavigationBar);