import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
        <h3>Hello World!</h3>
    <Link to="/a7/practice">
        Practice
    </Link> |
    <Link to="/a7/twitter/explore">
        Build
    </Link>
        </>
)
};

export default HelloWorld;
