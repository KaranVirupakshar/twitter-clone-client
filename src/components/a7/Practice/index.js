import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
    return(
        <div>
            <h3>Practice</h3>
            <Link to="/a7/hello">
                Hello
            </Link> |
            <Link to="/a7/twitter/explore">
                Build
            </Link>

            <ReduxExamples/>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>

)
};

export default Practice;