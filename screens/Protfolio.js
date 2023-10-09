import { StyleSheet, Text, View } from 'react-native'


const Protfolio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Protfolio</Text>
    </View>
  )
}

export default Protfolio

const styles = StyleSheet.create({
  container: {
    backgroundColor:"lightblue",
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    
  }
})