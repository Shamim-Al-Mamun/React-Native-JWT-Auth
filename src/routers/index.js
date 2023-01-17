import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Home} from '../screens';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        ...TransitionPresets.FadeFromBottomAndroid
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default Routers;
