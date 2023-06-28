import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ShareScreen = () => {
  const handleShare = () => {// Implement share functionality here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Share Options</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={handleShare}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.optionIcon} />
          <Text style={styles.optionText}>Share via Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleShare}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.optionIcon} />
          <Text style={styles.optionText}>Share via Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleShare}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.optionIcon} />
          <Text style={styles.optionText}>Share via Social Media</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  optionsContainer: {
    alignItems: 'center'
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  optionIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  optionText: {
    fontSize: 18
  }
});
export default ShareScreen;