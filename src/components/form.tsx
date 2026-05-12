import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import { FC, useMemo, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./button";

export const Form: FC<{
  defaultValue?: { title: string, content: string },
  onSubmit: (title: string, content: string) => void,
  buttonLabel: string
}> = ({ onSubmit, defaultValue = { title: '', content: '' }, buttonLabel }) => {
  const [note, setNote] = useState(defaultValue);
  const { themeColors } = useTheme()
  const styles = useMemo(() => generateStyles(themeColors), [themeColors.primary])

  const onChange = (fieldName: string, fieldValue: string) => {
    setNote((prevValue) => ({
      ...prevValue,
      [fieldName]: fieldValue
    }))
  }

  return (
    <KeyboardAvoidingView>
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
    fontSize: 15,
    fontWeight: '500',
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
