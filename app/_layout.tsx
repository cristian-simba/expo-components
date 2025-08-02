import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useColorScheme } from '@/hooks/useColorScheme';
import "./global.css"
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemeView from '@/presentation/share/ThemeView';
import ThemeText from '@/presentation/share/ThemeText';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const bgColor = useThemeColor({}, 'background')

  return (
    <GestureHandlerRootView style={{backgroundColor: bgColor, flex: 1}}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemeView>
          <ThemeText type='h1' className='mt-14'>Hola mundo</ThemeText>
        </ThemeView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
