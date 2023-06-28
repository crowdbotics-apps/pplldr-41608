import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const tiers = [{
    id: 1,
    title: 'Basic',
    price: '$9.99/month',
    description: 'Access to basic features',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    title: 'Premium',
    price: '$19.99/month',
    description: 'Access to premium features',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    title: 'Pro',
    price: '$29.99/month',
    description: 'Access to pro features',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const handleTierPress = tier => {
    console.log(`Selected tier: ${tier.title}`);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Available Subscription Tiers</Text>
      {tiers.map(tier => <TouchableOpacity key={tier.id} style={styles.tierContainer} onPress={() => handleTierPress(tier)}>
          <Image source={{
        uri: tier.image
      }} style={styles.tierImage} />
          <Text style={styles.tierTitle}>{tier.title}</Text>
          <Text style={styles.tierPrice}>{tier.price}</Text>
          <Text style={styles.tierDescription}>{tier.description}</Text>
        </TouchableOpacity>)}
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
  tierContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  tierImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  tierTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  tierPrice: {
    fontSize: 16,
    marginBottom: 5
  },
  tierDescription: {
    fontSize: 14,
    textAlign: 'center'
  }
});
export default SubscriptionScreen;