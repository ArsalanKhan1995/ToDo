import React from 'react'
import PropTypes from 'prop-types'
import ListItem from 'components/ListItem'

const TodoList = ({ todos }) => {
  return <div className="mb-3" id="done" role="tabpanel" aria-labelledby="done-tab">
    <h2><b>ToDo List</b></h2>
    {todos.length?todos.map(todo => (
      <ListItem key={todo.id} todo={todo} />
    )):<h6>No ToDos found in this list!</h6>}
  </div>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bucket: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default TodoList