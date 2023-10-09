import { Button, StyleSheet, Text, View } from "react-native";
import {useEffect} from "react"

const Protfolio = ({ navigation }) => {
  useEffect(() => {
    return () => {
      console.log('Portfolio démonté');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
      <Button onPress={() => navigation.replace("Photo")} title="Vers Photo" />
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
