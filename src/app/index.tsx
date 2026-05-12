import Button from '@/components/button';
import Header from '@/components/header';
import NotesList from '@/components/notes-list';
import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

const recentNotes = [
  {
    title: 'Project Ideas',
    meta: '12 thoughts saved',
    time: 'Edited 18 min',
  },
  {
    title: 'Reading Notes',
    meta: '8 key takeaways',
    time: 'Edited 1 hr',
  },
];

export default function NotesHomeScreen() {
  const { width } = useWindowDimensions();
  const isWide = width > 520;

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
        <Button onPress={() => alert('new note')}>
          Create New Note
        </Button>
        <View style={styles.list}>
          <NotesList />
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0B050B',
    padding: 20,
  },
  appShell: {
    alignSelf: 'center',
    borderRadius: 34,
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
    backgroundColor: '#FF6B2C',
    opacity: 0.28,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 40,
  },
  subtitle: {
    color: '#D6CACA',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
    maxWidth: 310,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
    marginTop: 34,
  },
  noteCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderColor: 'rgba(255, 126, 48, 0.48)',
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
    minHeight: 150,
    overflow: 'hidden',
    padding: 18,
  },
  noteGlow: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 160,
    height: 110,
    borderRadius: 70,
    backgroundColor: '#FF6B2C',
    opacity: 0.35,
  },
  noteTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 25,
  },
  noteMeta: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 12,
  },
  noteFooter: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  noteTime: {
    color: '#C8BABA',
    fontSize: 13,
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '300',
  },
  pressed: {
    opacity: 0.76,
    transform: [{ scale: 0.98 }],
  },
  list: {
    marginTop: 16
  }
});
