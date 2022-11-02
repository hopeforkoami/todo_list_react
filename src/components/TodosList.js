import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (<TodoItem key={todo.id} todo={todo} />))}
    </ul>
  );
}
TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  /* handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired, */
};
export default TodosList;
