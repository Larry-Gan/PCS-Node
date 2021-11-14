import React from 'react';
import { HeaderXl } from 'src/components';
import { SEO } from 'src/containers';
import { CorrectionsLayout } from 'src/containers/Layout/CorrectionsLayout';

const Corrections: React.FC = () => {
  return (
    <CorrectionsLayout>
      <SEO title="Corrections" />
      <HeaderXl>Corrections</HeaderXl>
      <p>This is a template site made with NextJS. </p>
    </CorrectionsLayout>
  );
};

export default Corrections;
