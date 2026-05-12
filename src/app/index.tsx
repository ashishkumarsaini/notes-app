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
      {/* <View style={styles.orangeGlowTop} />
      <View style={styles.orangeGlowMiddle} /> */}
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
        <NotesList />
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
  orangeGlowMiddle: {
    position: 'absolute',
    right: -80,
    top: 235,
    width: 260,
    height: 300,
    borderRadius: 130,
    backgroundColor: '#FF6B2C',
    opacity: 0.34,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 28,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  menuLine: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    height: 2,
    marginVertical: 3,
    width: 19,
  },
  menuLineShort: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    height: 2,
    marginVertical: 3,
    width: 13,
  },
  bellTop: {
    borderColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    height: 14,
    width: 16,
  },
  bellBody: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    height: 2,
    marginTop: 1,
    width: 22,
  },
  bellDot: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    height: 5,
    marginTop: 2,
    width: 5,
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
  searchCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 126, 48, 0.28)',
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 16,
  },
  searchInput: {
    color: '#FFFFFF',
    fontSize: 16,
    height: 52,
    paddingHorizontal: 18,
  },
  featureCard: {
    borderColor: '#D76137',
    borderRadius: 18,
    borderWidth: 1,
    minHeight: 212,
    overflow: 'hidden',
    padding: 18,
  },
  featureGlow: {
    position: 'absolute',
    right: -10,
    top: 0,
    width: 150,
    height: 220,
    backgroundColor: '#FF6B2C',
    opacity: 0.55,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    lineHeight: 35,
    maxWidth: 245,
  },
  featureText: {
    color: '#D6CACA',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 14,
    maxWidth: 280,
  },
  quickGrid: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 16,
  },
  quickCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 126, 48, 0.55)',
    borderRadius: 12,
    borderWidth: 1,
    flex: 1,
    minHeight: 168,
    padding: 14,
  },
  roundIcon: {
    alignItems: 'center',
    backgroundColor: '#FF7A2F',
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    marginBottom: 28,
    width: 44,
  },
  roundIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  quickTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  quickText: {
    color: '#D6CACA',
    fontSize: 14,
    lineHeight: 18,
    maxWidth: 120,
  },
  arrowText: {
    bottom: 16,
    color: '#FF7A2F',
    fontSize: 30,
    fontWeight: '300',
    position: 'absolute',
    right: 18,
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
});
