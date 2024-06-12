import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {SvgUri} from 'react-native-svg';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Header = () => {
  const [loading, setLoading] = React.useState(true);
  const onError = e => {
    console.log(e.message);
    setLoading(false);
  };
  const onLoad = () => {
    setLoading(false);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>
          <SvgUri
            width="40"
            height="40"
            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg"
            onError={onError}
            onLoad={onLoad}
          />
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
        <Text style={styles.header}>ShopIT</Text>
      </View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.banner}>Welcome to the ShopIT store</Text>
      </ImageBackground>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Gwendolyn-Bold',
  },
  header: {
    color: 'black',
    fontFamily: 'Gwendolyn-Bold',
    fontSize: 45,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 4,
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 100,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  banner: {
    color: 'white',
    fontFamily: 'Gwendolyn-Bold',
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: '#000000c0',
    paddingVertical: 50,
  },
});
