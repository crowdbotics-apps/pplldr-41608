import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employmentDate, setEmploymentDate] = useState('');
  return <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} /></Pressable>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Bio" value={bio} onChangeText={setBio} multiline />
      <View style={styles.radioContainer}>
        <Text style={styles.radioLabel}>Gender:</Text>
        <View style={styles.radioButtons}>
          <TouchableOpacity style={[styles.radioButton, gender === 'male' && styles.radioButtonSelected]} onPress={() => setGender('male')}>
            <Text style={[styles.radioButtonText, gender === 'male' && styles.radioButtonTextSelected]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.radioButton, gender === 'female' && styles.radioButtonSelected]} onPress={() => setGender('female')}>
            <Text style={[styles.radioButtonText, gender === 'female' && styles.radioButtonTextSelected]}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput style={styles.input} placeholder="Birthday" value={birthday} onChangeText={setBirthday} />
      <TextInput style={styles.input} placeholder="Company" value={company} onChangeText={setCompany} />
      <TextInput style={styles.input} placeholder="Job Title" value={jobTitle} onChangeText={setJobTitle} />
      <TextInput style={styles.input} placeholder="Employment Date" value={employmentDate} onChangeText={setEmploymentDate} />
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI24");
    }}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 16
  },
  radioButtons: {
    flexDirection: 'row'
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10
  },
  radioButtonSelected: {
    backgroundColor: '#ccc'
  },
  radioButtonText: {
    fontSize: 14
  },
  radioButtonTextSelected: {
    color: '#fff'
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default UserProfileScreen;