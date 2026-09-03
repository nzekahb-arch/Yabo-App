import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AboutFooter from '../../components/AboutFooter';
import { COLORS } from '../../constants/Colors';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.greeting}>Welcome Yabo da Murna App</Text>
        <Text style={styles.author}>built by Nzekah Bonaventure</Text>
        <Text style={styles.body}>
          This app is designed to provide a seamless experience for users to access hymns and related content. It features a user-friendly interface, dark mode support, and customizable font sizes to enhance readability. Enjoy exploring the hymns and may your experience be uplifting!{'\n\n'}
          This mobile app is developed from the hard copy of the Yabo da Murna Hymn book compiled by the Catholic Archdiocese of Kaduna{'\n\n'}The app is built with React Native and TypeScript, ensuring a smooth and responsive user experience across both Android and iOS platforms. We hope you find this app useful and enjoyable!
        </Text>
      </View>
      <AboutFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  author: { fontSize: 16, fontStyle: 'italic', color: COLORS.textMuted, marginBottom: 16 },
  body: { fontSize: 18, lineHeight: 24, color: COLORS.text }
});