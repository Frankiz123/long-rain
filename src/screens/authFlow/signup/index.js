import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {appIcons, appImages} from '../../../services';
import {colors, WP, HP} from '../../../services';
import {Button, EditTextInput, BackgroundWraper} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signUpAction} from '../../../redux/actions';
import Toast from 'react-native-simple-toast';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const {isKeepLogin} = useSelector(state => state.login);

  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = () => {
    setLoader(true);
    const cbSuccess = data => {
      console.log('[cbSuccess-data]', data);
      setLoader(false);
      navigation.navigate('LogIn');
    };
    const cbFailure = error => {
      console.log('[cbFailure-error]', error);
      Toast.show('Something went wrong, Please try again');
      setLoader(false);
    };
    let params = {
      email: email,
      password: password,
      name: name,
    };
    dispatch(signUpAction(params, cbSuccess, cbFailure));
  };

  return (
    <BackgroundWraper>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.backgroundImg}>
            <Image
              source={appImages.undrawwelcome}
              style={styles.backgroundImgStyle}
            />
          </View>
          <View style={styles.myBestMemoriesImgCont}>
            <Image
              source={appImages.BestKeptMemories}
              style={styles.myBestMemoriesImgStyle}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <EditTextInput
              label={'Name'}
              value={name}
              onChangeValue={value => setName(value)}
            />
            <EditTextInput
              label={'Email'}
              value={email}
              onChangeValue={value => setEmail(value)}
            />
            <EditTextInput
              label={'Password'}
              value={password}
              secureTextEntry={true}
              onChangeValue={value => setPassword(value)}
            />
          </View>
          {loader ? (
            <ActivityIndicator
              color={colors.white}
              size={'large'}
              style={{marginTop: WP('10')}}
            />
          ) : (
            <TouchableOpacity
              onPress={() => signupHandler()}
              style={styles.bottomTextContainer}>
              <Text style={styles.bottomTextStyle}>Sign Up</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </BackgroundWraper>
  );
};

export default SignUp;
