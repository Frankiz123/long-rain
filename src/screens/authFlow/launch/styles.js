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
  backgroundImg: {
    height: HP('30'),
    width: WP('100'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: HP('15')
  },
  backgroundImgStyle: {
    height: HP('30'),
    width: WP('80'),
    resizeMode: 'center'
  },
  myBestMemoriesImgCont: {
    height: HP('6'),
    width: WP('100'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  myBestMemoriesImgStyle: {
    height: HP('6'),
    width: WP('80'),
    alignSelf: 'center',
    resizeMode: 'center'
  },
  buttonContainer: {
    height: HP('20'),
    width: WP('90'),
    justifyContent: 'center',
    marginTop: HP('5'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  bottomTextContainer: {
    height: HP('5'),
    width: WP('60'),
    marginTop: HP('5'),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  bottomTextStyle: {
    fontSize: size.small,
    color: colors.white,
    fontWeight:'bold',
  },
  bottomTextImgStyle: {
    height: HP('2'),
    width: WP('1.8'),
    resizeMode: 'contain',
    marginLeft: WP('3')
  },
});