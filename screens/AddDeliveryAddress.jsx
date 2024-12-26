import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/EcomComponents/InputField';
import AddressTypeButtons from '../components/EcomComponents/AddressTypeButtons';

const AddDeliveryAddress = ({ route, navigation }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('Home');

  const handleSaveAddress = () => {
    const deliveryAddress = {
      fullName,
      mobileNo,
      address,
      pinCode,
      locality,
      city,
      state,
      addressType,
    };
    console.log('Saved Address:', deliveryAddress);
    navigation.navigate('PaymentScreen', { totalPrice: route.params.totalPrice });
  };

  return (
    <View style={styles.container}>
      <InputField label="Type Your Name" placeholder="Type Your Name" value={fullName} onChangeText={setFullName} />
      <InputField label="Mobile No." placeholder="Type Your Mobile No." value={mobileNo} onChangeText={setMobileNo} keyboardType="phone-pad" />
      <InputField label="Pin Code" placeholder="Pin Code" value={pinCode} onChangeText={setPinCode} keyboardType="numeric" />
      <InputField label="Address" placeholder="Address" value={address} onChangeText={setAddress} />
      <InputField label="Locality/Town" placeholder="Locality/Town" value={locality} onChangeText={setLocality} />

      <View style={styles.cityStateRow}>
        <InputField label="City/District" placeholder="City/District" value={city} onChangeText={setCity} />
        <InputField label="State" placeholder="State" value={state} onChangeText={setState} />
      </View>

      <Text style={styles.label}>Save Address As</Text>
      <AddressTypeButtons addressType={addressType} setAddressType={setAddressType} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
        <Text style={styles.saveButtonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  cityStateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#009688',
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddDeliveryAddress;
