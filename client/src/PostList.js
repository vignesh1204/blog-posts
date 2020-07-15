import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        const res = await axios.get(`http://localhost:4000/posts`);

        setPosts(res.data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={{ width: '45%', marginBottom: '25px', marginRight: '10px' }}
                key={post.id}
            >
                <div className="card-body">
                    <h3> {post.title} </h3>
                    <p> {post.text} </p>
                    <hr />
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap">
            {renderedPosts}
        </div>
    );
};