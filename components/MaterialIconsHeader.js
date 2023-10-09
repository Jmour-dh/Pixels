import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MaterialIconsHeader = ({iconName,OnPressIcon,iconColor}) => {
  return (
    <Pressable
    onPress={OnPressIcon}
    style={({pressed}) => pressed && styles.iconPressed}
    >
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconPressed : {
    opacity:0.2
  }
});

export default MaterialIconsHeader;
