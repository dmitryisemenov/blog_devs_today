import React, { useEffect } from 'react';
import { connect } from '../data/connect';
import { getAllPosts } from '../data/posts/posts.actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StateProps {
    posts: any;
};
interface DispatchProps {
    getAllPosts: typeof getAllPosts
};
interface ListPostsPageProps extends StateProps, DispatchProps {
    
}

const Wrapper = styled.div`
    margin-top: 10px;
    margin-left: 20px;
    width: 150px;
`;

const Title = styled.div`
    height: 40px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    margin-bottom: 10px;
    padding: 4px;
`;

const PostTitle = styled.span`
    font-weight: 600;
    width: 100%;
    text-align: center;
`;

const ListPostsPage = ({ getAllPosts, posts }: ListPostsPageProps) => {

    useEffect(() => {
        getAllPosts()
    }, [posts])

    return (
        <div>
            <Title>
                <span>Latest Posts:</span>
                <Link 
                    style={{ textDecoration: 'none', color: '#000', fontWeight: 900, padding: '4px 10px', borderRadius: '20px', marginLeft: '95px', backgroundColor: "#fff" }}
                    to="/posts/new"
                >Create a Post</Link>
            </Title>
            <Wrapper>
                {Array.isArray(posts) 
                && posts.length > 0 
                && posts.map((item: any, index: number) => {
                    if (item.body !== undefined && item.title !== undefined) return (
                        <Link 
                            style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
                            key={index}
                            to={{
                                pathname: `/posts/${item.id}`,
                                state: { id: item.id }
                            } 
                        }>
                            <Post>
                                <PostTitle>{item.title}</PostTitle>
                                <span>{item.body}</span>
                            </Post>
                        </Link>
                    ) 
                })}
            </Wrapper>
        </div>
    )
}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
        posts: state.posts.posts
	}),
	mapDispatchToProps: {
        getAllPosts
	},
	component: ListPostsPage
});
