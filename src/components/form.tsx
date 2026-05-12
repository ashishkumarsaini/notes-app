import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { FC, useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./button";

export const Form: FC<{
  defaultValue?: { title: string, content: string },
  onSubmit: (title: string, content: string) => void,
  buttonLabel: string
}> = ({ onSubmit, defaultValue = { title: '', content: '' }, buttonLabel }) => {
  const [note, setNote] = useState(defaultValue);

  const router = useRouter();
  const { themeColors } = useTheme()
  const styles = generateStyles(themeColors)

  const onChange = (fieldName: string, fieldValue: string) => {
    setNote((prevValue) => ({
      ...prevValue,
      [fieldName]: fieldValue
    }))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}>
      <View style={styles.glow} />
      <View style={styles.header}>
        <View>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-sharp" size={20} color={themeColors.main} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.eyebrow}>Create Note</Text>
          <Text style={styles.title}>Create your note</Text>
        </View>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={note.title}
          onChangeText={(text) => onChange('title', text)}
          placeholder="Note title"
          placeholderTextColor={themeColors.secondary}
          style={styles.titleInput}
        />
        <Text style={styles.label}>Content</Text>
        <TextInput
          value={note.content}
          onChangeText={(text) => onChange('content', text)}
          multiline
          placeholder="Write your note"
          placeholderTextColor={themeColors.secondary}
          style={styles.contentInput}
          textAlignVertical="top"
        />
        <Button onPress={() => onSubmit(note.title, note.content)} disabled={!note.title.trim() || !note.content.trim()}>
          {buttonLabel}
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}

const generateStyles = (themeColors: ThemeColorsType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.primary,
    padding: 20,
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
  formCard: {
    shadowColor: themeColors.main,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.18,
    shadowRadius: 28,
  },
  label: {
    color: themeColors.secondary,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 10,
  },
  titleInput: {
    borderColor: 'rgba(251, 146, 60, 0.46)',
    borderRadius: 16,
    borderWidth: 1,
    color: themeColors.secondary,
    fontSize: 20,
    fontWeight: '700',
    minHeight: 58,
    paddingHorizontal: 14,
  },
  contentInput: {
    borderColor: 'rgba(251, 146, 60, 0.46)',
    borderRadius: 16,
    borderWidth: 1,
    color: themeColors.secondary,
    fontSize: 16,
    lineHeight: 24,
    minHeight: 230,
    padding: 14,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: themeColors.main,
    borderRadius: 24,
    marginTop: 20,
    paddingVertical: 14,
  },
  saveButtonDisabled: {
    opacity: 0.45,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
});
