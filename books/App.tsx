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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {signIn} from './src/services/auth';
import AuthScreen from './src/screens/AuthScreen/index';
import BookList from './src/screens/BookList/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BookDetails from './src/screens/BookDetails';

const App = () => {
  const [user, setUser] = useState({});
  const isDarkMode = useColorScheme() === 'dark';
  const image = {uri: './assets/background.png'};
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    //TROCA DE TELA AQUI
  }, [user]);

  const handleAuth = async (email: string, password: string) => {
    const a = await signIn({
      email: email,
      password: password,
    });
    console.log(a);
    setUser(a);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthScreen">
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: '10%',
  },
  centerItems: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    // alignItems: 'center'
    padding: '16%',
  },
  booksText: {
    fontSize: 35,
    paddingLeft: '4%',
    color: 'white',
  },
  firstTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
});

export default App;
