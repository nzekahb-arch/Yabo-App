import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function MessageScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.greeting}>Welcome & Foreword</Text>
        <Text style={styles.author}>By Bro. Kuje Julius</Text>
        <Text style={styles.body}>
          Welcome to the Yabo da Murna Hymn collection. This digital compilation has been prepared to elevate our corporate worship and ease access to beautiful lyrics and melodies that have preserved our faith through ages.{"\n\n"}
          May your heart be filled with praise as you sing along in spirit and truth. Use the integrated tools to understand the pacing, timing, and structure of each composition.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  author: { fontSize: 14, fontStyle: 'italic', color: COLORS.textMuted, marginBottom: 16 },
  body: { fontSize: 16, lineHeight: 24, color: COLORS.text }
});