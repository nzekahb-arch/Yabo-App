import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { SOLFA_RULES } from '../../constants/SymbolsData';

export default function SolfaGuideScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sol-fa Notation Basics</Text>
      <FlatList
        data={SOLFA_RULES}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>{item.rule}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  heading: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 16 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 12 },
  code: { fontSize: 16, fontWeight: 'bold', color: COLORS.secondary, fontFamily: 'monospace', marginBottom: 4 },
  title: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 2 },
  detail: { fontSize: 14, color: COLORS.textMuted }
});