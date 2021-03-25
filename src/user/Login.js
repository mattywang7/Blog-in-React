import React, {useState} from 'react';

/**
 * Two fields: username, password and a login button.
 * Define a form container element to wrap them in.
 *
 * To avoid a page refresh when the form is submitted, we have to define an onSubmit handler and call:
 * e.preventDefault() on the even object.
 *
 * Using semantic HTML elements such as <form> and <label> make your app
 * easier to navigate for people using accessibility assistance software, such as screen readers.
 * Further more, when using semantic HTML, keyboard shortcuts, such as submitting forms
 * by pressing the return key, automatically work.
 * @constructor
 */
export default function Login({setUser}) {
    // define a new state Hook for the value of the Username field
    const [username, setUsername] = useState('');

    // Handler function for Username field
    function handleUsername(evt) {
        setUsername(evt.target.value);
    }

    return (
        <form onSubmit={e => {e.preventDefault(); setUser(username)}}>
            <label htmlFor={"login-username"}>Username:</label>
            <input type={"text"}
                   value={username}
                   onChange={handleUsername}
                   name={"login-username"} id={"login-username"} />
            <label htmlFor={"login-password"}>Password:</label>
            <input type={"password"} name={"login-password"} id={"login-password"} />
            <input type={"submit"}
                   value={"Login"}
                   disabled={username.length === 0} />
        </form>
    );
}
