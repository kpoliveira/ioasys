import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {signIn} from '../../../src/services/auth';
import {books} from '../../services/books';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../services/redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {storeUser} from '../../services/redux/reducer/auth';
import Svg, {Circle, Path} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookList = (props: any) => {
  const [booksState, setBooks] = useState<any>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const nav = useNavigation();
  const user = useSelector((state: RootState) => state.auth.storeUser);

  useEffect(() => {
    if (user !== null) {
      fetch('1', '25', '', '', user.authorization);
    }
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

  const SvgComponent = () => (
    <Svg width={32} height={32} fill="none">
      <Circle
        r={15.5}
        transform="matrix(-1 0 0 1 16 16)"
        stroke="#333"
        strokeOpacity={0.2}
      />
      <Path
        d="m19 12 4 4m0 0-4 4m4-4H12.5M14.5 9H11a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.5"
        stroke="#333"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const LogoBlack = () => (
    <Svg width={105} height={36} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.633 16.285c.677.149 1.36.359 2.05.632a7.264 7.264 0 0 1 1.868 1.08 5.13 5.13 0 0 1 1.341 1.637c.339.646.508 1.415.508 2.307 0 1.167-.229 2.153-.688 2.96a5.764 5.764 0 0 1-1.796 1.954 7.639 7.639 0 0 1-2.485 1.079 11.6 11.6 0 0 1-2.756.334c-1.477 0-3.311-.31-4.622-1.032-1.434-.79-1.947-1.243-2.444-1.822-.23-.268-.291-.637-.051-.896l1.745-2.475c.23-.248.62-.488.897-.294.618.436 1.355.976 1.932 1.271 1.182.606 2.673.855 3.899.241.472-.234.697-.698.672-1.071-.038-.569-.288-.906-.868-1.18-.58-.271-1.487-.558-2.72-.855a13.497 13.497 0 0 1-1.887-.595 5.942 5.942 0 0 1-1.686-1.005 4.965 4.965 0 0 1-1.216-1.564c-.314-.62-.472-1.364-.472-2.232 0-1.117.23-2.066.69-2.848a5.924 5.924 0 0 1 1.778-1.917 7.797 7.797 0 0 1 2.411-1.097c.883-.236 1.76-.354 2.63-.354 1.355 0 2.528.185 3.805.722 1.089.457 1.626.756 2.42 1.405a.625.625 0 0 1 .056.911l-1.808 2.447c-.231.3-.587.28-.867.12-.459-.262-.758-.438-1.17-.653a4.849 4.849 0 0 0-1.34-.475c-.905-.17-1.716-.145-2.425.19-.472.225-.702.668-.702 1.213 0 .521.26.894.78 1.117.52.223 1.36.472 2.521.745ZM81.56 30.465a12.92 12.92 0 0 1-1.444 2.73c-1.726 2.556-4.96 3.174-7.544 2.615-1.212-.353-2.183-.764-2.68-1.344-.23-.267-.29-.636-.052-.895l1.525-2.736c.23-.25.619-.49.895-.296.28.197.923.491 1.404.491.722-.041 1.587-.076 2.456-2.08.372-.981.36-1.64-.19-3.082L69.364 9.994a.618.618 0 0 1 .567-.856h5.24c.263 0 .497.168.582.42l3.884 11.49h.11l3.459-11.471a.615.615 0 0 1 .587-.44h4.581c.43 0 .727.435.574.84L81.56 30.465Zm-16.181-3.61a7.64 7.64 0 0 1-2.485 1.079c-.919.224-1.838.334-2.758.334-1.475 0-3.31-.31-4.62-1.032-1.435-.79-1.947-1.243-2.444-1.822-.229-.268-.29-.637-.052-.896l1.747-2.475c.23-.248.618-.488.894-.294.62.436 1.357.976 1.933 1.271 1.184.606 2.673.855 3.9.241.472-.234.698-.698.672-1.071-.038-.569-.288-.906-.868-1.18-.58-.271-1.488-.558-2.72-.855a13.5 13.5 0 0 1-1.887-.595 5.942 5.942 0 0 1-1.686-1.005 4.967 4.967 0 0 1-1.216-1.564c-.314-.62-.471-1.364-.471-2.232 0-1.117.229-2.066.69-2.848a5.924 5.924 0 0 1 1.777-1.917 7.783 7.783 0 0 1 2.411-1.097c.883-.236 1.76-.354 2.63-.354 1.354 0 2.529.185 3.805.722 1.09.457 1.626.756 2.42 1.405a.626.626 0 0 1 .057.911l-1.81 2.447c-.231.3-.586.28-.866.12-.459-.262-.759-.438-1.17-.653a4.849 4.849 0 0 0-1.34-.475c-.905-.17-1.716-.145-2.425.19-.472.225-.701.668-.701 1.213 0 .521.259.894.778 1.117.521.223 1.362.472 2.522.745.677.149 1.36.359 2.049.632.69.273 1.312.634 1.87 1.08a5.147 5.147 0 0 1 1.34 1.637c.34.646.508 1.415.508 2.307 0 1.167-.23 2.153-.688 2.96a5.752 5.752 0 0 1-1.796 1.954Zm-16.231.819h-4.212a.616.616 0 0 1-.615-.618V25.7h-.108c-.46.769-1.156 1.365-2.087 1.786-.93.422-1.94.633-3.028.633-.726 0-1.476-.1-2.25-.297a6.496 6.496 0 0 1-2.122-.968c-.64-.447-1.167-1.043-1.578-1.787-.411-.745-.616-1.662-.616-2.754 0-1.34.357-2.42 1.07-3.239.713-.818 1.632-1.45 2.758-1.897 1.124-.446 2.374-.744 3.753-.893a37.464 37.464 0 0 1 4.026-.224v-.298c0-.917-.315-1.594-.942-2.029-.63-.432-1.403-.65-2.322-.65-.847 0-1.663.185-2.449.558-.592.28-1.413.75-1.874 1.116a.608.608 0 0 1-.83-.069l-1.766-2.398a.625.625 0 0 1 .056-.891c.954-.828 1.477-1.322 3.108-2.076 1.37-.633 2.86-.78 4.335-.78 1.524 0 2.812.191 3.864.576 1.052.384 1.904.98 2.556 1.786.654.807 1.131 1.824 1.434 3.052.302 1.228.453 2.686.453 4.374v8.724c0 .34-.275.617-.614.617Zm-4.827-7.679a.398.398 0 0 0-.396-.399h-.366c-.652 0-1.313.033-1.977.093a8.036 8.036 0 0 0-1.778.354c-.519.175-.948.428-1.286.763-.34.336-.508.776-.508 1.322 0 .348.077.645.236.893.156.248.356.447.598.595.241.15.52.255.834.317.314.061.617.093.907.093 1.209 0 2.133-.341 2.774-1.024.64-.681.962-1.606.962-2.772v-.235Zm-17.427 5.553A9.924 9.924 0 0 1 23.7 27.54c-1.209.47-2.502.706-3.882.706-1.353 0-2.641-.236-3.862-.706a9.68 9.68 0 0 1-3.193-1.992c-.906-.857-1.625-1.898-2.158-3.126-.532-1.229-.798-2.6-.798-4.114 0-1.513.266-2.877.798-4.093.533-1.215 1.252-2.245 2.159-3.09a9.358 9.358 0 0 1 3.192-1.935 11.18 11.18 0 0 1 3.862-.67c1.38 0 2.673.224 3.882.67a9.585 9.585 0 0 1 3.193 1.935c.918.845 1.644 1.875 2.176 3.09.531 1.216.798 2.58.798 4.093 0 1.515-.267 2.886-.798 4.114-.532 1.228-1.258 2.27-2.176 3.126Zm-7.056-11.98c-2.615 0-4.735 2.133-4.735 4.764a4.746 4.746 0 0 0 3.428 4.556c.407.132.838.222 1.326.222.592 0 1.109-.118 1.58-.314a4.747 4.747 0 0 0 3.136-4.464c0-2.631-2.12-4.764-4.736-4.764ZM2.89 7.168C1.483 6.9.333 5.742.066 4.326-.412 1.777 1.766-.415 4.3.067c1.407.268 2.558 1.425 2.826 2.84.484 2.55-1.7 4.748-4.235 4.262Zm-1.711 1.97h4.72c.34 0 .615.277.615.62v17.298c0 .34-.276.617-.615.617H1.18a.617.617 0 0 1-.615-.617V9.757c0-.342.276-.62.615-.62Z"
        fill="#333"
      />
    </Svg>
  );

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
          <LogoBlack />
          <Text style={{padding: '5%', fontSize: 30}}>Books</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem('@user');
              nav.navigate('AuthScreen');
            }}>
            <SvgComponent />
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
