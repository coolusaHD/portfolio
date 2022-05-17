import React from 'react';
import create from 'zustand';

export const useScrollRefs = create(() => ({
  HomeRef: React.createRef<HTMLDivElement>(),
  AboutMeRef: React.createRef<HTMLDivElement>(),
  SourceRef: React.createRef<HTMLDivElement>(),
  ProjectsRef: React.createRef<HTMLDivElement>(),

  scrollTo(ref: any) {
    console.log('triggered');
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  },
}));
