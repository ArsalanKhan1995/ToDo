import { combineReducers } from 'redux'
import { todosReducer } from 'redux/todoReducer'
import { bucketsReducer } from 'redux/bucketsReducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
  buckets: bucketsReducer
})