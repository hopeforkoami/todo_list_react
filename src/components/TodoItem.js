import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;
  return (<li key={todo.id}>
    <input type="checkbox" />
    {todo.title}
    </li>);
}
TodoItem.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  /* handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired, */
};
export default TodoItem;
