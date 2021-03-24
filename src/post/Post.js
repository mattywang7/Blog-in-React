import React from "react";

/**
 * Accepting three props.
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
