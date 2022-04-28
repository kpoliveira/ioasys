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
import {TextInput} from 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {signIn} from '../../../src/services/auth';
import {useNavigation} from '@react-navigation/native';

const AuthScreen = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const nav = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    //TROCA DE TELA AQUI
    nav.navigate('BookList', {auth: user.authorization});
  }, [user]);

  const handleAuth = async (email: string, password: string) => {
    try {
      const a = await signIn({
        email: email,
        password: password,
      });
      console.log(a);
      setUser(a);
    } catch (e) {
      console.log('n foi');
    }
  };

  return (
    <View style={styles.viewStyle}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode={'cover'}
        style={{height: '100%'}}>
        <View style={styles.centerItems}>
          <View style={styles.firstTitleRow}>
            <Image source={require('../../assets/ioasys.png')} />
            <Text style={styles.booksText}>Books</Text>
          </View>

          <View style={styles.inputBlock}>
            <View
              style={{
                marginTop: '5%',
                backgroundColor: 'rgba(0, 0, 0, 0.32)',
                borderRadius: 4,
                padding: '2%',
              }}>
              <Text style={{color: 'white'}}>Email</Text>
              <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.emailField}
                placeholder={'books@ioasys.com.br'}
                placeholderTextColor={'white'}
              />
            </View>

            <View
              style={{
                marginTop: '5%',
                backgroundColor: 'rgba(0, 0, 0, 0.32)',
                borderRadius: 4,
                padding: '2%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'white'}}>Senha</Text>
                <TextInput
                  onChangeText={setPassword}
                  value={password}
                  style={styles.emailField}
                  placeholder={'books@ioasys.com.br'}
                  placeholderTextColor={'white'}
                />
              </View>
              <TouchableOpacity
                onPress={async () => {
                  handleAuth(email, password);
                }}
                style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: '12%',
                  paddingVertical: '1%',
                  borderRadius: 44,
                }}>
                <View>
                  <Text style={{color: '#B22E6F'}}>Entrar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
  inputBlock: {
    marginTop: '15%',
  },
  centerItems: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    // alignItems: 'center'
    padding: '16%',
  },
  emailField: {
    // backgroundColor: 'rgba(0, 0, 0, 0.32)',
    shadowOpacity: 3,
    borderRadius: 4,
    color: 'white',
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

export default AuthScreen;
