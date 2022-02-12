import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import ErrorBoundary from './pages/error/index';
import MainLayout from "./components/layout";

import {PongSpinner} from 'react-spinners-kit'

const Home = React.lazy(() => import("./pages/home/index"));

const FallbackLoadingScreen = () => {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            Hallo
            <PongSpinner 
                size={300}
                color='#319da0'
                loading={true}
            />
        </div>
    )
}



export default(
    <ErrorBoundary>
        <Suspense fallback={FallbackLoadingScreen}>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            {FallbackLoadingScreen}
        </Suspense>
    </ErrorBoundary>
)


