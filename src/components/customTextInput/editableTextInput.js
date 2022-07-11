/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {colors, family, HP, size, WP} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const EditTextInput = ({
  label,
  value,
  onChangeValue,
  containerStyle,
  row,
  secureTextEntry,
}) => {
  const _renderInputField = () => {
    return (
      <TextInput
        value={value}
        placeholder={label}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        placeholderTextColor={colors.white}
        onChangeText={onChangeValue}
        style={styles.textInput}
      />
    );
  };
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <View style={{flex: row ? 0.8 : 1}}>{_renderInputField()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    height: HP(8),
    width: WP('90'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: WP(3),
    paddingHorizontal: WP(4),
    paddingVertical: WP(1),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInput: {
    height: HP(6.5),
    width: WP('85'),
    // display: 'flex',
    textAlign: 'center',
    color: colors.gray_2,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
  },
});
