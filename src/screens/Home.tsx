import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return (
    <View style={style.container}>
      <Text />
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});

export { Home };
