import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AccountCreationScreen = () => {
  const [selectedAccountType, setSelectedAccountType] = useState('');

  const handleAccountTypeSelection = accountType => {
    setSelectedAccountType(accountType);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Select Account Type:</Text>

      <TouchableOpacity style={[styles.accountTypeButton, selectedAccountType === 'Personal' && styles.selectedAccountTypeButton]} onPress={() => handleAccountTypeSelection('Personal')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.accountTypeIcon} />
        <Text style={styles.accountTypeText}>Personal Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.accountTypeButton, selectedAccountType === 'Business' && styles.selectedAccountTypeButton]} onPress={() => handleAccountTypeSelection('Business')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.accountTypeIcon} />
        <Text style={styles.accountTypeText}>Business Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 10
  },
  accountTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 10
  },
  selectedAccountTypeButton: {
    borderColor: '#007AFF'
  },
  accountTypeIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  accountTypeText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  createAccountButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default AccountCreationScreen;