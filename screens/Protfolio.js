import { Button, StyleSheet, Text, View } from "react-native";

const Protfolio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Protfolio</Text>
      <Button onPress={() => navigation.navigate("Photo")} title="Vers Photo" />
    </View>
  );
};

export default Protfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
