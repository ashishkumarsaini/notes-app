import { NotedProvider } from '@/provider/notes-provider';
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <NotedProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" />
      </Stack>
    </NotedProvider>
  );
}
