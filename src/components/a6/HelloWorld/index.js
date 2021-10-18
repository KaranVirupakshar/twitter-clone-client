import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
        <h3>Hello World!</h3>
    <Link to="/a6/practice">
        Practice
    </Link> |
    <Link to="/a6/twitter/explore">
        Build
    </Link>
        </>
)
};

export default HelloWorld;
