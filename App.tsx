import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigation';

// Keep the splash screen visible while fonts and assets are fetching
SplashScreen.preventAutoHideAsync();

export default function App() {
  // 1. Hook into Expo's font loading system
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  // 2. Control splash screen visibility based on assets status
  useEffect(() => {
    async function hideSplash() {
      // Hide the splash screen only when fonts are loaded or an error occurs
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    
    hideSplash();
  }, [fontsLoaded, fontError]);

  // 3. Render nothing (keep splash visible) until fonts are ready
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // 4. Main application rendering
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
