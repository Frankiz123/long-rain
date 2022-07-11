import {
    StyleSheet,
    Platform
  } from 'react-native';
  import {
    colors,
    WP,
    HP,
    size,
    family
  } from '../../../services';
  
  export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    backArrowContainer: {
        height: HP('4'),
        width: WP('7'),
        backgroundColor: 'transparent',
        marginTop: WP('15'),
        justifyContent: 'center',
        marginHorizontal: WP('4')
    },
    backArrowStyle: {
        height: HP('3'),
        width: WP('5'),
        resizeMode: 'contain'
    },
    myBestMemoriesImgCont: {
        width: WP('100'),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        marginTop: HP('10'),
    },
    myBestMemoriesImgStyle: {
        height: HP('6'),
        width: WP('70'),
        resizeMode: 'center',
        backgroundColor: 'transparent'
    },
    subTitleTextContainer: {
        height: HP('5'),
        width: WP('100'),
        backgroundColor: 'transparent',
        marginTop: HP('-2'),
        justifyContent: 'space-between',
        borderBottomWidth: WP('0.1'),
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    subTitleTextStyle: {
        fontSize: size.tiny,
        color: colors.white,
        marginTop: HP('2'),
        marginLeft: WP('3')
    },
    profileIconStyle: {
        height: HP('3'),
        width: WP('5'),
        resizeMode: 'contain',
    },
    contactUsTextStyle: {
        fontSize: size.h3,
        color: colors.white,
        marginTop: WP('5'),
        alignSelf: 'center'
    },
  });