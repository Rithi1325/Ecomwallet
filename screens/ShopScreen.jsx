import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SearchBar from '../components/EcomComponents/SearchBar';
import ProductCard from '../components/EcomComponents/ProductCard';

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* SearchBar at the top */}
      <SearchBar />

      {/* Scrollable container for product cards */}
      <ScrollView contentContainerStyle={styles.productContainer}>
        <ProductCard navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20, // Add some space at the top for the SearchBar
  },
  productContainer: {
    paddingBottom: 20, // Add some padding at the bottom of the product list
  },
});

export default ShopScreen;
