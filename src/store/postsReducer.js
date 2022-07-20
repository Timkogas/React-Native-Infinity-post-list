import { FETCH_NEXT_POSTS_SUCCESS, 
  FETCH_POSTS_ERROR, 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS } from "./actionsTypes"

const initialState = {
  posts: [],
  nextPostsPage: '',
  error: null,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: 
      return {...state}
    case FETCH_POSTS_SUCCESS: 
      return {...state, posts: action.posts, nextPostsPage: action.nextPostsPage}
    case FETCH_POSTS_ERROR: 
      return {...state, error: action.error}
    case FETCH_NEXT_POSTS_SUCCESS: 
      return {...state, posts: state.posts.concat(action.posts), nextPostsPage: action.nextPostsPage}
    default:
      return state
  }
}


export default postsReducer