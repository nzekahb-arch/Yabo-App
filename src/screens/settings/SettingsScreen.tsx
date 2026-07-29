import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode (Coming Soon)</Text>
        <Switch value={false} disabled={true} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Offline Mode Activated</Text>
        <Switch value={true} trackColor={{ true: COLORS.secondary }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 8, justifyContent: 'space-between' },
  label: { fontSize: 16, color: COLORS.text }
});