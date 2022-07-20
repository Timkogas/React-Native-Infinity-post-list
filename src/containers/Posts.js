import { StyleSheet, Text, View } from "react-native";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { fetchNextPosts, fetchPosts } from '../store/postsActions'
import { useEffect } from "react";
import { baseURL } from "../constans";

export default function Posts() {
  
  const dispatch = useDispatch()
  const {posts, nextPostsPage} = useSelector(state => state.posts)

  useEffect(()=>{
    dispatch(fetchPosts())
  }, [dispatch])

  const uploadingNewPosts = () => {
    dispatch(fetchNextPosts(nextPostsPage))
  }

  return (
    <View style={styles.container}>
      <PostsWrapper 
      posts={posts}
      uploadingNewPosts={uploadingNewPosts}
      />
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
