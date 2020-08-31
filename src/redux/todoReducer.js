import { CREATE_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from 'redux/types'

const initialState = []

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [ ...state, action.todo ]
    
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo  
      )
    
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.todo.id ? { ...action.todo } : todo  
      )
    
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id)

    default: 
      return state
  }
}