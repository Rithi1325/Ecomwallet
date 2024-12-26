import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SearchBar = ({ der = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSearchPress = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={handleInputChange}
        der={der}
        derTextColor="#A9A9A9"
      />
      <TouchableOpacity style={styles.button} onPress={handleSearchPress}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: 20, // To position it at the top
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Tailwind gray-100 equivalent
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB', // Tailwind gray-300 equivalent
    marginRight: 10,
  },
  button: {
    backgroundColor: '#3B82F6', // Tailwind blue-500 equivalent
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchBar;
