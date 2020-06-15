import React, { useState, useEffect } from 'react';
import { connect } from '../data/connect';
import { postNewPost } from '../data/posts/posts.actions';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

interface StateProps {};
interface DispatchProps {
    postNewPost: typeof postNewPost;
};
interface CreatePostPageProps extends StateProps, DispatchProps {
    
}

const Input = styled.input`
        border-radius: 20px;
        padding: 4px 10px;
        border: 1px solid #000;
    `;

    const Textarea = styled.textarea`
        border: 1px solid #000;
        border-radius: 20px;
        height: 200px;
        padding: 4px 10px;
    `;

    const InputWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 210px;
    `;

    const Button = styled.button`
        border: 1px solid #000;
        background-color: white;
        width: 120px;
        border-radius: 20px;
        margin-top: 10px;
    `;

    const Wrapper = styled.div`
        margin-top: 10px;
        margin-left: 20px;
    `;

const CreatePostPage = ({ postNewPost }: CreatePostPageProps) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isRedirect, setRedirect] = useState(false);

    const createNewPost = () => {
        postNewPost(title, body);
        setRedirect(true);
    }

    if (isRedirect) return <Redirect to="/" />

    return (
        <Wrapper>
            <InputWrapper>
                <label htmlFor="title">Title:</label>
                <Input onChange={(e: any) => setTitle(e.target.value)} id="title" type="text"/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="body">Content:</label>
                <Textarea onChange={(e: any) => setBody(e.target.value)} id="body" />
            </InputWrapper>
            <Button onClick={() => createNewPost()}>Create New Post</Button>
        </Wrapper>
    )
}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
	}),
	mapDispatchToProps: {
        postNewPost
	},
	component: CreatePostPage
});
