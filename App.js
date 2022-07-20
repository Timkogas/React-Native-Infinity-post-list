import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Posts from './src/containers/Posts';
import postsReducer from './src/store/postsReducer';


const store = configureStore({reducer: {
  posts: postsReducer
}})

export default function App() {
  return (
    <Provider store={store}> 
      <Posts/>
    </Provider>
  );
}

