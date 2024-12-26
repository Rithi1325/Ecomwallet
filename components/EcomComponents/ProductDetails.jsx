import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params; // Destructure the passed product data
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBuyNow = () => {
    // Navigate to Checkout screen or process purchase
    navigation.navigate('Checkout', { product, selectedSize, selectedColor });
  };

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Red', 'Blue', 'Green', 'Black'];

  return (
    <ScrollView style={styles.container}>
      {/* Main Product Image with Border Design */}
      <View style={styles.imageContainer}>
        <Image
          source={product.image}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{product.price}</Text>
        </View>

        {/* Size Selection */}
        <Text style={styles.sectionTitle}>Select Size</Text>
        <View style={styles.optionsContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.option,
                selectedSize === size && styles.selectedOption,
              ]}
              onPress={() => handleSizeSelect(size)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedSize === size && styles.selectedOptionText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Color Selection */}
        <Text style={styles.sectionTitle}>Select Color</Text>
        <View style={styles.optionsContainer}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.option,
                selectedColor === color && styles.selectedOption,
              ]}
              onPress={() => handleColorSelect(color)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedColor === color && styles.selectedOptionText,
                ]}
              >
                {color}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Buy Now Button */}
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={handleBuyNow}
          disabled={!selectedSize || !selectedColor} // Disable if size or color not selected
        >
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 20,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buyNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
