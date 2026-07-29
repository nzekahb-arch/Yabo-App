import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

export type TextVariant = 'header' | 'title' | 'subtitle' | 'body' | 'caption';

export interface CustomTextProps extends RNTextProps {
  variant?: TextVariant;
  bold?: boolean;
  semibold?: boolean;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant = 'body',
  bold = false,
  semibold = false,
  color,
  align = 'left',
  style,
  ...rest
}) => {
  const getFontWeight = () => {
    if (bold) return 'Poppins-Bold';
    if (semibold) return 'Poppins-SemiBold';
    return 'Poppins-Regular';
  };

  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        style,
        {
          color: (StyleSheet.flatten(style as any)?.color as string) || color,
          textAlign: align,
          fontFamily: bold ? 'Poppins': semibold ? 'Poppins-SemiBold': 'Poppins-Regular',
        },
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    // Professional System Sans-Serif Fonts
    fontFamily:'Poppins',
    },
  header: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    color: '#64748B', // Muted slate gray
  },
});