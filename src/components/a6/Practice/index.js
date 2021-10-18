import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <div>
            <h3>Practice</h3>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/twitter/explore">
                Build
            </Link>

            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>

)
};

export default Practice;