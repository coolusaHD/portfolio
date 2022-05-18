/* eslint-disable react/prop-types */ // will be removed when updating to FC
/* eslint-disable require-jsdoc */
import React from 'react';
/**
 * Render the error fallback component
 *
 * @return {React.ReactElement}
 */
export default function ErrorFallback(): React.ReactElement {
  return (
    <div>
      <h2>Etwas ist schiefgelaufen</h2>
      <h3>Bitte laden Sie die Seite erneut.</h3>
    </div>
  );
}
