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
    width: WP('100'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: HP('5')
  },
  backgroundImgStyle: {
    height: HP('25'),
    width: WP('80'),
    resizeMode: 'center'
  },
  myBestMemoriesImgCont: {
    height: HP('8'),
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
  textInputMainContainer: {
    height: HP('30'),
    width: WP('100'),
    marginTop: HP('5'),
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  bottomTextContainer: {
    height: HP('5'),
    width: WP('30'),
    marginTop: HP('5'),
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center'
  },
  bottomTextStyle: {
    fontSize:size.small,
    color:colors.white,
    fontWeight:'bold',
  },
});