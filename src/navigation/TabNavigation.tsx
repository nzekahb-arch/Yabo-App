import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS } from '../constants/Colors';

// Import Screens
import AboutScreen from '../screens/about/AboutScreen';
import HymnsScreen from '../screens/hymns/HymnsScreen';
import SymbolsScreen from '../screens/learn/SymbolsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: { paddingBottom: 5, height: 60 },
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        headerStyle: { backgroundColor: COLORS.primary },
        // Simple text fallback for icons until you choose an icon library
        tabBarIcon: () => null, 
      })}
    >
      <Tab.Screen name="Hymns" component={HymnsScreen} options={{ title: 'Hymns' }} />
      <Tab.Screen name="Symbols" component={SymbolsScreen} options={{ title: 'Learn' }} />
      {/* <Tab.Screen name="Solfa" component={SolfaGuideScreen} options={{ title: 'Solfa' }} /> */}
      <Tab.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
}