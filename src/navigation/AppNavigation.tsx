import { Stack } from 'expo-router';
import { COLORS } from '../constants/Colors';


export default function AppNavigation() {
  return (
    <Stack
    initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary }, 
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      {/* You can define screen layout configurations here using file-based routing names */}
       <Stack.Screen name="Welcome"  options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" options={{ headerShown: false }} />
      <Stack.Screen name="HymnDetail"  options={{ title: 'Hymn Content' }} />
    </Stack>
  );
}
