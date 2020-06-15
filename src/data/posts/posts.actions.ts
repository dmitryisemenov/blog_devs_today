import { ActionType } from "../../util/types";
import axios from 'axios';

export const initial = () => {
    return true;
}

export const getAllPosts = () => (dispatch: React.Dispatch<any>) => {
    axios.get('https://simple-blog-api.crew.red/posts')
    .then(data => data.status === 200 && dispatch({
        type: 'get-all-posts',
        posts: data.data
    }))
    .catch(err => console.error(err))
}

export const getSinglePost = (id: string) => (dispatch: React.Dispatch<any>) => {
    axios.get(`https://simple-blog-api.crew.red/posts/${Number(id)}?_embed=comments`)
    .then(data => data.status === 200 && dispatch({
        type: 'get-single-post',
        post: data.data
    }))
    .catch(err => console.error(err))
}

export const postNewPost = (title: string, body: string) => (dispatch: React.Dispatch<any>) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    axios({
        method: 'POST',
        url: 'https://simple-blog-api.crew.red/posts',
        headers,
        data: {
            title: title,
            body: body
        }
    })
    .catch(err => console.error(err))
}

export type PostsActions = 
    | ActionType <typeof initial>
    | ActionType <typeof getAllPosts>
    | ActionType <typeof getSinglePost>
    | ActionType <typeof postNewPost>