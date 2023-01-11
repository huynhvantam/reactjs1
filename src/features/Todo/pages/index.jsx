import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { useState } from 'react';


function TodoFeature(props) {
    const initTodoList = [
        {id:1,title: '1',status: 'new'},
        {id:2,title: '2',status: 'completed'},
        {id:3,title: '3',status: 'new'}
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterr, setFilterr] = useState('all')

    const handleTodoClick = (todo,idx) => {

        //clone
        const newTodoList = [...todoList]

        //toggle state
        const newTodo = {
            ...newTodoList[idx], 
            status: newTodoList[idx].status === 'new' ?'completed': 'new'
        }
        newTodoList[idx] =newTodo
        //update
        setTodoList(newTodoList)

        
    }
    const handleShowAll = () => {
        setFilterr('all')
    }
    const handleShowCompleted = () => {
        setFilterr('completed')
    }
    const handleShowNew = () => {
        setFilterr('new')
    }

    const renderFilter = todoList.filter(todo => filterr === 'all' || filterr === todo.status) 
    return (
        <div>
            
            <TodoList todoList={renderFilter}
                      onTodoClick = {handleTodoClick}
            />

            <div>
                <button onClick= {handleShowAll}>All</button>
                <button onClick= {handleShowCompleted}>Completed</button>
                <button onClick= {handleShowNew}>New</button>

            </div>
        </div>
    );
}

export default TodoFeature;