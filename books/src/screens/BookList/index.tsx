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
import {FlatList} from 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {signIn} from '../../../src/services/auth';
import {books} from '../../services/books';
import {useNavigation} from '@react-navigation/native';

const BookList = (props: any) => {
  const [booksState, setBooks] = useState<any>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const nav = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log('AUTH---------:', props.route.params.auth);
    fetch('1', '25', '', '', props.route.params.auth);
  }, []);

  const fetch = async (
    page: string,
    amount: string,
    title?: string,
    category?: string,
    auth?: string,
  ) => {
    const a = await books({
      page: page,
      amount: amount,
      title: title,
      category: category,
      auth: auth,
    });
    setBooks(a);
  };

  return (
    <View style={styles.viewStyle}>
      <View
        style={{
          flexDirection: 'row',
          padding: '10%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/ioasysBlack.png')} />
          <Text style={{padding: '5%', fontSize: 30}}>Books</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Image source={require('../../assets/signOut.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1%',
          width: '100%',
          borderRadius: 4,
        }}>
        <FlatList
          data={booksState.data}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <TouchableOpacity
                onPress={() => {
                  nav.navigate('BookDetails', {
                    id: item.id,
                    auth: props.route.params.auth,
                  });
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    alignItems: 'center',
                    // flex: 1,
                    flexDirection: 'row',
                    marginBottom: '5%',
                    // width: '90%',
                    // paddingHorizontal: '10%',
                    paddingVertical: '15%',
                    justifyContent: 'center',
                    borderRadius: 4,
                  }}>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={{
                      height: '120%',
                      width: '30%',
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      // alignItems: 'flex-start',
                      padding: '10%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          color: '#333333',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: '#AB2680',
                        }}>
                        {item.authors[0]}
                      </Text>
                    </View>

                    <View>
                      <Text>{item.pageCount} páginas</Text>
                      <Text>{item.publisher}</Text>
                      <Text>Publicado em {item.published}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1,
    backgroundColor: '#E5E5E5',
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

export default BookList;
