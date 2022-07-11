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

    myBestMemoriesImgCont: {
        width: WP('100'),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        marginTop: HP('15'),
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
        marginRight: WP('3')
    },
    creatMemoryBookMinContainer: {
        height: WP('25'),
        width: WP('94'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        marginTop: HP('10')
    },
    creatMemoryBookIconContainer: {
        height: WP('20'),
        width: WP('30'),
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    creatMemoryBookIconStyle_1: {
        height: WP('20'),
        width: WP('35'),
        resizeMode: 'contain'
    },
    creatMemoryBookIconStyle_2: {
        height: WP('35'),
        width: WP('35'),
        marginTop: WP('-35'),
        marginLeft: WP('0'),
        resizeMode: 'contain'
    },
    creatMemoryBookTextContainer: {
        width: WP('50'),
        backgroundColor: 'transparent',
        marginHorizontal: WP('5'),
        flexDirection: 'row'
    },
    creatMemoryBookTextStyle: {
        fontSize: size.small,
        color: colors.white,
        marginLeft: WP('10'),
        alignSelf: 'center'
    },
    nextArrowContainer: {
        height: HP('4'),
        width: WP('5'),
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    nextArrowStyle: {
        height: HP('1.5'),
        width: WP('3'),
        resizeMode: 'contain',
        marginLeft: WP('3')
    },
    myMemoryBookMainContainer: {
        height: WP('25'),
        width: WP('94'),
        alignSelf: 'center',
        backgroundColor: 'transparent',
        marginTop: HP('5'),
        flexDirection: 'row'
    },
    myMemoryBookImgStyle: {
        height: WP('30'),
        width: WP('35'),
        resizeMode: 'contain',
        marginTop: WP('-5'),
        marginLeft: WP('2')
    },
    myMemoryBookTextContainer: {
        width: WP('50'),
        backgroundColor: 'transparent',
        marginHorizontal: WP('5'),
        flexDirection: 'row'
    },
    myMemoryBookTextStyle: {
        fontSize: size.small,
        color: colors.white,
        marginLeft: WP('10'),
        alignSelf: 'center'
    },
    contactUSMainContainer: {
        height: WP('25'),
        width: WP('94'),
        alignSelf: 'center',
        backgroundColor: 'transparent',
        marginTop: HP('5'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contactUsImgStyle: {
        height: WP('35'),
        width: WP('50'),
        resizeMode: 'contain',
        marginTop: WP('-5'),
        marginLeft: WP('-5'),
        backgroundColor: 'transparent'
    },
    contactUsTextcontainer: {
        width: WP('40'),
        backgroundColor: 'transparent',
        marginHorizontal: WP('5'),
        flexDirection: 'row'
    },
    contactUsTextStyle: {
        fontSize: size.small,
        color: colors.white,
        marginLeft: WP('10'),
        alignSelf: 'center'
    },
});