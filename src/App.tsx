import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './locales/initI18n';
import { Home } from './screens';

const App = () => (
  <SafeAreaProvider>
    <Home />
  </SafeAreaProvider>
);

export default App;
