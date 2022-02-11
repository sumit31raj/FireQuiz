import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import I18n from 'i18n-js';

import { Button } from './Button';
import { Colors, Size, Theme } from '../theme';
import { FlagIcon } from '../assets';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AlertViewProps {
  visible: boolean;
  type: 'success' | 'error';
  errorMessage?: string;
  onContinue?: () => void;
}

const t: LocaleType = key => I18n.t(`components.alertView.${key}`);

const AlertView: React.FC<AlertViewProps> = props => {
  const insets = useSafeAreaInsets();

  const isSuccess = props.type === 'success';

  const title = isSuccess ? t('greatJob') : t('answer');

  if (!props.visible) {
    return null;
  }

  return (
    <LinearGradient
      style={[styles.container, { paddingBottom: insets.bottom + Size[20] }]}
      colors={
        isSuccess
          ? [Colors.background.secondary, Colors.background.secondary]
          : Colors.gradient
      }>
      <View style={styles.messageView}>
        <Text style={styles.message}>
          {title}
          {!isSuccess && <Text style={styles.errorMessage}>: {props.errorMessage}</Text>}
        </Text>
        <Image source={FlagIcon} style={styles.icon} />
      </View>
      <Button
        style={styles.button}
        textStyle={isSuccess ? styles.successText : styles.errorText}
        onPress={props.onContinue}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    paddingTop: Size[20],
    borderTopLeftRadius: Size[20],
    borderTopRightRadius: Size[20],
  },
  messageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Size[20],
    marginBottom: Size[20],
  },
  button: {
    backgroundColor: Colors.white,
  },
  successText: {
    color: Colors.text.success,
  },
  errorText: {
    color: Colors.text.error,
  },
  message: {
    ...Theme.body1Bold,
    color: Colors.white,
  },
  errorMessage: {
    ...Theme.body2,
  },
  icon: {
    width: Size[20],
    height: Size[20],
    tintColor: Colors.white,
  },
});

export { AlertView };
