import React,{useEffect, useState} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './i18n';





const Stack = createNativeStackNavigator();

//screens
import Profile from './screens/Profile';
import Welcome from './screens/Welcome';
import IDcard from './screens/IDcard';
import Visit from './screens/Visit';
import Photo from './screens/Photo';
import Photo1 from './screens/Photo1';
import Verify from './screens/Verify';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default function App() {
  
  return (
   
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ title: 'Choose your language...', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }}
          />
          <Stack.Screen name="IDcard" component={IDcard} options={{ title: 'Step (1) - ID Card', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Profile" component={Profile} options={{ title: 'Step (2) - Profile', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Visit" component={Visit} options={{ title: 'Step (3) - Visit', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Photo" component={Photo} options={{ title: 'Step (4) - Photo', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Photo1" component={Photo1} options={{ title: 'Take Picture', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Verify" component={Verify} options={{ title: 'Step (5) - Verify', headerStyle: { backgroundColor: '#10B981' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}