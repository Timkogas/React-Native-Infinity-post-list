import { FlatList, View, StyleSheet} from "react-native";
import Post from "./Post/Post";

export default function PostsWrapper({posts}) {
  return (
    <View style={styles.postsWrapper}>
      {posts.map((post)=>{
        return (
          <Post
            key={post.data.id}
            img={post.data.thumbnail}
            text={post.data.title}
          />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  postsWrapper: {
  },
})

