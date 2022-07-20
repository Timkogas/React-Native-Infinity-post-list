import { StyleSheet, Text, View } from "react-native";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../store/postsActions'
import { useEffect } from "react";

export default function Posts() {
  
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state.posts)

  useEffect(()=>{
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <PostsWrapper 
      posts={posts}
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
