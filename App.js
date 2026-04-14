import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from 'react-query';
import Store from './src/state';
import AppNavigation from './src/navigation';
import * as Notifications from 'expo-notifications';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import * as SplashScreen from 'expo-splash-screen';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const queryClient = new QueryClient();

  const [loaded] = useFonts({
    MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    MontserratLight: require('./src/assets/fonts/Montserrat-Light.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratExtraBold: require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
    MontserratBoldItalic: require('./src/assets/fonts/Montserrat-BoldItalic.ttf'),
    HelveticaNeueBold: require('./src/assets/fonts/HelveticaNBold.ttf'),
    Nexa: require('./src/assets/fonts/Nexa-Light.ttf'),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <AutocompleteDropdownContextProvider>
        <QueryClientProvider client={queryClient}>
          <AppNavigation />
        </QueryClientProvider>
      </AutocompleteDropdownContextProvider>
    </Provider>
  );
}
