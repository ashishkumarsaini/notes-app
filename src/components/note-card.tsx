import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NoteCard: FC<{ title: string, content: string, updatedAt: string }> = ({ title, content, updatedAt }) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureGlow} />
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureText}>
        {content}
      </Text>
      <Text style={styles.featureText}>
        {updatedAt}
      </Text>
    </View>
  )
}

export default NoteCard

const styles = StyleSheet.create({
  featureCard: {
    borderColor: '#D76137',
    borderRadius: 18,
    borderWidth: 1,
    minHeight: 212,
    overflow: 'hidden',
    padding: 18,
  },
  featureGlow: {
    position: 'absolute',
    right: -10,
    top: 0,
    width: 150,
    height: 220,
    backgroundColor: '#FF6B2C',
    opacity: 0.55,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    lineHeight: 35,
    maxWidth: 245,
  },
  featureText: {
    color: '#D6CACA',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 14,
    maxWidth: 280,
  },
})