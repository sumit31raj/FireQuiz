import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import I18n from 'i18n-js';

import { Colors, Size, Theme } from '../theme';

interface ButtonProps {
  disabled?: boolean;
  text: string | null;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const t: LocaleType = (key: string) => I18n.t(`shared.${key}`);

const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.disabled ? styles.disable : styles.primary,
        props.style,
      ]}
      onPress={props.disabled ? undefined : props.onPress}>
      <Text style={[styles.buttonText, props.textStyle]}>
        {props?.text?.toUpperCase() || t('continue').toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size[20],
    paddingVertical: Size[15],
    marginHorizontal: Size[20],
  },
  disable: {
    backgroundColor: Colors.button.seecondary,
  },
  primary: {
    backgroundColor: Colors.button.primary,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    ...Theme.body3Bold,
    color: Colors.white,
  },
});

export { Button };
