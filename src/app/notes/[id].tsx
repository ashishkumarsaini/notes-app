import { Form } from '@/components/form';
import { useNotes } from '@/provider/notes-provider';
import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function NoteEditScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { updateNote, notes } = useNotes();
  const { themeColors } = useTheme()


  const handleSave = (title: string, content: string) => {
    const noteId = Array.isArray(id) ? id[0] : id;

    if (!noteId) {
      return;
    }

    updateNote(noteId, title.trim(), content.trim());
    router.back();
  };

  const note = notes.find(({ id: noteId }) => noteId === id)
  const styles = useMemo(() => generateStyles(themeColors), [themeColors.primary])

  if (!note) {
    return <View>
      <Text>No Note Found</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.glow} />
      <View style={styles.header}>
        <View>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-sharp" size={20} color={themeColors.main} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.eyebrow}>Edit Note</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Update the note</Text>
        <Form defaultValue={note} onSubmit={handleSave} buttonLabel="Update Note" />
      </View>
    </View>
  );
}

const generateStyles = (themeColors: ThemeColorsType) => StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: themeColors.primary,
  },
  glow: {
    position: 'absolute',
    right: -90,
    top: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: themeColors.main,
    opacity: 0.18,
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: "rgba(251, 146, 60, 0.08)",
    height: 48,
    padding: 4,
    width: 48,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    marginBottom: 24,
    marginTop: 16,
    paddingInline: 20,
  },
  eyebrow: {
    color: themeColors.main,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: themeColors.secondary,
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 38,
  },
  helperText: {
    color: themeColors.secondary,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
    opacity: 0.72,
  },
  formContainer: {
    padding: 20
  }
})
