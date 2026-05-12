import { ThemeColorsType, useTheme } from '@/provider/theme-provider';
import { getFormattedDate } from '@/utils/date';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useMemo } from 'react';
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
  const styles = useMemo(() => generateStyles(themeColors), [themeColors.primary]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Ionicons name="calendar-outline" size={24} color={themeColors.main} />
        <Text style={styles.title}>{todaysData}</Text>
      </View>
      <Pressable onPress={onChangeTheme}>
        <MaterialCommunityIcons name="theme-light-dark" size={24} color={themeColors.main} />
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
