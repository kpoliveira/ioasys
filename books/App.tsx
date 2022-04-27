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

const App = () => {
  const [user, setUser] = useState({});
  const isDarkMode = useColorScheme() === 'dark';
  const image = {uri: './assets/background.png'};

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
    <View style={styles.viewStyle}>
      <ImageBackground
        source={require('./src/assets/background.png')}
        resizeMode={'cover'}
        style={{height: '100%'}}>
        <View style={styles.centerItems}>
          <View style={styles.firstTitleRow}>
            <Image source={require('./src/assets/ioasys.png')} />
            <Text style={styles.booksText}>Books</Text>
          </View>
          <TouchableOpacity
            onPress={async () => {
              handleAuth('desafio@ioasys.com.br', '12341234');
            }}>
            <Text>Teste</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
  booksText:{
    fontSize: 35,
    paddingLeft: '4%',
    color: 'white'
  },
  firstTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
});

export default App;
