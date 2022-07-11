import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors} from '../../services/colors';
import {family, size, HP, WP} from '../../services';
export const BackgroundWraper = ({
  containerStyle,
  children
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
        <Image source={require('../../assets/images/background.jpg')} style={styles.image} />
        <View style={styles.childrenStyle}>{children}</View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  image: {
    width: WP('100'),
  },
  childrenStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
