import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {appIcons, appImages, size} from '../../../services';
import {colors, WP, HP} from '../../../services';
import {Button, EditTextInput, BackgroundWraper} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar} from 'react-native-elements';
import {profileAction} from '../../../redux/actions/auth-actions';
import Toast from 'react-native-simple-toast';
const MainPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {login} = useSelector(state => state);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [loadingSave, setLoadingSave] = useState('');
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    setName(login.user.name);
    setEmail(login?.user?.email);
    if (login?.user?.profileId) {
      setName(login?.user?.full_name);
      setAddress(login?.user?.address);
      setCity(login?.user?.city);
      setZipcode(login?.user?.zip_code);
      setState(login?.user?.state);
      setCountry(login?.user?.country);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _validateData = () => {
    if (name.length < 3) {
      Alert.alert('Error', 'Name is invalid');
      return false;
    }

    if (address.length < 5) {
      Alert.alert('Error', 'Address is invalid');
      return false;
    }

    if (city.length < 3) {
      Alert.alert('Error', 'City is invalid');
      return false;
    }

    if (zip.length < 4) {
      Alert.alert('Error', 'Zip is invalid');
      return false;
    }

    if (state.length < 3) {
      Alert.alert('Error', 'State is invalid');
      return false;
    }

    if (country.length < 3) {
      Alert.alert('Error', 'Country is invalid');
      return false;
    }

    return true;
  };

  const handleRequest = () => {
    if (_validateData()) {
      setLoadingSave(true);
      const cbSuccess = () => {
        Toast.show('Profile updated successfully!');
        setLoadingSave(false);
      };
      const cbFailure = () => {
        setLoadingSave(false);
        Toast.show('Please update any field');
      };
      let params = {
        full_name: name,
        address: address,
        city: city,
        zip_code: zip,
        state: state,
        country: country,
        user: login.user.id,
      };
      dispatch(
        profileAction(
          params,
          login?.user?.profileId,
          login?.token,
          cbSuccess,
          cbFailure,
        ),
      );
    }
  };

  const _renderSaveButton = () => {
    if (loadingSave) {
      return (
        <ActivityIndicator
          style={styles.bottomTextContainer}
          size={'small'}
          color={'white'}
        />
      );
    } else {
      if (editMode) {
        return (
          <TouchableOpacity
            onPress={handleRequest}
            style={styles.bottomTextContainer}>
            <Text style={styles.bottomTextStyle}>Save</Text>
          </TouchableOpacity>
        );
      }
    }
  };

  return (
    <BackgroundWraper>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backArrowContainer}>
            <Image source={appIcons.backarrow} style={styles.backArrowStyle} />
          </TouchableOpacity>
          <View style={styles.myBestMemoriesImgCont}>
            <Image
              source={appImages.BestKeptMemories}
              style={styles.myBestMemoriesImgStyle}
            />
          </View>
          <View style={styles.subTitleTextContainer}>
            <Text style={styles.subTitleTextStyle}>
              Bring your memories to life
            </Text>
            <TouchableOpacity
              onPress={() => {
                setEditMode(prev => !prev);
              }}
              style={styles.editIconContStyle}>
              <Image
                style={[
                  styles.profileIconStyle,
                  editMode && {tintColor: '#001432'},
                ]}
                source={appIcons.editIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarMainContainer}>
            <Avatar
              rounded
              size="large"
              source={appImages.profileImg}
              containerStyle={{marginHorizontal: WP('10')}}
            />
            <Text style={styles.userNameTextStyle}>
              Hello, {login.user.name}
            </Text>
          </View>
          <View style={styles.textInputMainContainer}>
            <Image
              source={appIcons.nameIcon}
              style={styles.textInputImgStyle}
            />
            <TextInput
              style={styles.textInputStyle}
              value={name}
              editable={false}
              onChangeText={setName}
              placeholder={'Full name'}
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <Image
              source={appIcons.messageIcon}
              style={styles.textInputImgStyle}
            />
            <TextInput
              value={email}
              editable={false}
              onChangeText={setEmail}
              style={styles.textInputStyle}
              placeholder={'Email'}
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <Image
              source={appIcons.positionIcon}
              style={styles.textInputImgStyle}
            />
            <TextInput
              value={address}
              onChangeText={setAddress}
              style={styles.textInputStyle}
              placeholder={'Address'}
              editable={editMode}
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <Image
              source={appIcons.cityIcon}
              style={styles.textInputImgStyle}
            />
            <TextInput
              value={city}
              onChangeText={setCity}
              style={styles.textInputStyle}
              placeholder={'City'}
              editable={editMode}
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <Image source={appIcons.zipIcon} style={styles.textInputImgStyle} />
            <TextInput
              value={zip}
              onChangeText={setZipcode}
              style={styles.textInputStyle}
              placeholder={'Zip Code'}
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <Image
              source={appIcons.stateIcon}
              style={styles.textInputImgStyle}
            />
            <TextInput
              value={state}
              onChangeText={setState}
              style={styles.textInputStyle}
              placeholder={'State'}
              editable={editMode}
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.textInputMainContainer}>
            <Image
              source={appIcons.countryIcon}
              style={styles.textInputImgStyle}
            />
            <TextInput
              value={country}
              onChangeText={setCountry}
              style={styles.textInputStyle}
              placeholder={'Country'}
              editable={editMode}
              placeholderTextColor={colors.white}
            />
          </View>

          {_renderSaveButton()}

          <View style={{marginBottom: WP('10')}} />
        </ScrollView>
      </View>
    </BackgroundWraper>
  );
};

export default MainPage;
