import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { MUSICAL_SYMBOLS } from '../../constants/SymbolsData';

export default function SymbolsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Musical Expressions & Volume Dynamics</Text>
      <FlatList
        data={MUSICAL_SYMBOLS}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.symbolBadge}>{item.symbol}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meaning}>{item.meaning}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  heading: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 16 },
  row: { flexDirection: 'row', backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 8, alignItems: 'center' },
  symbolBadge: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary, width: 50, textAlign: 'center' },
  name: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  meaning: { fontSize: 14, color: COLORS.textMuted }
});