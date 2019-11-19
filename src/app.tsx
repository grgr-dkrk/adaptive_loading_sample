import * as React from 'react';
import { useAdaptive } from './hooks/useAdaptive';

export const App = () => {
  const { effectiveType, saveData, deviceMemory, hardwareConcurrency } = useAdaptive();
  return (
    <section>
      <h2>Status</h2>
      <dl>
        <dt>EffectiveType</dt>
        <dd>{effectiveType}</dd>
        <dt>SaveData</dt>
        <dd>{saveData ? 'true' : 'false'}</dd>
        <dt>deviceMemory</dt>
        <dd>{deviceMemory}</dd>
        <dt>hardwareConcurrency</dt>
        <dd>{hardwareConcurrency}</dd>
      </dl>
    </section>
  );
};
