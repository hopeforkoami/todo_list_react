import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  const { todos, handleChangeProps, deleteTodoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handler={handleChangeProps}
          deleteHandler={deleteTodoProps}
        />
      ))}
    </ul>
  );
}
TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  /* handleUpdate: PropTypes.func.isRequired, */
};
export default TodosList;
