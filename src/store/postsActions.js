import axios from '../axiosPosts'
import { FETCH_POSTS_ERROR, 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS } from "./actionsTypes"

const fetchPostsRequest = () => {
  return {type: FETCH_POSTS_REQUEST}
} 
const fetchPostsSuccess = (posts) => {
  return {type: FETCH_POSTS_SUCCESS, posts}
}
const fetchPostsError = (error) => {
  return {type: FETCH_POSTS_ERROR, error}
}

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      const response = await axios.get()
      dispatch(fetchPostsSuccess(response.data))
    } catch(e) {
      dispatch(fetchPostsError(e))
    }
  }
}