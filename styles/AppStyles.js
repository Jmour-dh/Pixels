import { StyleSheet } from "react-native";
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
  profileItem: {
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans-BoldItalic",
    fontSize: 25,
  },
  profileInfos: {
    alignItems: "center",
    padding: 10,
  },
  smallProfileImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profileName: {
    fontFamily: "InriaSans-Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profileDescription: {
    backgroundColor: Colors.ghost,
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans-Regular",
  },
  titleBioText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans-Bold",
  },
  titleBio: {
    fontFamily: "InriaSans-Regular",
    fontSize: 20,
    padding: 9,
  },
  photoContainer: {
    width: "100%",
    height: 350,
    marginBottom: 19,
  },
  bgPhoto: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  photoTitle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 15,
  },
  photoTitleText: {
    fontFamily: "InriaSans-Regular",
    fontSize: 19,
    color: Colors.white,
  },
  selectedImage: {
    width: "100%",
    height: 300,
  },
  photoDescription: {
    padding: 15,
    fontSize: 25,
    fontFamily: "inriaSans-Regular",
  },
  textDescription: {
    fontFamily: "InriaSans-Regular",
    fontSize: 20,
    padding: 9,
  },
});
