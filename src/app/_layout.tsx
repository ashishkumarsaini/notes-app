import { NotedProvider } from '@/provider/notes-provider';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <NotedProvider>
      <SafeAreaView style={styles.safeArea}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="note-edit" />
        </Stack>
      </SafeAreaView>
    </NotedProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B050B',
  },
});
