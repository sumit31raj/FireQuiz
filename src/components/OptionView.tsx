import React, { useCallback } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Size, Theme } from '../theme';

interface OptionViewProps {
  text: string;
  type?: 'success' | 'error';
  style?: StyleProp<ViewStyle>;
  onPress?: (text: string) => void;
}

const Gradient: React.FC<Omit<OptionViewProps, 'text'>> = props => {
  const isSuccess = props.type === 'success';
  const colors = isSuccess
    ? [Colors.background.secondary, Colors.background.secondary]
    : Colors.gradient;

  return (
    <LinearGradient style={[styles.container, props.style]} colors={colors}>
      {props.children}
    </LinearGradient>
  );
};

const OptionView: React.FC<OptionViewProps> = props => {
  const onPress = useCallback(() => {
    props.onPress?.(props.text);
  }, [props]);

  const isTypeAvailable = Boolean(props.type) ?? false;

  console.log(isTypeAvailable);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {isTypeAvailable ? (
        <Gradient type={props.type}>
          <Text style={styles.gradientOptionText}>{props.text}</Text>
        </Gradient>
      ) : (
        <View style={[styles.container, props.style]}>
          <Text style={styles.optionText}>{props.text}</Text>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size[20],
    paddingVertical: Size[10],
    margin: Size[10],
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Size[20],
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    ...Theme.body2Bold,
    color: Colors.text.primary,
  },
  gradientOptionText: {
    ...Theme.body2Bold,
    color: Colors.white,
  },
});

export { OptionView };
