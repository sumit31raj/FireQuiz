import React from 'react';
import { Text, StyleSheet, View, StyleProp, TextStyle } from 'react-native';
import { Colors, Size } from '../theme';

interface FillBlankProps {
  length: number;
  textStyle?: StyleProp<TextStyle>;
}

const FillBlank: React.FC<FillBlankProps> = props => {
  const { fontSize = Size[20] } = props.textStyle as TextStyle;
  return (
    <View>
      <Text style={{ fontSize }}>{' '.repeat(props.length)}</Text>
      <View style={styles.underlineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  underlineView: {
    height: Size[1],
    backgroundColor: Colors.white,
  },
});

export { FillBlank };
