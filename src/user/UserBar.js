import React, {Fragment, useState} from "react";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register";

/**
 * The UserBar provides a setUser function, which can be used in Login, Logout and Register component.
 * @returns {JSX.Element}
 * @constructor
 */
export default function UserBar({user, setUser}) {
    if (user) {
        return <Logout user={user} setUser={setUser} />;
    } else {
        return (
            <Fragment>
                <Login setUser={setUser} />
                <Register setUser={setUser} />
            </Fragment>
        );
    }
}
