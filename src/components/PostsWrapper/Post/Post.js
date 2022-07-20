import { Image, Text, View, StyleSheet } from "react-native";

const placeImage = {
  uri: 'https://s.inyourpocket.com/gallery/22671.jpg'
}

export default function Post() {
  return (
    <View style={styles.post}>
      <Image source={placeImage} style={styles.img}/>
      <Text style={styles.text}>asdasd dasdasda dasd asd assdas dasd asd asd asdas dasdas dasd asd asdas das </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    padding: 20,
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 5,
  },
  img: {
    height: 100,
    width: 100,
    flex: 1,
  },
  text : {
    marginLeft: 10,
    flex: 2,
  },
})
