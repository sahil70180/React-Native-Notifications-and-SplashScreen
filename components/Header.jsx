import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {SvgUri} from 'react-native-svg';
// import Svg, {Path} from 'react-native-svg';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Header = () => {
  const [loading, setLoading] = React.useState(true);
  const onError = (e) => {
    console.log(e.message);
    setLoading(false);
  };
  const onLoad = () => {
    console.log('Svg loaded!');
    setLoading(false);
  };
  return (
    <>
      <Text style={styles.header}>
        {/* <Svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="150"
          width="150">
          <Path d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
        </Svg> */}
        <SvgUri
          style={styles.icon}
          width="30"
          height="30"
          uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg"
          onError={onError}
          onLoad={onLoad}
        />
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        ShopIT
      </Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.banner}>Welcome to the ShopIT store</Text>
      </ImageBackground>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontWeight: '800',
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 25,
    backgroundColor: 'white',
  },
  icon: {
    marginTop: 25,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  banner: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    paddingVertical: 70,
  },
});
