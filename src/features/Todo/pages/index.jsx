// import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import React, { useState } from 'react';


TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {id:1,title: '1',status: 'new'},
        {id:2,title: '2',status: 'completed'},
        {id:3,title: '3',status: 'new'}
    ]

const [todoList, setTodoList] = useState(initTodoList)

const handleTodoListChange =(todo, idx) => {
    console.log(todo,idx);

    //clone 
    const newTodoList = [...todoList]

    //toggle state
   newTodoList[idx] = {
        ...newTodoList[idx],
        status: newTodoList[idx].status === 'new' ? 'completed':'new'
    }

    //update
    setTodoList(newTodoList)

}

    return (
        <div>
            <h3>
            TodoFeature
            </h3>
            <TodoList todoList={todoList}
            onTodoClick = {handleTodoListChange}
            />
        </div>
    );
}

export default TodoFeature;