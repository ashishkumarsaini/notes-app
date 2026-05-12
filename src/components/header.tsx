import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import { getFormattedDate } from '@/utils/date';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const getCurrentDate = () => {
  const date = new Date();
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const day = date.toLocaleDateString('en-US', { day: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  return `${dayName}, ${day} ${month}`;
};

const Header = () => {
  const todaysData = getFormattedDate(new Date());
  const { onChangeTheme, themeColors } = useTheme();
  const styles = generateStyles(themeColors);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Ionicons name="calendar-outline" size={24} color={themeColors.primary} />
        <Text style={styles.title}>{todaysData}</Text>
      </View>
      <Pressable onPress={onChangeTheme}>
        <FontAwesome5 name="user-circle" size={24} color={themeColors.primary} />
      </Pressable>
    </View>
  )
}

export default Header

const generateStyles = (themeColors: ThemeColorsType) => StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  title: {
    color: themeColors.secondary,
    fontSize: 18,
  },
})
