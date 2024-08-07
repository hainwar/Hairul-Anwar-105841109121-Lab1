import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './navigation/MyTabs';
import SignUpPage from './screens/SignUpPage';
import LoginPage from './screens/LoginPage';
import ForgotPasswordPage from './screens/ForgotPasswordPage';
import MyOrders from './screens/ProfileScreens/MyOrders';
import ShippingAddress from './screens/ProfileScreens/ShippingAddress';
import PaymentMethods from './screens/ProfileScreens/PaymenMethods';  
import PromoCodes from './screens/ProfileScreens/PromoCodes';
import Review from './screens/ProfileScreens/Review';
import Settings from './screens/ProfileScreens/Settings';
import ShopPage from './screens/ShopPage';
import FavoritesPage from './screens/FavoritesPage';
import HomeScreen from './screens/HomeScreen';


const primaryColor = '#fff';
const darkRed = '#8B0000';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='LoginPage'
      screenOptions={{
        headerStyle: {
          backgroundColor: primaryColor,
      },
      headerTintColor: darkRed,
      headerTitleStyle: {
        fontWeight: 'bold'
    }
  }}
    >
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="anwarStore" component={MyTabs}/>
        <Stack.Screen name="SignUpPage" component={SignUpPage}/>
        <Stack.Screen name="Shop" component={ShopPage}/>
        <Stack.Screen name="Favorites" component={FavoritesPage}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage}/>
        <Stack.Screen name="MyOrders" component={MyOrders}/>
        <Stack.Screen name="ShippingAddress" component={ShippingAddress}/>
        <Stack.Screen name="PaymentMethods" component={PaymentMethods}/>
        <Stack.Screen name="PromoCodes" component={PromoCodes}/>
        <Stack.Screen name="Review" component={Review}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;