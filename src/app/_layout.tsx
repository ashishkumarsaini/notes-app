import { RootProvider } from '@/provider/root-provider';
import React from 'react';
import { ScreenStack } from '../components/screen-stack';

export default function RootLayout() {
  return (
    <RootProvider>
      <ScreenStack />
    </RootProvider>
  );
}
