/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
} from 'react-native';

import Header from './components/Header';
import Label from './components/Label';
import FormInput from './components/FormInput';

function App(): React.JSX.Element {
  const [firstName, onChangefirstName] = React.useState('');
  const [lastName, onChangelastName] = React.useState('');
  const [email, onChangeemail] = React.useState('');
  const [password, onChangepassword] = React.useState('');
  const [phone, onChangephone] = React.useState('');

  const handlePress = () => {
    if (!firstName || !lastName || !email || !password || !phone) {
      return Alert.alert('All the fields are required');
    }
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
    };
    console.log('Form Data :', formData);
    return (
      onChangeemail(''),
      onChangefirstName(''),
      onChangelastName(''),
      onChangepassword(''),
      onChangephone(''),
      Alert.alert('Thanks for Your Submission!')
    );
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text
            style={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 20,
              fontWeight: '900',
            }}>
            Create Your Account
          </Text>
          <Label text={'Enter First Name'} />
          <FormInput
            value={firstName}
            onChangeText={e => onChangefirstName(e)}
            placeholder={'John'}
            secureTextEntry={false}
          />
          <Label text={'Enter Last Name'} />
          <FormInput
            value={lastName}
            onChangeText={e => onChangelastName(e)}
            placeholder={'Doe'}
            secureTextEntry={false}
          />
          <Label text={'Enter Email'} />
          <FormInput
            value={email}
            onChangeText={e => onChangeemail(e)}
            placeholder={'someone@gmail.com'}
            secureTextEntry={false}
          />
          <Label text={'Enter Phone No'} />
          <FormInput
            value={phone}
            onChangeText={e => onChangephone(e)}
            placeholder={'987654321'}
            secureTextEntry={false}
          />
          <Label text={'Create Password'} />
          <FormInput
            value={password}
            onChangeText={e => onChangepassword(e)}
            placeholder={'**********'}
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.btntext}>{'Create Your Account'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 12,
    marginVertical: 18,
    marginBottom: 10,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;
