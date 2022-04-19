import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes';
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand';
import theme from './src/global/styles/theme';
import { Login } from './src/screens/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        {/* <AppRoutes /> */}
        <Login />
      </NavigationContainer>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}

