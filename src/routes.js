import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import ErrorBoundary from './pages/error/index';
import MainLayout from "./components/layout";

const Home = React.lazy(() => import("./pages/home/index"));


export default(
    <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Suspense>
    </ErrorBoundary>
)


