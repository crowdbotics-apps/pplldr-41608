import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Slider, Button, StyleSheet } from 'react-native';

const AttributeScreen = () => {
  const navigation = useNavigation();
  const [grades, setGrades] = useState({});

  const handleSliderChange = (attribute, value) => {
    setGrades(prevGrades => ({ ...prevGrades,
      [attribute]: value
    }));
  };

  const handleInputChange = (attribute, value) => {
    setGrades(prevGrades => ({ ...prevGrades,
      [attribute]: value
    }));
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log(grades);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Attribute List</Text>
      <View style={styles.attributeContainer}>
        <Text style={styles.attributeTitle}>Attribute 1</Text>
        <Slider style={styles.slider} minimumValue={1} maximumValue={10} step={1} value={grades['attribute1'] || 1} onValueChange={value => handleSliderChange('attribute1', value)} />
        <TextInput style={styles.input} keyboardType="numeric" value={grades['attribute1'] ? grades['attribute1'].toString() : ''} onChangeText={value => handleInputChange('attribute1', value)} />
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.attributeTitle}>Attribute 2</Text>
        <Slider style={styles.slider} minimumValue={1} maximumValue={10} step={1} value={grades['attribute2'] || 1} onValueChange={value => handleSliderChange('attribute2', value)} />
        <TextInput style={styles.input} keyboardType="numeric" value={grades['attribute2'] ? grades['attribute2'].toString() : ''} onChangeText={value => handleInputChange('attribute2', value)} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI15");
    }}><Text style={styles.gATkLMcU}>{"Submit"}</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  attributeContainer: {
    marginBottom: 16
  },
  attributeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  slider: {
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8
  },
  gATkLMcU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default AttributeScreen;