import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';

const AddCart = ({ cart, updateItemQuantity }) => {
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  const handleImagePress = (image) => {
    setSelectedImage(image); // Set the selected image when clicked
  };

  // Function to calculate the total cost
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to increase the quantity
  const increaseQuantity = (id) => {
    updateItemQuantity(id, 'increase');
  };

  // Function to decrease the quantity
  const decreaseQuantity = (id) => {
    updateItemQuantity(id, 'decrease');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cart Details</Text>

      <View style={styles.cartItemsContainer}>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹{item.price} x {item.quantity}</Text>

              {/* Display the image if it's not selected */}
              {selectedImage !== item.image && (
                <Image
                  source={item.image}
                  style={styles.image}
                  onTouchEnd={() => handleImagePress(item.image)} // Set selected image on press
                />
              )}

              {/* Display the selected image in a smaller size */}
              {selectedImage === item.image && (
                <Image
                  source={item.image}
                  style={styles.selectedImage}
                />
              )}

              {/* Quantity controls */}
              <View style={styles.quantityControls}>
                <Button title="-" onPress={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1} />
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <Button title="+" onPress={() => increaseQuantity(item.id)} />
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
        )}
      </View>

      {/* Display the total cost */}
      {cart && cart.length > 0 && (
        <Text style={styles.totalCost}>
          Total: ₹{calculateTotalCost()}
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30, // Ensure there's space at the bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItemsContainer: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  selectedImage: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default AddCart;
