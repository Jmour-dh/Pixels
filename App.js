import Home from "./screens/Home";
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_300Regular,
  InriaSans_300Regular_Italic,
  InriaSans_300Bold,
  InriaSans_300Bold_Italic,
} from "@expo-google-fonts/inria-sans";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  let [fontLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_300Regular,
    InriaSans_300Regular_Italic,
    InriaSans_300Bold,
    InriaSans_300Bold_Italic,
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return <Home />;
}
