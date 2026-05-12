import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const getCurrentDate = () => {
  const date = new Date();
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const day = date.toLocaleDateString('en-US', { day: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  return `${dayName}, ${day} ${month}`;
};

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Ionicons name="calendar-outline" size={24} color="#FF7A2F" />
        <Text style={styles.title}>{getCurrentDate()}</Text>
      </View>
      <View>
        <FontAwesome5 name="user-circle" size={24} color="#FF7A2F" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#0B050B',
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
    color: '#FFFFFF',
    fontSize: 18
  },
})
