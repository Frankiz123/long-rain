import React, {useState, useEffect, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Launch from '../screens/authFlow/launch';
import SignUp from '../screens/authFlow/signup';
import LogIn from '../screens/authFlow/Login';
import MainPage from '../screens/mainFlow/mainPage';
import ContactUs from '../screens/mainFlow/contactUs';
import MyProfile from '../screens/mainFlow/MyProfile';
import myMemoryBook from '../screens/mainFlow/myMemoryBook';
import UploadImages from '../screens/mainFlow/uploadImages';

const Stack = createStackNavigator();

export const AppContainer = () => {
  // UNCOMMENT THIS IN PRODUCTION AND REMOVE THE ABOVE
  const [initialRoute, setInitialRoute] = useState({
    initialRouteName: '',
    initialParams: {},
  });

  const {isKeepLogin} = useSelector(state => state.login);

  const [loading, setLoading] = useState(true);

  const setupScreenOrder = useCallback(() => {
    console.log('[Login persistor]', isKeepLogin);
    // CHECK ROLE IN THE MEMORY
    if (isKeepLogin) {
      setInitialRoute({
        initialRouteName: 'Settings',
        //initialRouteName: 'MyProfile',
      });
    } else {
      setInitialRoute({initialRouteName: 'Launch'});
    }
    // HIDE THE LOADER AND SHOW THE STACK
    setLoading(false);
  }, [isKeepLogin]);

  // ON START, SET THE SCREEN ORDER BASED ON THE ROLE OF THE USER IN MEMORY
  useEffect(() => {
    setupScreenOrder();
  }, [setupScreenOrder]);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        // initialRouteName={initialRoute.initialRouteName}
        // initialRouteName={'UploadImages'}
        >
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="myMemoryBook" component={myMemoryBook} />
        <Stack.Screen name="UploadImages" component={UploadImages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
