import axios from 'axios'
import { FETCH_NEXT_POSTS_SUCCESS, 
  FETCH_POSTS_ERROR, 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS } from "./actionsTypes"

const baseURL = "https://www.reddit.com/r/pics.json"

const fetchPostsRequest = () => {
  return {type: FETCH_POSTS_REQUEST}
} 
const fetchPostsSuccess = (posts, nextPostsPage) => {
  return {type: FETCH_POSTS_SUCCESS, posts, nextPostsPage}
}
const fetchPostsError = (error) => {
  return {type: FETCH_POSTS_ERROR, error}
}

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      const response = await axios.get(baseURL)
      dispatch(fetchPostsSuccess(response.data.data.children, response.data.data.after))
    } catch(e) {
      dispatch(fetchPostsError(e))
    }
  }
}

const fetchNextPostsSuccess = (posts, nextPostsPage) => {
  return {type: FETCH_NEXT_POSTS_SUCCESS, posts, nextPostsPage}
}

export const fetchNextPosts = (url) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      console.log(`baseURL?count=25&after=${url}`)
      const response = await axios.get(`${baseURL}?count=25&after=${url}`)
      dispatch(fetchNextPostsSuccess(response.data.data.children, response.data.data.after))
    } catch(e) {
      dispatch(fetchPostsError(e))
    }
  }
}