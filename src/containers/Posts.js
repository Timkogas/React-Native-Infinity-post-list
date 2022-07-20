import { StyleSheet, Text, View } from "react-native";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";

export default function Posts() {
  return (
    <View style={styles.container}>
      <PostsWrapper/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
})
