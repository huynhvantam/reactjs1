import classnames from 'classnames';
import PropTypes from 'prop-types';
import './styles.css'


TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList:[],
    onTodoCLick: null

}


function TodoList({todoList, onTodoClick}) {
    const handleTodoListChange = (todo, idx) => {
        if(!onTodoClick) return;

        onTodoClick(todo, idx);

    }

    return (
        <div>
            <ul  className='todo-list'>
                {todoList.map((todoList,idx) =>(
                    <li key={todoList.id}
                    className={classnames({
                    'todoList-item' : true,    
                    compoleted: todoList.status === 'completed'})}
                    onClick= {() => handleTodoListChange(todoList, idx)}
                    >
                        {todoList.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;