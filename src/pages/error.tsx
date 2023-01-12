/* eslint-disable react/prop-types */ // will be removed when updating to FC
/* eslint-disable require-jsdoc */
import React from 'react';
import { useTranslation } from 'react-i18next';
/**
 * Render the error fallback component
 *
 * @return {React.ReactElement}
 */
export default function ErrorFallback(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('error.title')}</h2>
      <h3>{t('error.description')}</h3>
    </div>
  );
}
