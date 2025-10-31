import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppConfig from '../../services/config';
import Header from '../../components/common/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to CPAN 213!</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>

        <View style={styles.configBox}>
          <Text style={styles.configTitle}>Environment Variables:</Text>
          <Text style={styles.configItem}>
            API_BASE_URL: {AppConfig.API_BASE_URL}
          </Text>
          <Text style={styles.configItem}>APP_NAME: {AppConfig.APP_NAME}</Text>
          <Text style={styles.configItem}>
            DEBUG_MODE: {AppConfig.DEBUG_MODE}
          </Text>
          <Text style={styles.configItem}>VERSION: {AppConfig.VERSION}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, padding: 20 },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
  },
  configBox: {
    marginTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
  },
  configTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  configItem: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 5,
  },
});

export default HomeScreen;
