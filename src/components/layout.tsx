import React, { Suspense } from 'react';
import NavigationBar from './navigationBar';
import Footer from './footer';
import { Divider } from '@mui/material';
import { MainSiteContent } from './style/layoutStyle';
import ErrorFallback from '../pages/error';
import { ErrorBoundary } from 'react-error-boundary';

import { lazily } from 'react-lazily';
import FallbackLoadingScreen from './loading';

const { Home } = lazily(() => import('../pages'));

/**
 *
 * @param {MainLayoutProps} props
 * @return {React.ReactElement}
 */
export default function MainLayout(): React.ReactElement {
  return (
    <MainSiteContent>
      <NavigationBar />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<FallbackLoadingScreen />}>
          <Home />
        </Suspense>
      </ErrorBoundary>

      <Divider flexItem variant="middle" />

      <Footer />
    </MainSiteContent>
  );
}
