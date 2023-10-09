import Home from "./screens/Home";
import Portfolio from "./screens/Protfolio"
import Photo from "./screens/Photo"

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "InriaSans-BoldItalic": require("./assets/fonts/InriaSans-BoldItalic.ttf"),
    "InriaSans-Italic": require("./assets/fonts/InriaSans-Italic.ttf"),
    "InriaSans-Light": require("./assets/fonts/InriaSans-Light.ttf"),
    "InriaSans-LightItalic": require("./assets/fonts/InriaSans-LightItalic.ttf"),
    "InriaSans-Regular": require("./assets/fonts/InriaSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
