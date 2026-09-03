import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Colors';

export default function WelcomeScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [dots, setDots] = useState('.');

  useEffect(() => {
    // 1. Fade in the App Icon / Artwork
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // 2. Animate the loading dots cycle (. -> .. -> ... -> .)
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
    }, 400);

    // 3. Navigate to the main tab screen after 3 seconds (3000ms)
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* Main App Icon Artwork */}
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Yabo da Murna</Text>
    

        {/* Animated Loading Dots Container */}
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{dots}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.secondary,
    marginBottom: 40,
  },
  loadingContainer: {
    height: 30,
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 1,
  },
});