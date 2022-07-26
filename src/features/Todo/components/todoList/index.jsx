import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';
TodoList.propTypes = {
  todoList: PropTypes.array,
  onStatusClick: PropTypes.func,
};

TodoList.default = {
  todoList: [],
  onStatusClick: null,
};

function TodoList({ todoList, onStatusClick }) {
  const changeStatuClick = (idx) => {
    if (onStatusClick) onStatusClick(idx);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({ completed: todo.status === 'completed' })}
          onClick={() => changeStatuClick(index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
