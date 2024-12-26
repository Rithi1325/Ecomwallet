import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import images from '../../contants/images'; // Import from constants
import icons from '../../contants/icons';

const products = [
  { id: '1', name: 'Product 1', price: 499, image: images.drs2, description: 'A stylish and comfortable dress for casual occasions.' },
  { id: '2', name: 'Product 2', price: 999, image: images.drs1, description: 'A premium dress perfect for formal events and parties.' },
  { id: '3', name: 'Product 3', price: 799, image: images.drs1, description: 'An elegant dress designed for semi-formal gatherings.' },
  { id: '4', name: 'Product 4', price: 1199, image: images.drs2, description: 'A modern and chic outfit suitable for any occasion.' },
  { id: '5', name: 'Product 5', price: 899, image: images.drs2, description: 'A comfortable and versatile dress for everyday wear.' },
  { id: '6', name: 'Product 6', price: 1299, image: images.drs1, description: 'A luxurious outfit with a touch of sophistication.' },
];

const ProductCard = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState({}); // Track wishlist status for each product

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    navigation.navigate('Cart', { cart: updatedCart });
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle the wishlist status
    }));
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      {/* Product Image */}
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
        <Image source={item.image} style={styles.productImage} />
      </TouchableOpacity>

      {/* Wishlist Heart (Always visible) */}
      <TouchableOpacity
        style={styles.wishlistButton}
        onPress={() => toggleWishlist(item.id)} // Toggle wishlist on click
      >
        <Image
          source={wishlist[item.id] ? icons.heartFilled : icons.heart} // Change heart icon based on wishlist state
          style={styles.heartIcon}
        />
      </TouchableOpacity>

      {/* Product Name, Description, Price */}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>₹{item.price}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(item)} // Call addToCart on button press
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProduct}
      numColumns={2} // Two columns for the layout
      columnWrapperStyle={styles.columnWrapper} // Custom style for columns
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Equal spacing between the cards
    marginBottom: 15, // Spacing between rows
  },
  card: {
    flex: 0.48,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  wishlistButton: {
    position: 'absolute',
    top: 10, // Position the heart closer to the top of the card
    right: 10, // Position the heart to the right
    padding: 5,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductCard;
