import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import hymnsData from '../../../assets/data/hymns.json';
import { COLORS } from '../../constants/Colors';


const CATEGORIES = ['All', 'Entrance', 'Offertory', 'Communion'];

export default function HymnsScreen({ navigation }: any) {


  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredHymns = hymnsData.filter((hymn) => {
    const matchesCat = activeCategory === 'All' || hymn.category === activeCategory;
    const matchesSearch = hymn.title.toLowerCase().includes(search.toLowerCase()) || 
                          hymn.number.toString().includes(search);
    return matchesCat && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by title or hymn number..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={{ height: 50 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.catTab, activeCategory === item && styles.catTabActive]}
              onPress={() => setActiveCategory(item)}
            >
              <Text style={activeCategory === item ? styles.catTextActive : styles.catText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={filteredHymns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.hymnRow}
            onPress={() => navigation.navigate('HymnDetail', { hymn: item })}
          >
            <Text style={styles.hymnNum}>{item.number}</Text>
            <View>
              <Text style={styles.hymnTitle}>{item.title}</Text>
              <Text style={styles.hymnSub}>{item.category}</Text>
            
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 12 },
  searchBar: { backgroundColor: '#FFF', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: COLORS.border, marginBottom: 12 },
  catTab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#FFF', marginRight: 8, height: 35, borderWidth: 1, borderColor: COLORS.border },
  catTabActive: { backgroundColor: COLORS.primary },
  catText: { color: COLORS.textMuted },
  catTextActive: { color: '#FFF', fontWeight: 'bold' },
  hymnRow: { flexDirection: 'row', backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 8, alignItems: 'center' },
  hymnNum: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginRight: 16, width: 35 },
  hymnTitle: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  hymnSub: { fontSize: 12, color: COLORS.textMuted }
});