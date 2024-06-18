import React from 'react';
import {Text, View} from 'react-native';

const ProductDetails = ({route}) => {
  return (
    <View>
      <Text style={{color: 'black'}}>Product Details Page</Text>
      <Text>{route.params.name} Details</Text>
    </View>
  );
};

export default ProductDetails;
