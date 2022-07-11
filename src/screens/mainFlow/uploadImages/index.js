import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appIcons, appImages, size } from '../../../services';
import { colors, WP, HP, } from '../../../services';
import { Button, EditTextInput, BackgroundWraper } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { groupBy } from 'lodash';
import { Avatar } from 'react-native-elements';


const UploadImages = ({ navigation }) => {
    // const dispatch = useDispatch();
    // const { isKeepLogin } = useSelector(state => state.login);
    // useEffect(() => {
    //     const cbSuccess = response => {
    //         console.log('this is cb cbsuccess', response);
    //     };
    //     dispatch(getLabels(cbSuccess));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);


    //onPress={() => navigation.goBack()}
    return (
        <BackgroundWraper>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ height: HP('6'), width: WP('94'), backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'space-between', marginTop: HP('10'), alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.backArrowContainer}>
                            <Image
                                source={appIcons.backarrow}
                                style={styles.backArrowStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DoneTextContainer}>
                            <Text style={{ fontSize: size.small, color: colors.white }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: HP('7'), width: WP('94'), backgroundColor: 'red', justifyContent: 'center', marginTop: HP('3'), alignSelf: 'flex-end' }}>
                        <Text style={{ fontSize: size.h4, fontWeight: 'bold', color: colors.white }}>Upload photos</Text>
                    </View>
                    <TouchableOpacity style={{ height: HP('7'), width: WP('94'), backgroundColor: 'transparent', alignItems: 'center', marginTop: HP('3'), alignSelf: 'flex-end', flexDirection: 'row' }}>
                        <Image
                            source={appIcons.phoneIcon}
                            style={{ height: HP('5'), width: WP('5'), resizeMode: 'contain', backgroundColor: 'transparent' }}
                        />
                        <Text style={{ fontSize: size.medium, color: colors.white, marginHorizontal: WP('8') }}>From phone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: HP('7'), width: WP('94'), backgroundColor: 'transparent', alignItems: 'center', marginTop: HP('3'), alignSelf: 'flex-end', flexDirection: 'row' }}>
                        <Image
                            source={appIcons.fbIcon}
                            style={{ height: HP('6'), width: WP('6'), resizeMode: 'contain', backgroundColor: 'transparent' }}
                        />
                        <Text style={{ fontSize: size.medium, color: colors.white, marginHorizontal: WP('7') }}>From phone</Text>
                    </TouchableOpacity>
                    <View style={{ width: WP('100'), borderBottomWidth: WP('0.1'), borderBottomColor: colors.white_1, marginTop: HP('3') }}></View>


                    <View style={{ height: HP('7'), width: WP('94'), backgroundColor: 'red', justifyContent: 'center', marginTop: HP('3'), alignSelf: 'flex-end' }}>
                        <Text style={{ fontSize: size.h4, fontWeight: 'bold', color: colors.white }}>Upload messages</Text>
                    </View>
                    <TouchableOpacity style={{ height: HP('7'), width: WP('94'), backgroundColor: 'transparent', alignItems: 'center', marginTop: HP('3'), alignSelf: 'flex-end', flexDirection: 'row' }}>
                        <Image
                            source={appIcons.smsIcon}
                            style={{ height: HP('6'), width: WP('6'), resizeMode: 'contain', backgroundColor: 'transparent' }}
                        />
                        <Text style={{ fontSize: size.medium, color: colors.white, marginHorizontal: WP('7') }}>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: HP('7'), width: WP('94'), backgroundColor: 'transparent', alignItems: 'center', marginTop: HP('3'), alignSelf: 'flex-end', flexDirection: 'row' }}>
                        <Image
                            source={appIcons.messengerIcon}
                            style={{ height: HP('6'), width: WP('6'), resizeMode: 'contain', backgroundColor: 'transparent' }}
                        />
                        <Text style={{ fontSize: size.medium, color: colors.white, marginHorizontal: WP('7') }}>Facebook messenger</Text>
                    </TouchableOpacity>
                    <View style={{ width: WP('100'), borderBottomWidth: WP('0.1'), borderBottomColor: colors.white_1, marginTop: HP('3') }}></View>
                </ScrollView>
            </View>
        </BackgroundWraper>
    );
};

export default UploadImages;