import React, { useEffect } from 'react';
import { connect } from '../data/connect';
import { getSinglePost } from '../data/posts/posts.actions';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

interface TParams {id: string};
interface StateProps {
    post: any;
};
interface DispatchProps {
    getSinglePost: typeof getSinglePost;
};
interface SinglePostPageProps extends StateProps, DispatchProps, RouteComponentProps<TParams> {

}

const Post = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    margin: 10px 20px;
    padding: 4px;
`;

const PostTitle = styled.span`
    width: 100%;
    text-align: center;
    font-weight: 600;
`;

const SinglePostPage = ({ getSinglePost, match, post }: SinglePostPageProps) => {
    useEffect(() => {
        getSinglePost(match.params.id);
    }, [post])

    return (
        <>
            {post && Object.keys(post).length > 0 && (
                <Post>
                    <PostTitle>{post.title}</PostTitle>
                    <span>{post.body}</span>
                </Post>
            )}
        </>
    )
}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
        post: state.posts.post
	}),
	mapDispatchToProps: {
        getSinglePost
	},
	component: SinglePostPage
});
