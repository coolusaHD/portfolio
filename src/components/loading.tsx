import React from 'react';
import { CubeSpinner } from 'react-spinners-kit';
/**
 * Render Laoding Component
 *
 * @return {React.ReactElement}
 */
export default function FallbackLoadingScreen(): React.ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CubeSpinner size={150} frontColor="#319da0" backColor="#000" loading={true} />
    </div>
  );
}
