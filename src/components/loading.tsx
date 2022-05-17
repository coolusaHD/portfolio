import React from 'react';
import { PongSpinner } from 'react-spinners-kit';
/**
 * Render Laoding Component
 *
 * @return {React.ReactElement}
 */
export default function FallbackLoadingScreen(): React.ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PongSpinner size={100} color="#319da0" loading={true} />
    </div>
  );
}
