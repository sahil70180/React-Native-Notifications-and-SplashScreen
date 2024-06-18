import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{color: 'black'}}>Home Page</Text>
      <Button
        title="Check IPhone Details"
        onPress={() => navigation.navigate('Details', {name: 'IPhone'})}
      />
    </View>
  );
};

export default Home;
