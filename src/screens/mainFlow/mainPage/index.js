import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {appIcons, appImages, size} from '../../../services';
import {colors, WP, HP} from '../../../services';
import {Button, EditTextInput, BackgroundWraper} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';

const MainPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {isKeepLogin} = useSelector(state => state.login);
  useEffect(() => {
    const cbSuccess = response => {
      console.log('this is cb cbsuccess', response);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundWraper>
      <View style={styles.container}>
        <ScrollView>
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
              onPress={() => navigation.navigate('MyProfile')}
              style={{
                height: HP('5'),
                width: WP('7'),
                backgroundColor: 'transparent',
                marginRight: WP('3'),
                alignItems: 'flex-start',
              }}>
              <Image
                style={styles.profileIconStyle}
                source={appIcons.profileIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.creatMemoryBookMinContainer}>
            <View style={styles.creatMemoryBookIconContainer}>
              <Image
                source={appImages.undrawBrowserstats}
                style={styles.creatMemoryBookIconStyle_1}
              />
              <Image
                style={styles.creatMemoryBookIconStyle_2}
                source={appImages.undrawImagefolder}
              />
            </View>
            <View style={styles.creatMemoryBookTextContainer}>
              <Text style={styles.creatMemoryBookTextStyle}>
                Creat memory book
              </Text>
              <View style={styles.nextArrowContainer}>
                <Image
                  style={styles.nextArrowStyle}
                  source={appIcons.nextBtnIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('myMemoryBook')}
            style={styles.myMemoryBookMainContainer}>
            <Image
              source={appImages.undrawPhotos}
              style={styles.myMemoryBookImgStyle}
            />
            <View style={styles.myMemoryBookTextContainer}>
              <Text style={styles.myMemoryBookTextStyle}>My memory book</Text>
              <View style={styles.nextArrowContainer}>
                <Image
                  style={styles.nextArrowStyle}
                  source={appIcons.nextBtnIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactUs')}
            style={styles.contactUSMainContainer}>
            <Image
              source={appImages.undrawcontact}
              style={styles.contactUsImgStyle}
            />
            <View style={styles.contactUsTextcontainer}>
              <Text style={styles.contactUsTextStyle}>contact us</Text>
              <View style={styles.nextArrowContainer}>
                <Image
                  style={styles.nextArrowStyle}
                  source={appIcons.nextBtnIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </BackgroundWraper>
  );
};

export default MainPage;
