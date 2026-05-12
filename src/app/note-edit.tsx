import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NoteEditScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Note Edit Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B050B',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },
});
