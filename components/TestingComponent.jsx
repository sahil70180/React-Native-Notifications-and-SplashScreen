import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  Linking,
} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import Header from './components/Header';
import Label from './components/Label';
import FormInput from './components/FormInput';
import DocumentPicker from 'react-native-document-picker';
import PusshController from './PusshController';

const TestingComponent = () => {
  const [firstName, onChangefirstName] = React.useState('');
  const [lastName, onChangelastName] = React.useState('');
  const [email, onChangeemail] = React.useState('');
  const [password, onChangepassword] = React.useState('');
  const [phone, onChangephone] = React.useState('');
  const [selectedFile, onChangeSelectedFile] = React.useState([]);

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
      avatar: selectedFile,
    };
    console.log('Form Data :', formData);
    return (
      onChangeemail(''),
      onChangefirstName(''),
      onChangelastName(''),
      onChangepassword(''),
      onChangephone(''),
      onChangeSelectedFile([]),
      Alert.alert('Thanks for Your Submission!')
    );
  };

  const handleSelect = async () => {
    const response = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      presentationStyle: 'fullScreen',
    });
    if (response) {
      await onChangeSelectedFile(response);
      Alert.alert('File Selected');
    } else {
      Alert.alert('Please Try Again');
    }
  };

  const handleClick = async () => {
    await Linking.openURL('https://github.com/sahil70180');
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
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
            <Label text={'Enter First NAme'} />
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
            <Label text={'Upload Avatar'} />
            <Pressable style={styles.select} onPress={() => handleSelect()}>
              <Text style={styles.selectText}>{'Select Image to Upload'}</Text>
            </Pressable>
            {selectedFile.map((file, index) => (
              <Text
                style={styles.uri}
                key={index.toString()}
                numberOfLines={1}
                ellipsizeMode={'middle'}>
                {file?.name}
              </Text>
            ))}
            <Pressable style={styles.button} onPress={() => handlePress()}>
              <Text style={styles.btntext}>{'Create Your Account'}</Text>
            </Pressable>
            <PusshController />
            <Text style={styles.footer} onPress={() => handleClick()}>
              {'Made with ❤️ By Sahil Kumar'}
            </Text>
          </View>
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    paddingVertical: 8,
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
  select: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 12,
    marginBottom: 5,
    borderColor: '#2f4f4f',
    borderWidth: 2,
  },
  selectText: {
    color: 'black',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
  },
  uri: {
    marginHorizontal: 12,
    fontWeight: 'bold',
  },
  footer: {
    color: 'black',
    textAlign: 'right',
    paddingHorizontal: 12,
    // fontWeight: 'bold',
    fontFamily: 'Gwendolyn-Bold',
    fontSize: 19,
  },
});

export default TestingComponent;
