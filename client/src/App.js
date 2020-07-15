import React from 'react'
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
    return <div className="container">
        <br />
        <h1> Create a New Post! </h1>
        <PostCreate />
        <hr />
        <h1> Posts </h1>
        <PostList />
    </div>;
};