import { View, Image, ScrollView, Text } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import { useLayoutEffect } from "react";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import TouchableImage from "../components/TouchableImage";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const profileImg = route.params.img;
  const favColor = route.params.favColor;
  const desc = route.params.desc;
  const photoArray = route.params.photos;

  const handlePress = () => {
    //HTTP request
    return alert("cliqué");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: `Portfolio de ${name}`,
      // headerStyle: {
      //   // backgroundColor: Platform.OS === "android" ? Colors.lightBrown : Colors.white,
      //   backgroundColor: favColor,
      // },
      // headerTintColor: "#333",
      headerRight: () => (
        <MaterialIconsHeader
          iconName="info-outline"
          iconColor="white"
          OnPressIcon={handlePress}
        />
      ),
    });
  }, [navigation]);

  const selectPhoto = (photo) => {
    navigation.navigate('Photo', photo)
   }

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ backgroundColor: favColor, ...globalStyles.profileInfos }}>
        <Image
          style={globalStyles.smallProfileImg}
          source={{ uri: profileImg }}
        />
        <Text style={globalStyles.profileName}> {name} </Text>
      </View>
      <View style={globalStyles.profileDescription}>
        <Text style={globalStyles.titleBioText}>Bio:</Text>
        <Text style={globalStyles.titleBio}>{desc}</Text>
      </View>
      <View>
        {photoArray.map((photo) => (
          <TouchableImage
            key={photo.id}
            imgUrl={photo.url}
            imgTitle={photo.title}
            onSelectPhoto={() => selectPhoto(photo)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Portfolio;
