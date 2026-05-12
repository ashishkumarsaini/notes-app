import { useNotes } from '@/provider/notes-provider';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NoteCard from './note-card';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <NoteCard title={item.title} content={item.content} updatedAt={item.updatedAt} id={item.id} />
      }}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  )
}

export default NotesList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 120,
  },
  separator: {
    height: 20,
  },
});
