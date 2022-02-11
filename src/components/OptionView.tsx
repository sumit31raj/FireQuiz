import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors, Size, Theme } from '../theme';

interface OptionViewProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (text: string) => void;
}

const OptionView: React.FC<OptionViewProps> = props => {
  const onPress = useCallback(() => {
    props.onPress?.(props.text);
  }, [props]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, props.style]}>
        <Text style={styles.optionText}>{props.text}</Text>
      </View>
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
});

export { OptionView };
