import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
const users = [{
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  name: 'Jane Smith',
  email: 'janesmith@example.com',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 3,
  name: 'Mike Johnson',
  email: 'mikejohnson@example.com',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 4,
  name: 'Sarah Williams',
  email: 'sarahwilliams@example.com',
  image: 'https://tinyurl.com/42evm3m3'
}];

const UserItem = ({
  user
}) => <View style={styles.userItem}>
    <Image source={{
    uri: user.image
  }} style={styles.userImage} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
    </View>
  </View>;

const UserListScreen = () => <View style={styles.container}>
    <FlatList data={users} keyExtractor={item => item.id.toString()} renderItem={({
    item
  }) => <UserItem user={item} />} />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Invite Team Member</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Subscribe</Text>
    </TouchableOpacity>
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  userEmail: {
    fontSize: 14,
    color: '#888'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default UserListScreen;