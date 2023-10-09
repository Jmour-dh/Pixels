import { Text, View, Pressable, Image } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { useNavigation } from "@react-navigation/native";

const PressableItems = ({ item, handleNavigation }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Portfolio",item)}
      // onPress={handleNavigation}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.clicked : Colors.white,
        },
        globalStyles.profileItem,
      ]}
    >
      <Text style={globalStyles.titleText}> {item.name} </Text>
      <Image source={{ uri: item.img }} style={globalStyles.profileImg} />
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.info}> {item.country} </Text>
        <Text style={globalStyles.info}> {item.totalImg} </Text>
      </View>
    </Pressable>
  );
};

export default PressableItems;
