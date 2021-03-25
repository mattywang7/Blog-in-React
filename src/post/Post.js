import React from "react";

/**
 * Accepting three props.
 * Posts are also going to be global state, so we should define it in the App component.
 * @param title
 * @param content
 * @param author
 * @constructor
 */
export default function Post({title, content, author}) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <br/>
            <i>Written by <b>{author}</b></i>
        </div>
    );
}
