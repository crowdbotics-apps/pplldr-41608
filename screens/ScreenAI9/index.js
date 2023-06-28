import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState('');

  const handleChooseImage = () => {// Logic to choose image from local storage
  };

  const handleCaptureImage = () => {// Logic to capture image with phone camera
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Camera Option</Text>
      <TouchableOpacity style={styles.button} onPress={handleChooseImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCaptureImage}>
        <Text style={styles.buttonText}>Capture Image</Text>
      </TouchableOpacity>
      {imageUri ? <Image source={{
      uri: imageUri
    }} style={styles.image} /> : <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.placeholderImage} />}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20
  },
  placeholderImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'contain'
  }
});
export default CameraScreen;