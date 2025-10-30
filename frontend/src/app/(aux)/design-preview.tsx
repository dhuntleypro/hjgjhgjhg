import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useThemeManager} from '@appsformankind/orbit'

export default function DesignPreview() {
  const { colors } = useThemeManager();

  return (
    <View style={[styles.container, { backgroundColor: colors?.pageBackground }]}>
      <Text style={[styles.title, { color: colors?.pageText }]}>
        Design Preview
      </Text>
      <Text style={[styles.subtitle, { color: colors?.pageText }]}>
        Complete your onboarding to continue
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
}); 