import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AppShareScreen = () => {
  const [email, setEmail] = useState('');
  const [appShareLink, setAppShareLink] = useState('');

  const handleSend = () => {
    // Logic to send email with app share link
    // Assuming the app share link is generated here
    const shareLink = 'https://example.com/app-share';
    setAppShareLink(shareLink);
  };

  const handleCancel = () => {
    setEmail('');
    setAppShareLink('');
  };

  return <View style={styles.container}>
      <Text style={styles.title}>App Share</Text>
      <TextInput style={styles.input} placeholder="Enter email" value={email} onChangeText={setEmail} />
      <Button title="Send" onPress={handleSend} />
      <Button title="Cancel" onPress={handleCancel} />
      {appShareLink ? <Text style={styles.appShareLink}>{appShareLink}</Text> : null}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16
  },
  appShareLink: {
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center'
  }
});
export default AppShareScreen;