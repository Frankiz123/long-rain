import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../services/colors';
import {family, size, HP, WP} from '../../services';
export const Button = ({
  title,
  onPress,
  containerStyle,
  backgroundColor = colors.primary,
  textColor = colors.white,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.textStyle, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    height: HP('8'),
    display: 'flex',
    borderRadius: WP('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: size.large,
    color: colors.white,
  },
});
