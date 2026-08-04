import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CustomText } from '../../components/CustomText';
import { COLORS } from '../../constants/Colors';
export default function HymnDetailScreen({ route }: any) {
  const { hymn } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <CustomText style={styles.meta}>{hymn.category} • Hymn #{hymn.number}</CustomText>
      <CustomText style={styles.title}>{hymn.title}</CustomText>
      
      {hymn.solfa ? (
        <CustomText style={styles.solfaText}>{hymn.solfa}</CustomText>
        ): null}
    

      {hymn.chorus ? (
        <View style={styles.chorusBox}>
          <CustomText style={styles.chorusTitle}>Chorus:</CustomText>
          <CustomText style={styles.chorusText}>{hymn.chorus}</CustomText>
        </View>
      ) : null}

      {hymn.verses.map((verse: string, index: number) => (
        <View key={index} style={styles.verseBox}>
          <CustomText style={styles.verseNumber}>{index + 1}.</CustomText>
          <CustomText style={styles.verseText}>{verse}</CustomText>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface, padding: 20 },
  meta: { fontSize: 14, color: COLORS.textMuted, textTransform: 'uppercase', marginBottom: 4 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary, marginBottom: 20 },
  chorusBox: { backgroundColor: 'rgba(245, 167, 107, 0.12)', padding: 16, borderRadius: 8, marginBottom: 24, borderLeftWidth: 4, borderLeftColor: COLORS.primary },
  chorusTitle: { fontWeight: 'bold', color: COLORS.primary, marginBottom: 4 },
  chorusText: { fontSize: 20, fontStyle: 'italic', lineHeight: 26, color: COLORS.text,fontFamily:'Poppins', fontWeight:'bold' },
  verseBox: { flexDirection: 'row', marginBottom: 20, alignItems: 'flex-start' },
  verseNumber: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary, marginRight: 10, marginTop: 2 },
  verseText: { flex: 1, fontSize: 20, lineHeight: 26, color: COLORS.text, fontFamily:'Poppins', fontWeight:'bold' },
  solfaText: { fontSize: 15, fontStyle: 'italic', lineHeight: 24, color: COLORS.textMuted, marginBottom: 20, fontFamily:'Poppins', fontWeight:'bold' },
});