import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const [cart, setCart] = useState(route.params.cart); // Initialize cart state
  const [couponCode, setCouponCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(215.5); // Example initial total price

  const calculateTotal = (updatedCart) => {
    const total = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2));
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // Ensure no items with zero quantity remain
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    navigation.navigate('AddDeliveryAddress', { totalPrice });
  };

  return (
    <View style={styles.container}>
   

      {/* Cart Items List */}
      <FlatList
        data={cart}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Ensuring unique key
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleDecrement(item.id)}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleIncrement(item.id)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Coupon Code Input */}
      <View style={styles.couponContainer}>
        <Text style={styles.couponText}>Have a coupon code? Enter here</Text>
        <TextInput
          style={styles.couponInput}
          placeholder="Enter Your Offer Code"
          value={couponCode}
          onChangeText={setCouponCode}
        />
      </View>

      {/* Price Details */}
      <View style={styles.priceDetails}>
        <Text style={styles.priceText}>Price: ₹135.2</Text>
        <Text style={styles.priceText}>Tax: 0.5%</Text>
        <Text style={styles.priceText}>Delivery Fee: 0.8%</Text>
        <Text style={styles.totalText}>Total: ₹{totalPrice}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  couponContainer: {
    marginTop: 20,
  },
  couponText: {
    fontSize: 14,
    marginBottom: 5,
  },
  couponInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  priceDetails: {
    marginBottom: 20,
  },
  priceText: {
    fontSize: 14,
    marginBottom: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
