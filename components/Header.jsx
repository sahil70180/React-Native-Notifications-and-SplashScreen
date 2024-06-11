import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Header = () => {
  return (
    <>
      <Text style={styles.header}>ShopIT</Text>
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
