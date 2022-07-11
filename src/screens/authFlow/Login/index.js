import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {appImages, HP} from '../../../services';
import {EditTextInput, BackgroundWraper} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginAction, getUserProfile} from '../../../redux/actions/auth-actions';
import {validateEmail} from '../../../utils/helpers';
import {CommonActions} from '@react-navigation/native';

const LogIn = ({navigation}) => {
  const dispatch = useDispatch();
  const {isKeepLogin} = useSelector(state => state.login);
  const [email, setEmail] = useState('usama@ymail.com');
  const [password, setPassword] = useState('123123');
  const [loading, setLoading] = useState(false);

  const getProfileData = id => {
    let params = {
      user_id: id,
    };
    dispatch(getUserProfile(params));
  };

  const handleLoginRequest = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter valid email!');
      return;
    }
    if (password?.length < 6) {
      Alert.alert('Error', 'Password must be 6 characters long');
      return;
    }
    setLoading(true);
    const cbSuccess = response => {
      console.log('this is response from login - - > ', response);
      getProfileData(response?.data?.user?.id);
      setLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainPage'}],
        }),
      );
    };
    const cbFailure = response => {
      setLoading(false);
      try {
        if (response?.data && Object.values(response.data)[0][0]) {
          Alert.alert('Login Fail', Object.values(response.data)[0][0]);
        } else {
          Alert.alert(
            'Failed to Login',
            'Please recheck credentials or interconnection',
          );
        }
      } catch (e) {
        Alert.alert(
          'Failed to Login',
          'Please recheck credentials or interconnection',
        );
      }
    };

    let formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    dispatch(loginAction(formData, cbSuccess, cbFailure));
  };

  const _renderLoginButton = () => {
    if (loading) {
      return (
        <ActivityIndicator
          style={styles.bottomTextContainer}
          size={'small'}
          color={'white'}
        />
      );
    } else {
      return (
        <TouchableOpacity
          onPress={handleLoginRequest}
          style={styles.bottomTextContainer}>
          <Text style={styles.bottomTextStyle}>Login</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <BackgroundWraper>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.backgroundImg}>
            <Image
              source={appImages.undrawLoving}
              style={styles.backgroundImgStyle}
            />
          </View>
          <View style={{marginTop: HP('-35')}}>
            <View style={styles.myBestMemoriesImgCont}>
              <Image
                source={appImages.BestKeptMemories}
                style={styles.myBestMemoriesImgStyle}
              />
            </View>
            <View style={styles.textInputMainContainer}>
              <EditTextInput
                value={email}
                onChangeValue={setEmail}
                label={'Email'}
              />
              <EditTextInput
                value={password}
                onChangeValue={setPassword}
                label={'Passowrd'}
                secureTextEntry={true}
              />
            </View>
          </View>
          {_renderLoginButton()}
          <TouchableOpacity style={styles.forgotPaswordTextContainer}>
            <Text style={styles.forgotPaswordTextStyle}>Forgot Password</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </BackgroundWraper>
  );
};

export default LogIn;
