import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import images from '../contants/images'; // Import the profile image here

const TrackingPage = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={images.profileIcon} // Assuming profileIcon is in your images folder
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mary Rithika</Text>
      </View>
      
      {/* Product Details */}
      <View style={styles.productCard}>
        <Image 
          source={images.drs2}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Peter England Casual</Text>
          <Text style={styles.productSubtitle}>Peter Longline Pure Cotton Tshirt</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>$158.15</Text>
            <Text style={styles.originalPrice}>$200.10</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>0</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusHeader}>Order Status</Text>
        
        {/* Timeline */}
        <View style={styles.timeline}>
          {/* Delivery Status */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>On Delivery</Text>
              <Text style={styles.timelineDate}>Monday June 20th, 2020 12:25 AM</Text>
            </View>
          </View>

          {/* North Gateway */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>North Gateway</Text>
              <Text style={styles.timelineDate}>Monday June 20th, 2020 12:25 AM</Text>
              <Text style={styles.timelineInfo}>
                Your order has been arrived at North Gateway, please wait for next info
              </Text>
            </View>
          </View>

          {/* Order Created */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Order Created</Text>
              <Text style={styles.timelineDate}>Monday June 20th, 2020 12:25 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
  },
  statusContainer: {
    marginTop: 20,
  },
  statusHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  timeline: {
    marginLeft: 20,
  },
  timelineItem: {
    position: 'relative',
    marginBottom: 20,
  },
  timelineLine: {
    position: 'absolute',
    left: 4,
    top: 0,
    bottom: -20,
    width: 2,
    backgroundColor: '#4CAF50',
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    position: 'absolute',
    left: 0,
  },
  timelineContent: {
    marginLeft: 25,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  timelineDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  timelineInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default TrackingPage;
