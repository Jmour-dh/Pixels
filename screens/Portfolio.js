import { Text, View, Button, Platform } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { useLayoutEffect } from "react";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;
  const favColor = route.params.favColor;

  const handlePress = () => {
    //HTTP request
    return alert("cliqué");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: `Portfolio de ${name}`,
      // headerStyle: {
      //   // backgroundColor: Platform.OS === "android" ? Colors.lightBrown : Colors.white,
      //   backgroundColor: favColor,
      // },
      // headerTintColor: "#333",
      headerRight: () => (
        <MaterialIconsHeader
          iconName="info-outline"
          iconColor="white"
          OnPressIcon={handlePress}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.text}> OS:{Platform.OS}</Text>
      <Text style={globalStyles.text}>Version:{Platform.Version}</Text> */}

      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
      <Text style={globalStyles.text}>{favColor}</Text>
    </View>
  );
};

export default Portfolio;
