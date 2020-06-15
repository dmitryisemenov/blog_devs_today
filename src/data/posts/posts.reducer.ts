import { PostsActions } from "./posts.actions";
import { PostsState } from "./posts.state";

export const postsReducer = (action: PostsActions, state: PostsState): PostsState => {
    switch(action.type) {
        case 'get-all-posts': {
            return {
                ...state,
                posts: action.posts
            }
        }

        case 'get-single-post': {
            return {
                ...state,
                post: action.post
            }
        }

        case 'post-created': {
            return {
                ...state,
                isCreated: true
            }
        }

        case 'clear-created': {
            return {
                ...state,
                isCreated: false
            }
        }

        default: {
            return state;
        }
    }
}