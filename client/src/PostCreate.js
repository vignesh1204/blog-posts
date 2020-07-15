import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4000/posts`, {
            title,
            text
        });
        setTitle(' ');
        setText(' ');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group" style={{ width: '85%' }}>
                    <label> Title </label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control"
                    />
                    <br />
                    <label> Content </label>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary"> Post </button>
            </form>
        </div>
    );
};