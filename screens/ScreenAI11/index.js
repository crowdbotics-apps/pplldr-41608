import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Questionnaire</Text>
        <Text style={styles.subtitle}>Average Score: 8.5</Text>
        <Text style={styles.subtitle}>Your Score: 9.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Materials</Text>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Material 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Material 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Material 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Badges</Text>
        <View style={styles.badgeContainer}>
          <Image style={styles.badgeImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Image style={styles.badgeImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Image style={styles.badgeImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>My Team Members</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  linkButton: {
    marginBottom: 8
  },
  linkText: {
    fontSize: 16,
    color: 'blue'
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  badgeImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
});
export default Screen;