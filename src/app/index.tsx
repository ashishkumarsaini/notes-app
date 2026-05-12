import Button from '@/components/button';
import Header from '@/components/header';
import NotesList from '@/components/notes-list';
import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function NotesHomeScreen() {
  const { themeColors } = useTheme();
  const styles = useMemo(() => generateStyles(themeColors), [themeColors]);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.orangeGlowTop} />
      <View style={styles.appShell}>
        <View>
          <Text style={styles.title}>Capture Your Thoughts</Text>
          <Text style={styles.subtitle}>
            Save ideas, plans, and quick notes in one calm place.
          </Text>
        </View>
        <Button onPress={() => {
          router.push({ pathname: '/notes' })
        }}>
          Create New Note
        </Button>
        <View style={styles.list}>
          <NotesList />
        </View>
      </View>
    </View >
  );
}

const generateStyles = (themeColors: ThemeColorsType) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: themeColors.primary,
    padding: 20,
  },
  appShell: {
    alignSelf: 'center',
    borderRadius: 34,
    flex: 1,
    minHeight: 820,
    overflow: 'hidden',
    paddingTop: 20,
    width: '100%',
    maxWidth: 440,
  },
  orangeGlowTop: {
    position: 'absolute',
    left: -80,
    top: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: themeColors.main,
    opacity: 0.28,
  },
  title: {
    color: themeColors.secondary,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 40,
  },
  subtitle: {
    color: themeColors.secondary,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
    maxWidth: 310,
  },
  list: {
    flex: 1,
    marginTop: 16
  }
});
