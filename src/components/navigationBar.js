import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Grid, Link } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import Drawer from '@mui/material/Drawer';
import { DarkModeToggle } from "react-dark-mode-toggle-2";

import { MenuNavItem, MenuNavItemBold } from './style/navigationBarStyle';
import { useTheme } from "@mui/styles";


export default function NavigationBar(props){
	

	const scrollTo = (id) => {
		console.log(id);
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	}

	const [drawerStatus, setDrawer] = React.useState(false);


	const theme = useTheme();



	return (
		<AppBar position="fixed" color="transparent" elevation={0}>
				<Toolbar disableGutters sx={{backdropFilter: 'blur(10px)', backgroundColor: theme.palette.background.toolbar}}>
					<Grid container spacing={1} sx={{justifyContent: {xs: 'space-between', md: 'center'}}}>
						<Grid item sm={1} md={3} />
						<Grid item sm={3} md={6}>
							<Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, py: 1 , justifyContent: 'space-around' ,alignItems: 'baseline'}}>

								<MenuNavItemBold onClick={()=>scrollTo('home')}>
									Philipp Alber
								</MenuNavItemBold>

								<MenuNavItem onClick={()=>scrollTo('about-me')}>
									Über mich
								</MenuNavItem> 

								<MenuNavItem onClick={()=>scrollTo('projects')}>
									Projekte
								</MenuNavItem>

								<MenuNavItem onClick={()=>scrollTo('source')}>
									Source
								</MenuNavItem>

								<Link color='inherit' href="mailto:info@philippalber.de" underline="none">
									<MenuNavItem>
										Kontakt <EmailIcon />
									</MenuNavItem>
								</Link>

							</Box>

							<Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}, py: 1, px: 2 , justifyContent: 'space-around', alignItems: 'center' }}>

								<MenuNavItemBold onClick={()=>scrollTo('home')}>
									Philipp Alber
								</MenuNavItemBold>

							</Box>
							
						</Grid>
						<Grid item sm={8} md={3}>
							<Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, py: 1 , justifyContent: 'space-around'}}>
								<DarkModeToggle
								onChange={props.changeColorMode}
								isDarkMode={theme.palette.mode === 'dark'}
								size={50}
								/>
							</Box>
							<Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}, px: 1, pr: 3 , justifyContent: 'flex-end' ,alignItems: 'center'}}>

								<DarkModeToggle
									onChange={props.changeColorMode}
									isDarkMode={theme.palette.mode === 'dark'}
									size={50}
								/>

								<IconButton
									onClick={()=>setDrawer(true)}
								>
									<MenuIcon />
								</IconButton>

								<Drawer
									anchor={'top'}
									open={drawerStatus}
									onClose={()=>setDrawer(false)}
								>
									<Box>

										<MenuNavItemBold onClick={()=>scrollTo('home')}>
											Philipp Alber
										</MenuNavItemBold>

										<MenuNavItem onClick={()=>scrollTo('about-me')}>
											Über mich
										</MenuNavItem> 

										<MenuNavItem onClick={()=>{scrollTo('projects')}}>
											Projekte
										</MenuNavItem>

										<MenuNavItem onClick={()=>scrollTo('source')}>
											Source
										</MenuNavItem>

										<Link color='inherit' href="mailto:info@philippalber.de" underline="none">
											<MenuNavItem>
												Kontakt <EmailIcon />
											</MenuNavItem>
										</Link>

									</Box>
								</Drawer>
								

							</Box>
						</Grid>
					</Grid>
				</Toolbar>
		</AppBar>
	);

}