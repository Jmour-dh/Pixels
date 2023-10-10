import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/AppStyles";

const TouchableImage = ({ imgUrl, onSelectPhoto, imgTitle }) => {
  return (
    <View style={globalStyles.photoContainer}>
      <TouchableOpacity onPress={onSelectPhoto}>
        <ImageBackground source={{ uri: imgUrl }} style={globalStyles.bgPhoto}>
          <View style={globalStyles.photoTitle}>
            <Text style={globalStyles.photoTitleText}>{imgTitle}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableImage;
