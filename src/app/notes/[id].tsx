import { Form } from '@/components/form';
import { useNotes } from '@/provider/notes-provider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function NoteEditScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { updateNote, notes } = useNotes();


  const handleSave = (title: string, content: string) => {
    const noteId = Array.isArray(id) ? id[0] : id;

    if (!noteId) {
      return;
    }

    updateNote(noteId, title.trim(), content.trim());
    router.back();
  };

  const note = notes.find(({ id: noteId }) => noteId === id)

  if (!note) {
    return <View>
      <Text>No Note Found</Text>
    </View>
  }

  return (
    <Form defaultValue={note} onSubmit={handleSave} buttonLabel="Update Note" />
  );
}
