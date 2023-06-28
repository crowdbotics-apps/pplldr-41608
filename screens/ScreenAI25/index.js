import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
const data = [{
  id: '1',
  attribute: 'Communication Skills',
  averageScore: 4.5,
  userScore: 4.2
}, {
  id: '2',
  attribute: 'Problem Solving',
  averageScore: 3.8,
  userScore: 4.5
} // Add more attributes and scores here
];
const learningMaterials = [{
  id: '1',
  title: 'Effective Communication',
  url: 'https://example.com/communication'
}, {
  id: '2',
  title: 'Problem Solving Techniques',
  url: 'https://example.com/problem-solving'
} // Add more learning materials here
];
const badges = [{
  id: '1',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  image: 'https://tinyurl.com/42evm3m3'
} // Add more badges here
];

const Screen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {// Perform search logic here based on searchText
    // Update searchResults state with the filtered users
  };

  const renderAttributeItem = ({
    item
  }) => <View style={styles.attributeItem}>
      <Text style={styles.attributeName}>{item.attribute}</Text>
      <Text style={styles.attributeScore}>Average Score: {item.averageScore}</Text>
      <Text style={styles.attributeScore}>Your Score: {item.userScore}</Text>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI20");
    }}><Text style={styles.zmJiculA}>{"Settings\n"}</Text></Pressable></View>;

  const renderLearningMaterialItem = ({
    item
  }) => <TouchableOpacity style={styles.learningMaterialItem} onPress={() => handleMaterialPress(item.url)}>
      <Text style={styles.learningMaterialTitle}>{item.title}</Text>
    </TouchableOpacity>;

  const renderBadgeItem = ({
    item
  }) => <Pressable onPress={() => {
    navigation.navigate("ScreenAI22");
  }}><Image source={{
      uri: item.image
    }} style={styles.badgeImage} /></Pressable>;

  const renderUserItem = ({
    item
  }) => <TouchableOpacity style={styles.userItem} onPress={() => handleUserPress(item.id)}>
      <Image source={{
      uri: item.profileImage
    }} style={styles.userImage} />
      <Text style={styles.userName}>{item.name}</Text>
    </TouchableOpacity>;

  const handleMaterialPress = () => {// Open the learning material URL in a web browser
  };

  const handleUserPress = () => {// Handle user press event, e.g., navigate to user profile screen
  };

  return <Pressable onPress={() => {
    navigation.navigate("ScreenAI10");
  }}><View style={styles.container}>
      <Text style={styles.heading}>Questionnaire</Text>

      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderAttributeItem} style={styles.attributeList} />

      <Text style={styles.sectionHeading}>Learning Materials</Text>

      <FlatList data={learningMaterials} keyExtractor={item => item.id} renderItem={renderLearningMaterialItem} horizontal showsHorizontalScrollIndicator={false} style={styles.learningMaterialsList} />

      <Text style={styles.sectionHeading}>Badges</Text>

      <FlatList data={badges} keyExtractor={item => item.id} renderItem={renderBadgeItem} horizontal showsHorizontalScrollIndicator={false} style={styles.badgesList} />

      <Pressable onPress={() => {
        navigation.navigate("ScreenAI21");
      }}><Text style={styles.sectionHeading}>My Team Members</Text></Pressable>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChangeText={setSearchText} onSubmitEditing={handleSearch} />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={searchResults} keyExtractor={item => item.id} renderItem={renderUserItem} style={styles.usersList} />
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  attributeList: {
    marginBottom: 16
  },
  attributeItem: {
    marginBottom: 8
  },
  attributeName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  attributeScore: {
    fontSize: 16
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  learningMaterialsList: {
    marginBottom: 16
  },
  learningMaterialItem: {
    marginRight: 8,
    padding: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  learningMaterialTitle: {
    fontSize: 16
  },
  badgesList: {
    marginBottom: 16
  },
  badgeImage: {
    width: 64,
    height: 64,
    marginRight: 8,
    borderRadius: 8
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 8
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  usersList: {
    flex: 1
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  userImage: {
    width: 48,
    height: 48,
    marginRight: 8,
    borderRadius: 24
  },
  userName: {
    fontSize: 16
  },
  zmJiculA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Screen;