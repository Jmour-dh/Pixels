import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("Portfolio");
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button onPress={handlePress} title="Vers Portfolio" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans-BoldItalic",
    fontSize: 25,
  },
});
