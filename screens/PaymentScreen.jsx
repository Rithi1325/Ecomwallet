import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  // Sample total price, replace with your dynamic data
  const totalPrice = 759;

  const PaymentOption = ({ title }) => (
    <TouchableOpacity style={styles.paymentOption}>
      <View style={styles.paymentOptionContent}>
        <Text style={styles.paymentOptionText}>{title}</Text>
      </View>
      <Text style={styles.chevronText}>›</Text>
    </TouchableOpacity>
  );

  // Function to handle Pay Now button click and navigate to the TrackingPage
  const handlePayNow = () => {
    navigation.navigate('TrackingPage'); // Navigate to TrackingPage
  };

  return (
    <ScrollView style={styles.container}>
      {/* Bank Offer */}
      <View style={styles.offerCard}>
        <Text style={styles.offerTitle}>Bank Offer</Text>
        <Text style={styles.offerText}>
          10% instant Savings on Citi Credit and Debit Cards on a min spend of Rs 3,0000. TCA
        </Text>
      </View>

      {/* Payment Methods */}
      <View style={styles.paymentMethodsContainer}>
        <PaymentOption title="Cash on Delivery (Cash/UPI)" />
        <PaymentOption title="Credit/Debit Card" />
        <PaymentOption title="Google Pay/Phone Pay/BHIM UPI" />
        <PaymentOption title="Payments/Wallet" />
        <PaymentOption title="Netbanking" />
        
        {/* Gift Card Section */}
        <View style={styles.giftCardSection}>
          <Text style={styles.giftCardText}>Have a Gift Card?</Text>
          <TouchableOpacity>
            <Text style={styles.applyButton}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Price Details */}
      <View style={styles.priceDetails}>
        <Text style={styles.priceTitle}>Price Title (1 item)</Text>
        
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Total MRP</Text>
          <Text style={styles.priceValue}>1599</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Discount on MRP</Text>
          <Text style={styles.discountValue}>-640</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Coupon Discount</Text>
          <Text style={styles.discountValue}>-200</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalPrice}>₹{totalPrice}</Text>
          <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
            <Text style={styles.payButtonText}>Pay now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  offerCard: {
    backgroundColor: 'white',
    padding: 16,
    margin: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  offerText: {
    fontSize: 14,
    color: '#666',
  },
  paymentMethodsContainer: {
    marginHorizontal: 12,
  },
  paymentOption: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  paymentOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentOptionText: {
    fontSize: 15,
    color: '#333',
  },
  chevronText: {
    fontSize: 18,
    color: '#999',
  },
  giftCardSection: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  giftCardText: {
    fontSize: 15,
    color: '#333',
  },
  applyButton: {
    color: '#009688',
    fontSize: 15,
    fontWeight: '600',
  },
  priceDetails: {
    backgroundColor: 'white',
    padding: 16,
    margin: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  priceTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontSize: 14,
    color: '#333',
  },
  discountValue: {
    fontSize: 14,
    color: '#4CAF50',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
  payButton: {
    backgroundColor: '#009688',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentScreen;
