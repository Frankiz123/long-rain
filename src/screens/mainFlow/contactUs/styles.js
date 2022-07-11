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
    profileIconContainer: {
        height: HP('5'),
        width: WP('7'),
        backgroundColor: 'transparent',
        marginRight: WP('3'),
        alignItems: 'flex-start'
    },
    profileIconStyle: {
        height: HP('3'),
        width: WP('5'),
        resizeMode: 'contain',
        marginRight: WP('3')
    },
    contactUsTextStyle: {
        fontSize: size.h3,
        color: colors.white,
        marginTop: WP('5'),
        alignSelf: 'center'
    },
    subjectTextInputStyle: {
        height: HP('7'),
        width: WP('90'),
        marginTop: HP('5'),
        alignSelf: 'center',
        paddingHorizontal: WP('4'),
        backgroundColor: colors.white_1
    },
    feedbackInputStyle: {
        height: HP('30'),
        width: WP('90'),
        marginTop: HP('3'),
        alignSelf: 'center',
        backgroundColor: colors.white_1
    },
    emailAddressInputStyle: {
        height: HP('7'),
        width: WP('90'),
        marginTop: HP('3'),
        alignSelf: 'center',
        paddingHorizontal: WP('4'),
        backgroundColor: colors.white_1
    },
    submitBtnStyle: {
        height: HP('5'),
        width: WP('40'),
        marginTop: WP('10'),
        alignSelf: 'center',
        marginBottom: WP('5')
    },
});