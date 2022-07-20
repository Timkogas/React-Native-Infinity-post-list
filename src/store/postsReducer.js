import { FETCH_POSTS_ERROR, 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS } from "./actionsTypes"

const initialState = {
  posts: [],
  error: null,
  loading: false,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: 
      return {...state, loading: true}
    case FETCH_POSTS_SUCCESS: 
      return {...state, loading: false, posts: action.posts}
    case FETCH_POSTS_ERROR: 
      return {...state, loading: false, error: action.error}
    default:
      return state
  }
}


export default postsReducer