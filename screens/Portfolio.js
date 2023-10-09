import { Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { useLayoutEffect } from "react";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Portfolio de ${name}`,
      headerTitle:{},
      headerStyle: {
        backgroundColor: "olive",
      },
      headerTintColor: Colors.white,
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
    </View>
  );
};

export default Portfolio;
