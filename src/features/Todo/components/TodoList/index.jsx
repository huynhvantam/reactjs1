import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    TodoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList:[]
}

function TodoList({todoList}) {
    return (
        <div>
            <ul>
                {todoList.map(todoList =>(
                    <li key={todoList.id}>{todoList.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;