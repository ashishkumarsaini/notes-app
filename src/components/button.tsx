import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
};

export default Button

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FF7A2F',
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