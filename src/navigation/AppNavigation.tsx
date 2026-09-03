import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { COLORS } from '../constants/Colors';
import HymnDetailScreen from '../screens/hymns/HymnDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary }, 
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="HymnDetail" component={HymnDetailScreen} options={{ title: 'Hymn Content' }} />
    </Stack.Navigator>
  );
}