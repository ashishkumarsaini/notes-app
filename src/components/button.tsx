import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: ButtonProps) => {
  const { themeColors } = useTheme();
  const styles = generateStyles(themeColors);

  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
};

export default Button

const generateStyles = (themeColors: ThemeColorsType) => StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: themeColors.main,
    borderRadius: 24,
    marginTop: 22,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  pressed: {
    opacity: 0.76,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  }
});