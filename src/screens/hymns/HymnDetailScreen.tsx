import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/Colors';
import { useSettings } from '../store/SettingsContext';

export default function HymnDetailScreen({ route }: any) {
  const { hymn } = route.params;
  const { isDarkMode, getFontSizeMultiplier } = useSettings();

  const theme = isDarkMode ? DARK_COLORS : LIGHT_COLORS;
  const multiplier = getFontSizeMultiplier();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.surface }]} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={[styles.meta, { color: theme.textMuted, fontSize: 14 * multiplier }]}>
        {hymn.category} • Hymn #{hymn.number}
      </Text>
      <Text style={[styles.title, { color: theme.primary, fontSize: 24 * multiplier }]}>
        {hymn.title}
      </Text>

      {hymn.chorus ? (
        <View style={[styles.chorusBox, { backgroundColor: isDarkMode ? '#2A2A2A' : '#F0F7F9' }]}>
          <Text style={[styles.chorusTitle, { color: theme.primary, fontSize: 16 * multiplier }]}>Chorus:</Text>
          <Text style={[styles.chorusText, { color: theme.text, fontSize: 17 * multiplier, lineHeight: 26 * multiplier }]}>
            {hymn.chorus}
          </Text>
        </View>
      ) : null}

      {hymn.verses.map((verse: string, index: number) => (
        <View key={index} style={styles.verseBox}>
          <Text style={[styles.verseNumber, { color: theme.primary, fontSize: 16 * multiplier }]}>
            {index + 1}.
          </Text>
          <Text style={[styles.verseText, { color: theme.text, fontSize: 17 * multiplier, lineHeight: 26 * multiplier }]}>
            {verse}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  meta: { textTransform: 'uppercase', marginBottom: 4 },
  title: { fontWeight: 'bold', marginBottom: 20 },
  chorusBox: { padding: 16, borderRadius: 8, marginBottom: 24, borderLeftWidth: 4, borderLeftColor: '#1A5F7A' },
  chorusTitle: { fontWeight: 'bold', marginBottom: 4 },
  chorusText: { fontStyle: 'italic' },
  verseBox: { flexDirection: 'row', marginBottom: 20, alignItems: 'flex-start' },
  verseNumber: { fontWeight: 'bold', marginRight: 10, marginTop: 2 },
  verseText: { flex: 1 },
});