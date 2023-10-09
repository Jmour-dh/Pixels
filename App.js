import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Photo from "./screens/Photo";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./styles/Colors";

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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "olive",
          },
          headerTintColor: Colors.white,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Accueil",
          }}
        />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            title: "Portfolio",
          }}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
          options={{ title: "Photo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
