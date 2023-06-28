import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {// Handle login logic here
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI81");
    }}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {
      navigation.navigate("ScreenAI8");
    }}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connect with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connect with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={handleCheck}>
          {isChecked && <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.checkIcon} />}
        </TouchableOpacity>

        <Text style={styles.checkboxText}>
          I agree to the <Pressable onPress={() => {
          navigation.navigate("ScreenAI5");
        }}><Text style={styles.linkText}>Terms and Conditions</Text></Pressable> and <Pressable onPress={() => {
          navigation.navigate("ScreenAI4");
        }}><Text style={styles.linkText}>Privacy Policy</Text></Pressable>
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  forgotPasswordButton: {
    marginBottom: 20
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  socialButton: {
    width: '40%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkIcon: {
    width: 15,
    height: 15
  },
  checkboxText: {
    fontSize: 14
  },
  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline'
  }
});
export default LoginScreen;