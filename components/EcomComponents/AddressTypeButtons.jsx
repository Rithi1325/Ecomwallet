import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddressTypeButtons = ({ addressType, setAddressType }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, addressType === 'Home' && styles.selectedButton]}
        onPress={() => setAddressType('Home')}
      >
        <Text style={[styles.buttonText, addressType === 'Home' && styles.selectedButtonText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, addressType === 'Work' && styles.selectedButton]}
        onPress={() => setAddressType('Work')}
      >
        <Text style={[styles.buttonText, addressType === 'Work' && styles.selectedButtonText]}>Work</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  selectedButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#009688',
  },
  buttonText: {
    color: '#666',
    fontSize: 14,
  },
  selectedButtonText: {
    color: '#009688',
  },
});

export default AddressTypeButtons;
