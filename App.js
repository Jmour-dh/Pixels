import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Photo from "./screens/Photo";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "./styles/Colors";
import Faq from "./screens/Faq";

import { MaterialIcons } from "@expo/vector-icons";
import MaterialIconsHeader from "./components/MaterialIconsHeader";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Selected from "./screens/Selected";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightBrown,
        },
        headerTintColor: Colors.white,
        //drawerActiveTintColor:"#333"
        //drawerActiveBackgroundColor:Colors.lightBrown
        // drawerInactiveTintColor:'red',
        // drawerInactiveBackgroundColor:"yellow"
        // drawerStyle: {
        //   backgroundColor: "#c6cbef",
        //   width: 240,
        // },
        headerTintColor: Colors.white,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Accueil",
          //  drawerLabel:'Tous les membres'
          drawerIcon: ({ color }) => (
            <MaterialIcons
              name="supervised-user-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          title: "FAQ",
          drawerIcon: ({ color }) => (
            <MaterialIconsHeader iconName="question-answer" iconColor={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "olive",
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          // title: "Accueil",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={({ route }) => {
          return {
            title: `Portfolio de ${route.params.name.toUpperCase()}`,
            headerStyle: {
              backgroundColor: route.params.favColor,
            },
          };
        }}
      />
      <Stack.Screen
        name="Photo"
        component={Photo}
        options={{ title: "Photo" }}
      />
    </Stack.Navigator>
  );
}

function selectedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photo"
        component={Photo}
        options={{ title: "Photo" }}
      />
    </Stack.Navigator>
  );
}

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
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTintColor: Colors.white,
            // tabBarActiveTintColor: Colors.lightBrown,
            // tabBarInactiveTintColor: Colors.darkGrey,
            // tabBarLabelPosition: "beside-icon",
            // tabBarShowLabel: false,
            // tabBarActiveBackgroundColor:"red",
          }}
        >
          <Tab.Screen
            name="Membres"
            component={MyStack}
            options={{
              headerShown: false,
              tabBarLabel: "Accueil",
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
              tabBarStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.lightBrown : Colors.white,
              },
              tabBarActiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.lightBrown,
              tabBarInActiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.darkGrey,
            }}
          />
          <Tab.Screen
            name="Likes"
            component={selectedStack}
            options={{
              title: "FAVORIS",
              tabBarLabel: "Selection",
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="thumb-up" size={size} color={color} />
              ),
              tabBarStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.darkGrey : Colors.white,
              },
              tabBarActiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.lightBrown,
              tabBarInActiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.darkGrey,
              headerStyle: {
                backgroundColor:
                  Platform.OS === "android"
                    ? Colors.darkGrey
                    : Colors.lightBrown,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
