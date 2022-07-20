import { configureStore } from '@reduxjs/toolkit';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import postsReducer from './src/store/postsReducer';


const store = configureStore({reducer: {
  posts: postsReducer
}})

export default function App() {
  return (
    <Provider store={store}>
      <Text>
        hello
      </Text>
    </Provider>
  );
}

