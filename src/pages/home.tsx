import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/styles';
import { SiteContent, Section, ScrollIndicator } from '../assets/styles/globalStyle';
import '../assets/styles/background.css';
import { lazily } from 'react-lazily';
import { useScrollRefs } from '../hooks/useScrollRefs';
import { customTheme } from '../types/global';

const { AboutMe, Source, Projects, Welcome } = lazily(() => import('../pages'));

/**
 *  Render Home Component
 *
 * @return {React.ReactElement}
 */
export default function Home(): React.ReactElement {
  const theme: customTheme = useTheme();

  // eslint-disable-next-line
  const [offset, setOffset] = useState(0);

  const { HomeRef, AboutMeRef, SourceRef, ProjectsRef } = useScrollRefs();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <SiteContent>
      <Section ref={HomeRef} id="home" bg={theme.palette.background.default}>
        <Welcome />
      </Section>

      <ScrollIndicator opacity={window.scrollY / 3 < 1000 ? (window.scrollY / 3 - 100) * -1 : 0} color={theme.palette.text.primary} />

      <div className="spacer layer3"></div>

      <Section ref={AboutMeRef} id="about-me" bg={theme.palette.secondary.main} color={theme.palette.text.coloredSection}>
        {/* <AboutMe /> */}
        <AboutMe />
      </Section>

      <div className="spacer layer4"></div>

      <Section ref={ProjectsRef} id="projects" bg={theme.palette.background.default}>
        <Projects />
      </Section>

      <div className="spacer layer1"></div>

      <Section ref={SourceRef} id="source" bg={theme.palette.primary.main} color={theme.palette.text.coloredSection}>
        {/* <Source /> */}
        <Source />
      </Section>

      <div className="spacer layer2"></div>
    </SiteContent>
  );
}
