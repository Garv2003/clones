import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Animation from '../screen/Animation';
import Login from '../screen/Login';
import Register from '../screen/Register';
import MovieScreen from '../screen/MoviesScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SearchScreen from '../screen/SearchScreen';
import PersonScreen from '../screen/PersonScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Animation"
          options={{headerShown: false}}
          component={Animation}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        /> */}
        <Stack.Screen
          name="HomeScreen"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="MovieScreen"
          options={{headerShown: false}}
          component={MovieScreen}
        />
        <Stack.Screen
          name="PersonScreen"
          options={{headerShown: false}}
          component={PersonScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{headerShown: false}}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="SearchScreen"
          options={{headerShown: false}}
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
