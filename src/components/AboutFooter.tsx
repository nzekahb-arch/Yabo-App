import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LIGHT_COLORS } from '../constants/Colors'; // Double-check this path to your colors

export default function AboutFooter() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        DevBona &copy; 2026
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_COLORS.background,
  },
  footerText: {
    fontSize: 15,
    color: LIGHT_COLORS.textMuted,
    letterSpacing: 0.5,
  },
});
