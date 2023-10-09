import { StyleSheet, Text, View, Button } from "react-native";
import {useEffect} from "react"

const Photo = ({ navigation }) => {
  useEffect(() => {
    return () => {
      console.log('Photo démonté');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button onPress={() => navigation.popToTop()} title="Vers Portfolio" />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
