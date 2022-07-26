import React, { useState, useEffect, useMemo } from 'react';
// import TodoList from '../components/todoList';
import TodoList from '../../components/todoList';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
function ListPage(props) {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'code',
      status: 'completed',
    },
    {
      id: 3,
      title: 'sleep',
      status: 'new',
    },
  ]);
  const location = useLocation();
  const navigate = useNavigate();
  const [filterStattus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);
  const handleChangeStatus = (index) => {
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList[index] = { ...newTodoList[index], status: newTodoList[index].status === 'new' ? 'completed' : 'new' };

    setTodoList(newTodoList);
  };
  const newFilterTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStattus === 'all' || todo.status === filterStattus);
  }, [todoList, filterStattus]);

  const handleShowAll = () => {
    const queryParams = {
      status: 'all',
    };
    navigate({ pathName: '.', search: queryString.stringify(queryParams) });
  };

  const handleShowNew = () => {
    const queryParams = { status: 'new' };
    navigate({ pathName: '.', search: queryString.stringify(queryParams) });
  };

  const handleShowCompleted = () => {
    const queryParams = { status: 'completed' };
    navigate({ pathName: '.', search: queryString.stringify(queryParams) });
  };

  const handleTodoFormSubmit = (value) => {
    const newTodoList = [...todoList, { id: todoList[todoList.length - 1].id + 1, title: value.title, status: 'new' }];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>what to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h2>TodoList</h2>

      <TodoList todoList={newFilterTodoList} onStatusClick={handleChangeStatus} />
      <button onClick={handleShowAll}>Show all</button>
      <button onClick={handleShowNew}>Show new</button>
      <button onClick={handleShowCompleted}>Show completed</button>
    </div>
  );
}

export default ListPage;
