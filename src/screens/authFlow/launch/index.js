import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {appIcons, appImages} from '../../../services';
import {Button, BackgroundWraper} from '../../../components';

const Launch = ({navigation}) => {
  return (
    <BackgroundWraper>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.backgroundImg}>
            <Image
              source={appImages.loginBackgroundImg}
              style={styles.backgroundImgStyle}
            />
          </View>
          <View style={styles.myBestMemoriesImgCont}>
            <Image
              source={appImages.BestKeptMemories}
              style={styles.myBestMemoriesImgStyle}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title={'Facebook Sign Up'} backgroundColor="#E5E5E5" />
            <Button title={'Email Sign Up'} backgroundColor="#E5E5E5" onPress={()=> navigation.navigate('SignUp')} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('LogIn')}
            style={styles.bottomTextContainer}>
            <Text style={styles.bottomTextStyle}>
              I already have an account
            </Text>
            <Image
              style={styles.bottomTextImgStyle}
              source={appIcons.nextbtnicon}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </BackgroundWraper>
  );
};

export default Launch;
