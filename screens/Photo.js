import { Image, ScrollView, Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import { useLayoutEffect } from "react";

const Photo = ({ navigation, route }) => {
  // const url = route.params.url;
  // const title = route.params.title;
  // const photoDesc = route.params.photoDesc;

  const { url, title, photoDesc } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: title.toUpperCase() });
  }, [navigation, title]);

  return (
    <ScrollView style={globalStyles.container}>
      <Image style={globalStyles.selectedImage} source={{ uri: url }} />
      <View style={globalStyles.photoDescription}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.textDescription}>{photoDesc}</Text>
        <Text style={globalStyles.textDescription}>{photoDesc}</Text>
      </View>
    </ScrollView>
  );
};

export default Photo;
