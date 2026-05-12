import { Form } from '@/components/form';
import { useNotes } from '@/provider/notes-provider';
import { router } from 'expo-router';
import React from 'react';

export default function NoteCreateScreen() {
  const { createNote } = useNotes();

  const handleSave = (title: string, content: string) => {
    createNote(title, content);
    router.back()
  }

  return (
    <Form onSubmit={handleSave} buttonLabel="Create Note" />
  );
}

