import React from 'react';
import create from 'zustand';

export const useScrollRefs = create(() => ({
  HomeRef: React.createRef<HTMLDivElement>(),
  AboutMeRef: React.createRef<HTMLDivElement>(),
  SourceRef: React.createRef<HTMLDivElement>(),
  ProjectsRef: React.createRef<HTMLDivElement>(),

  async scrollTo(ref: any) {
    if (ref.current) {
      await ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  },
}));
