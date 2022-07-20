import { FETCH_NEXT_POSTS_SUCCESS, 
  FETCH_POSTS_ERROR, 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS } from "./actionsTypes"

const initialState = {
  posts: [],
  nextPostsPage: '',
  error: null,
  loading: false,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: 
      return {...state, loading: true}
    case FETCH_POSTS_SUCCESS: 
      return {...state, loading: false, posts: action.posts, nextPostsPage: action.nextPostsPage}
    case FETCH_POSTS_ERROR: 
      return {...state, loading: false, error: action.error}
    case FETCH_NEXT_POSTS_SUCCESS: 
      return {...state, loading: false, posts: state.posts.concat(action.posts), nextPostsPage: action.nextPostsPage}
    default:
      return state
  }
}


export default postsReducer