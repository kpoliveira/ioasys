import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {signIn} from './src/services/auth';
import AuthScreen from './src/screens/AuthScreen/index';
import BookList from './src/screens/BookList/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BookDetails from './src/screens/BookDetails';
import {Provider} from 'react-redux';
import {store} from './src/services/redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="AuthScreen">
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="BookList" component={BookList} />
          <Stack.Screen name="BookDetails" component={BookDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
