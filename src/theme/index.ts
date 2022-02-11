import { StyleSheet } from 'react-native';
import { Size } from './Size';
import { Colors } from './Colors';

const Theme = StyleSheet.create({
  h1: {
    fontSize: Size[24],
  },
  h1Bold: {
    fontSize: Size[24],
    fontWeight: 'bold',
  },
  body1: {
    fontSize: Size[18],
  },
  body1Bold: {
    fontSize: Size[18],
    fontWeight: 'bold',
  },
  body2: {
    fontSize: Size[16],
  },
  body2Bold: {
    fontSize: Size[16],
    fontWeight: 'bold',
  },
  body3: {
    fontSize: Size[13],
  },
  body3Bold: {
    fontSize: Size[13],
    fontWeight: 'bold',
  },
});

export { Theme, Size, Colors };
