import React, { Suspense } from 'react';
import NavigationBar from "../components/navigationBar";
import Footer from "./footer";
import { Divider } from "@mui/material";
import { MainSiteContent } from './style/layoutStyle';


import ErrorBoundary from '../pages/error/index';
import {PongSpinner} from 'react-spinners-kit'

const Home = React.lazy(() => import("../pages/home/index"));

const FallbackLoadingScreen = () => {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <PongSpinner 
                size={100}
                color='#319da0'
                loading={true}
            />
        </div>
    )
}

export default function MainLayout(props){

    let HomeRef = React.createRef();
    let AboutMeRef = React.createRef();
    let SourceRef = React.createRef();
    let ProjectsRef = React.createRef();

    async function scrollTo(ref){
        if (ref.current) {
            await ref.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'center'
            });
        }
    }


    return(
        <MainSiteContent>

            <NavigationBar changeColorMode={props.changeColorMode} HomeRef={HomeRef} AboutMeRef={AboutMeRef} SourceRef={SourceRef} ProjectsRef={ProjectsRef} scrollIntoView={scrollTo} />

            <ErrorBoundary>
                <Suspense fallback={<FallbackLoadingScreen/>}>

                    <Home HomeRef={HomeRef} AboutMeRef={AboutMeRef} SourceRef={SourceRef} ProjectsRef={ProjectsRef} />

                </Suspense>
            </ErrorBoundary>

            <Divider flexItem variant="middle"/>

            <Footer />

        </MainSiteContent>
    );
}