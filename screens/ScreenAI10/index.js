import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  return <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <View style={styles.companyContainer}>
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.workPeriod}>2018 - Present</Text>
      </View>
      <View style={styles.attributeContainer}>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeName}>Attribute 1</Text>
          <Text style={styles.attributeScore}>4.5</Text>
          <Text style={styles.attributeRating}>25 ratings</Text>
        </View>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeName}>Attribute 2</Text>
          <Text style={styles.attributeScore}>3.8</Text>
          <Text style={styles.attributeRating}>18 ratings</Text>
        </View>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeName}>Attribute 3</Text>
          <Text style={styles.attributeScore}>4.2</Text>
          <Text style={styles.attributeRating}>30 ratings</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  companyContainer: {
    marginBottom: 20
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  workPeriod: {
    fontSize: 16
  },
  attributeContainer: {
    marginBottom: 20
  },
  attributeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  attributeName: {
    flex: 1,
    fontSize: 16
  },
  attributeScore: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  attributeRating: {
    fontSize: 14,
    color: '#888'
  }
});
export default UserProfileScreen;