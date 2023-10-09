import {  Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";
// import { useRoute } from "@react-navigation/native";

const Portfolio = ({ navigation, route }) => {

  // const route = useRoute()
 
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
    </View>
  );
};

export default Portfolio;


