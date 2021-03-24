import React from "react";
import Post from "./Post";

/**
 * Render all posts by using the .map function and the spread syntax.
 * @param posts if not defined, set to an empty array by default
 * @constructor
 */
export default function PostList({posts = []}) {
    return (
        <div>
            {posts.map((p, i) => (
                // if we are rendering a list of elements,
                // we have to give each element a unique key prop.
                // React uses this key prop to efficiently compute the
                // difference of two lists, when the data has changed.
                // Return the <Post> Component for each post.
                <React.Fragment key={'post-' + i}>
                    <Post {...p} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
}
