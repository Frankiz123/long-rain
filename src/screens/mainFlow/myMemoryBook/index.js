import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { appIcons, appImages, size } from '../../../services';
import { colors, WP, HP, } from '../../../services';
import { Button, EditTextInput, BackgroundWraper } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { groupBy } from 'lodash';
import { Avatar } from 'react-native-elements';


const myMemoryBook = ({ navigation }) => {
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
                        <TouchableOpacity style={{ height: HP('5'), width: WP('7'), backgroundColor: 'transparent', marginRight: WP('3') }}>
                            <Image
                                style={styles.profileIconStyle}
                                source={appIcons.profileIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: HP('5'), width: WP('100'), alignItems: 'center', paddingHorizontal: HP('2'), justifyContent: 'space-between', backgroundColor: 'transparent', marginVertical: HP('5'), flexDirection: 'row' }}>
                        <Text style={{ fontSize: size.xxlarge, color: colors.white, marginLeft: WP('3') }}>My memory books</Text>
                        <TouchableOpacity style={{ height: HP('5'), width: WP('7'), backgroundColor: 'transparent', justifyContent: 'center' }}>
                            <Image
                                style={styles.profileIconStyle}
                                source={appIcons.shareIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </BackgroundWraper>
    );
};

export default myMemoryBook;