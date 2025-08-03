import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

const NotificationRequest = () => {

    useEffect(() => {
        const requestNotificationPermission = async () => {
            try {
                if (Platform.OS === 'android') {
                    await requestAndroidNotificationPermission();
                } else {
                    await requestIOSNotificationPermission();
                }
            } catch (error) {
                console.error('Permission request failed:', error);
            }
        };

        const requestIOSNotificationPermission = async () => {
            await messaging().requestPermission();
        };

        const requestAndroidNotificationPermission = async () => {
            try {
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
                );
            } catch (err) {
                console.warn(err);
            }
        };

        requestNotificationPermission();
    }, []);

    return null; // Render nothing or customize as needed
};

export default NotificationRequest;
