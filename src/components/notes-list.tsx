import { useNotes } from '@/provider/notes-provider';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import NoteCard from './note-card';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <FlatList scrollEnabled={true} data={notes} renderItem={({ item }) => {
      return <NoteCard title={item.title} content={item.content} updatedAt={item.updatedAt} />
    }} />
  )
}

export default NotesList

const styles = StyleSheet.create({
  noteItem: {
    borderColor: '#FF7A2F',
    color: 'pink',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 16,
  }
})