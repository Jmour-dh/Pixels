import { Button, FlatList, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import PressableItems from "../components/PressableItems";
import { DATA } from "../data/usersData";

const Home = ({ navigation }) => {
  const renderProfiles = ({ item }) => {
    return (
      <PressableItems
        item={item}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
