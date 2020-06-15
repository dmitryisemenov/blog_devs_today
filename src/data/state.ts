import { combineReducers } from './combineReducers';
import { postsReducer } from './posts/posts.reducer';

export const initialState: AppState = {
  posts: {
    posts: [],
    post: {},
    isCreated: false
  }
};

export const reducers = combineReducers({
  posts: postsReducer
});

export type AppState = ReturnType<typeof reducers>;