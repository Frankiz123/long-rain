import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appIcons, appImages, size } from '../../../services';
import { colors, WP, HP, } from '../../../services';
import { Button, EditTextInput, BackgroundWraper } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { groupBy } from 'lodash';

const MainPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isKeepLogin } = useSelector(state => state.login);
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
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrowContainer}>
                        <Image
                            source={appIcons.backarrow}
                            style={styles.backArrowStyle}
                        />
                    </TouchableOpacity>
                    <View style={styles.myBestMemoriesImgCont}>
                        <Image
                            source={appImages.BestKeptMemories}
                            style={styles.myBestMemoriesImgStyle}
                        />
                    </View>
                    <View style={styles.subTitleTextContainer}>
                        <Text style={styles.subTitleTextStyle}>Bring your memories to life</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')} style={styles.profileIconContainer}>
                            <Image
                                style={styles.profileIconStyle}
                                source={appIcons.profileIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.contactUsTextStyle}>Contact us</Text>
                    <TextInput
                        style={styles.subjectTextInputStyle}
                        placeholder={'Subject'}
                        placeholderTextColor={colors.white}
                    />
                    <TextInput
                        style={styles.feedbackInputStyle}
                    />
                    <TextInput
                        style={styles.emailAddressInputStyle}
                        placeholder={'Your Email'}
                        placeholderTextColor={colors.white}
                    />

                    <Button
                        title={'Submit'}
                        containerStyle={styles.submitBtnStyle}
                    />
                </ScrollView>
            </View>
        </BackgroundWraper>
    );
};

export default MainPage;