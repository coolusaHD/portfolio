import React, { Suspense } from 'react';
import NavigationBar from './navigationBar';
import Footer from './footer';
import { Divider } from '@mui/material';
import { MainSiteContent } from './style/layoutStyle';

import ErrorBoundary from '../pages/error/index';
import { PongSpinner } from 'react-spinners-kit';

const Home = React.lazy(() => import('../pages/home/index'));

const FallbackLoadingScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PongSpinner size={100} color="#319da0" loading={true} />
    </div>
  );
};

interface MainLayoutProps {
  changeColorMode: () => void;
}

/**
 *
 * @param {MainLayoutProps} props
 * @return {React.Element}
 */
export default function MainLayout(props: MainLayoutProps): React.Element {
  const HomeRef = React.createRef();
  const AboutMeRef = React.createRef();
  const SourceRef = React.createRef();
  const ProjectsRef = React.createRef();

  /**
   * Scroll to the given ref
   *
   * @param {React.RefObject} ref
   */
  async function scrollTo(ref: React.Ref<T>) {
    console.log('triggered');
    if (ref.current) {
      await ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }

  return (
    <MainSiteContent>
      <NavigationBar
        changeColorMode={props.changeColorMode}
        HomeRef={HomeRef}
        AboutMeRef={AboutMeRef}
        SourceRef={SourceRef}
        ProjectsRef={ProjectsRef}
        scrollIntoView={scrollTo}
      />

      <ErrorBoundary>
        <Suspense fallback={<FallbackLoadingScreen />}>
          <Home HomeRef={HomeRef} AboutMeRef={AboutMeRef} SourceRef={SourceRef} ProjectsRef={ProjectsRef} />
        </Suspense>
      </ErrorBoundary>

      <Divider flexItem variant="middle" />

      <Footer />
    </MainSiteContent>
  );
}
