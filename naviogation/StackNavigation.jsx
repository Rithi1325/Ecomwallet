import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ShopScreen from '../screens/ShopScreen'; // Import ShopScreen here
import CartScreen from '../screens/CartScreen';
import ProductDetails from '../components/EcomComponents/ProductDetails';
import AddDeliveryAddress from '../screens/AddDeliveryAddress';
import PaymentScreen from '../screens/PaymentScreen';
import TrackingPage from '../screens/TrackingPage';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Shop">
        <Stack.Screen 
          name="Shop" 
          component={ShopScreen} 
          options={{ title: 'Shop' }} 
        />
        <Stack.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ title: 'Cart' }} 
        />
         <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails} 
          options={{ title: 'ProductDetails' }} 
        />
             <Stack.Screen 
          name="AddDeliveryAddress" 
          component={AddDeliveryAddress} 
          options={{ title: 'AddDeliveryAddress' }} 
        />
            <Stack.Screen 
          name="PaymentScreen" 
          component={PaymentScreen} 
          options={{ title: 'PaymentScreen' }} 
        />
         <Stack.Screen 
          name="TrackingPage" 
          component={TrackingPage} 
          options={{ title: 'TrackingPage' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
