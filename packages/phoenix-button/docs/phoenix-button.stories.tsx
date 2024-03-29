import React from 'react';
// We want to always get from source
import { Button } from '../src/phoenix-button';

export default { title: 'Button' };

export const primary = () => <Button>Hello Button</Button>;

export const secondary = () => (
  <div style={{ background: '#1652f0', padding: 12 }}>
    <Button variant="secondary">Hello Button</Button>
  </div>
);
