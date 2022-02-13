import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Link } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import Drawer from '@mui/material/Drawer';
import { DarkModeToggle } from "react-dark-mode-toggle-2";

import { MenuNavItem, MenuNavItemBold } from './style/navigationBarStyle';
import { useTheme } from "@mui/styles";


export default function NavigationBar(props){
	

	const scrollTo = props.scrollIntoView;
	const HomeRef = props.HomeRef;
	const AboutMeRef = props.AboutMeRef;
	const SourceRef = props.SourceRef;
	const ProjectsRef = props.ProjectsRef;

	const [drawerStatus, setDrawer] = React.useState(false);

	const theme = useTheme();

	const scrollWithCloseDrawer = (ref) => {
		setTimeout(() => {
			scrollTo(ref);
		}, 10);
		setDrawer(false);
	}


	return (
		<AppBar position="fixed" color="transparent" elevation={0}>
				<Toolbar disableGutters sx={{backdropFilter: 'blur(10px)', backgroundColor: theme.palette.background.toolbar}}>
					<Grid container spacing={1} sx={{justifyContent: {xs: 'space-between', md: 'center'}}}>
						<Grid item sm={1} md={3} />
						<Grid item sm={3} md={6}>
							<Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, py: 1 , justifyContent: 'space-around' ,alignItems: 'baseline'}}>

								<MenuNavItemBold onClick={()=>scrollTo(HomeRef)}>
									Philipp Alber
								</MenuNavItemBold>

								<MenuNavItem onClick={()=>scrollTo(AboutMeRef)}>
									Über mich
								</MenuNavItem> 

								<MenuNavItem onClick={()=>scrollTo(ProjectsRef)}>
									Projekte
								</MenuNavItem>

								<MenuNavItem onClick={()=>scrollTo(SourceRef)}>
									Source
								</MenuNavItem>

								<Link color='inherit' href="mailto:info@philippalber.de" underline="none">
									<MenuNavItem>
										Kontakt <EmailIcon />
									</MenuNavItem>
								</Link>

							</Box>

							<Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}, py: 1, px: 2 , justifyContent: 'space-around', alignItems: 'center' }}>

								<MenuNavItemBold onClick={()=>scrollTo(HomeRef)}>
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
									PaperProps={{style:{backgroundColor:'transparent'}}}
									SlideProps={{easing: 'ease-in-out'}}
								>
									<Box sx={{display: 'flex', p:2, flexDirection: 'column', alignItems: 'center', gap: 2, backdropFilter: 'blur(10px)', backgroundColor: theme.palette.background.mobileDrawerMenu}}>

										<MenuNavItem>
											<IconButton onClick={()=>setDrawer(false)}>
												<CloseIcon />
											</IconButton>
										</MenuNavItem>

										<MenuNavItemBold onClick={()=>scrollWithCloseDrawer(HomeRef)}>
											Philipp Alber
										</MenuNavItemBold>

										<MenuNavItem onClick={()=>scrollWithCloseDrawer(AboutMeRef)}>
											Über mich
										</MenuNavItem> 

										<MenuNavItem onClick={()=>{scrollWithCloseDrawer(ProjectsRef)}}>
											Projekte
										</MenuNavItem>

										<MenuNavItem onClick={()=>scrollWithCloseDrawer(SourceRef)}>
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