import React from "react";

/**
 * Display the currently logged in user, and a button to log out.
 * Take a user prop, which used to display the currently logged-in user
 *
 * Here use destructuring in order to extract the user key from the props object.
 * React passes all component props, in a single object, as the first argument to a function.
 * Using destructuring on the first argument is similar to doing const {user} = this.props in a class component.
 */
export default function Logout({user, setUser}) {
    return (
        <form onSubmit={e => {e.preventDefault(); setUser('')}}>
            Logged in as: <b>{user}</b>
            <input type={"submit"} value={"Logout"} />
        </form>
    );
}
