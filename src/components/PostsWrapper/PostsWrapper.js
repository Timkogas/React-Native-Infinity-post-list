import { FlatList, View, StyleSheet} from "react-native";
import Post from "./Post/Post";

export default function PostsWrapper({posts}) {
  return (
    <View style={styles.postsWrapper}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </View>
  );
}

const styles = StyleSheet.create({
  postsWrapper: {
  },
})

