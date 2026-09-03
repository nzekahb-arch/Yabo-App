import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/Colors';
import { useSettings } from '../store/SettingsContext';

export default function SettingsScreen() {
  const { isDarkMode, toggleDarkMode, fontSize, setFontSize, getFontSizeMultiplier } = useSettings();
  const theme = isDarkMode ? DARK_COLORS : LIGHT_COLORS;
  const multiplier = getFontSizeMultiplier();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* 1. Dark Mode Toggle */}
      <View style={[styles.row, { backgroundColor: theme.surface }]}>
        <Text style={[styles.label, { color: theme.text, fontSize: 16 * multiplier }]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: theme.secondary }}
          thumbColor={isDarkMode ? theme.primary : '#f4f3f4'}
        />
      </View>

      {/* 2. Font Size Selector */}
      <Text style={[styles.sectionHeader, { color: theme.textMuted, fontSize: 14 * multiplier }]}>
        FONT SIZE
      </Text>
      <View style={[styles.sizeContainer, { backgroundColor: theme.surface }]}>
        {(['small', 'medium', 'large'] as const).map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              fontSize === size && { backgroundColor: theme.primary },
            ]}
            onPress={() => setFontSize(size)}
          >
            <Text
              style={[
                styles.sizeButtonText,
                { color: fontSize === size ? '#FFFFFF' : theme.text },
              ]}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Preview Box */}
        <View style={[styles.previewBox, { backgroundColor: theme.surface }]}> 
         <Text style={[styles.previewText, { color: theme.text, fontSize: 16 * multiplier }]}>
          Sample Verse: "Yesu mai ceto na, Na zo gare Ka..."
        </Text>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: { fontWeight: '600' },
  sectionHeader: { fontWeight: 'bold', marginBottom: 8, marginLeft: 4 },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 8,
    marginBottom: 20,
  },
  sizeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 4,
  },
  sizeButtonText: { fontWeight: '600' },
  previewBox: { padding: 16, borderRadius: 8, borderLeftWidth: 4, borderLeftColor: '#1A5F7A' },
  previewText: { lineHeight: 24 },
});