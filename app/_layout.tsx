import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { allRoutes } from '@/constants/Routes';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import "./global.css"

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const bgColor = useThemeColor({}, 'background')

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }


  return (
    <GestureHandlerRootView style={{backgroundColor: bgColor, flex: 1}}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: bgColor
            },
            headerStyle: {
              backgroundColor: bgColor
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: "Home"  
            }}
          />

          {
            allRoutes.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title
                }}
              />
            ))
          }

        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
