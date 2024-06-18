// PushController.js
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PushController = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Request permissions if not already granted
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    };

    requestUserPermission();

    // Get the device token
    const getFcmToken = async () => {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('FCM Token ');
      } else {
        console.log('Failed to get FCM token.');
      }
    };

    getFcmToken();

    // Foreground message handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Process your foreground message
      console.log('Message : ', remoteMessage);
      Alert.alert(
        'A new message Recieved ',
        JSON.stringify(remoteMessage.notification),
      );
    });

    // Background or Quit message handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background Message:', remoteMessage);
      // Process your background message
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      const {ID} = remoteMessage.data;
      navigation.navigate('Details', {name: ID});
    });

    // Quit state messages
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          const {ID} = remoteMessage.data;
          navigation.navigate('Details', {name: ID});
        }
      });

    return unsubscribe;
  }, []);

  return null; // Since this component doesn't render anything visible
};

export default PushController;
