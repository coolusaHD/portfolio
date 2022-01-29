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

	render() {


		const { theme } = this.props;

	

		return (
			<AppBar position="fixed" color="transparent" elevation={0} >
					<Toolbar disableGutters sx={{backdropFilter: 'blur(10px)', backgroundColor: theme.palette.background.toolbar}}>
						<Grid container spacing={1} alignItems="center">
							<Grid item sm={1} md={3} />
							<Grid item sm={10} md={6}>
								<Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, py: 1 , justifyContent: 'space-around' ,alignItems: 'baseline'}}>

									<Link href="#" underline="none" color="inherit">
										<MenuItemBold>
											Philipp Alber
										</MenuItemBold>
									</Link>
									<Link href="#" underline="hover" color="inherit">
										<MenuItem>
											Über mich
										</MenuItem>
									</Link>
									<Link href="#" underline="hover" color="inherit">
										<MenuItem>
											Projekte
										</MenuItem>
									</Link>
									<Link href="#" underline="hover" color="inherit">
										<MenuItem>
											Source
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