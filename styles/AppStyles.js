import { Button, StyleSheet } from "react-native";
import Colors from "./Colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    fontSize: 20,
    fontFamily: "InriaSans-Light",
  },
  titleText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans-Bold",
  },
  profileImg: {
    width: 350,
    height: 350,
    borderRadius: 14,
  },
  profileItem :{
    padding:15,
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans-BoldItalic",
    fontSize: 25,
  },
});
