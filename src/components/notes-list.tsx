import { useNotes } from '@/provider/notes-provider';
import React from 'react';
import { FlatList, View } from 'react-native';
import NoteCard from './note-card';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <FlatList scrollEnabled={true} data={notes} renderItem={({ item }) => {
      return <NoteCard title={item.title} content={item.content} updatedAt={item.updatedAt} />
    }}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  )
}

export default NotesList;