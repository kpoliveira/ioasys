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
import {books, booksId} from '../../services/books';
import Svg, {Path, Circle} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const BookDetails = (props: any) => {
  const [booksState, setBooks] = useState<any>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const image = {uri: './assets/background.png'};
  const nav = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch(props.route.params.id, props.route.params.auth);
  }, []);

  useEffect(() => {}, [booksState]);

  const SvgComponent = (props: any) => (
    <Svg width={32} height={32} fill="none" {...props}>
      <Path
        d="M24.045 17.115H10.207l5.93 6.462-.75.923-7.342-8 7.342-8 .75.923-5.93 6.462h13.838v1.23Z"
        fill="#333"
      />
      <Circle
        r={15.5}
        transform="matrix(-1 0 0 1 16 16)"
        stroke="#333"
        strokeOpacity={0.2}
      />
    </Svg>
  );

  const fetch = async (id: string, auth: string) => {
    const a = await booksId({
      id: id,
      auth: auth,
    });
    setBooks(a);
  };

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => {
          nav.goBack();
        }}>
        <SvgComponent />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          marginTop: '5%',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: booksState?.imageUrl}}
          style={{
            height: '50%',
            width: '70%',
          }}
        />
        <View>
          <Text style={{fontSize: 28, fontWeight: '500', color: '#333333'}}>
            {booksState?.title}
          </Text>
          {booksState?.authors?.length > 1 ? (
            <Text style={{fontSize: 12, fontWeight: '400', color: '#AB2680'}}>
              {booksState?.authors[0]}, {booksState?.authors[1]}
            </Text>
          ) : (
            <Text>{booksState?.authors}</Text>
            // <View />
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '5%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            INFORMAÇÕES
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#E5E5E5',
              justifyContent: 'flex-start',
            }}>
            INFORMAÇÕES
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '5%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            Páginas
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.pageCount} páginas
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            Editora
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.publisher}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            Publicação
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.published}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            Idioma
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.language}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            Título Original
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.title}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            ISBN-10
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.isbn10}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            ISBN-13
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.isbn13}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '1%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            Categoria
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.category}
          </Text>
        </View>
        {/* /////////////////////////////////////////////////////// */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '5%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#333333',
              justifyContent: 'flex-start',
            }}>
            RESENHA DA EDITORA
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#E5E5E5',
              justifyContent: 'flex-start',
            }}>
            {booksState?.publisher}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            paddingTop: '5%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#999999',
              justifyContent: 'flex-start',
            }}>
            {booksState?.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: '5%',
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

export default BookDetails;
