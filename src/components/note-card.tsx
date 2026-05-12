import { getFormattedDate } from '@/utils/date';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoteCard: FC<{ title: string, content: string, updatedAt: string }> = ({ title, content, updatedAt }) => {

  return (
    <View style={styles.card}>
      <View style={styles.glowSmall} />
      <View style={styles.cardHeader}>
        <View style={styles.timeBadge}>
          <Text style={styles.timeText}>{getFormattedDate(new Date(updatedAt))}</Text>
        </View>
        <View style={styles.iconBadge}>
          <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.content} numberOfLines={3}>
        {content}
      </Text>
    </View>
  )
}

export default NoteCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#120913',
    borderColor: 'rgba(255, 122, 47, 0.54)',
    borderRadius: 22,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 18,
    shadowColor: '#FF6B2C',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.22,
    shadowRadius: 28,
  },
  glowSmall: {
    position: 'absolute',
    left: -55,
    bottom: -60,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#A93218',
    opacity: 0.24,
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  iconBadge: {
    alignItems: 'center',
    backgroundColor: '#FF7A2F',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  timeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  timeText: {
    color: '#F3D4C7',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 30,
  },
  content: {
    color: '#D9C7C0',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  }
})
