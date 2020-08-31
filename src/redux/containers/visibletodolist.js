import { connect } from 'react-redux'
import TodoList from 'components/TodoList'
import { VisibilityFilters } from 'redux/types'

const getVisibletodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

function mapStateToProps(state, ownProps) {
  try {
    return {
      todos: getVisibletodos(state.todos, ownProps.filter)
    }
  } catch (e){
    return {
      error: e
    }
  }
}

export default connect(mapStateToProps)(TodoList)