import React, { useState } from "react";

/**
 * Two new Hooks, one for the title value, one for the content value.
 * @param {*} param0 
 * @returns 
 */
export default function CreatePost({user, posts, setPosts}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Handler functions -- one for the input field, one for the textarea.
    function handleTitle(evt) {
        setTitle(evt.target.value);
    }

    function handleContent(evt) {
        setContent(evt.target.value);
    }

    // Also define a handler function for the Create button.
    function handleCreate() {
        const newPost = {title, content, author: user};
        setPosts([newPost, ...posts]);
    }

    return (
        <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor={"create-title"}>Title:</label>
                <input type={"text"} value={title} onChange={handleTitle}
                        name={"create-title"} id={"create-title"} />
            </div>

            <textarea value={content} onChange={handleContent} />
            <input type="submit" value="Create" />
        </form>
    );
}
