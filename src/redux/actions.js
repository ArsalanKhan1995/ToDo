import { CREATE_TODO,TOGGLE_TODO,EDIT_TODO,DELETE_TODO,CREATE_BUCKET,DELETE_BUCKET } from 'redux/types'

export const createTodo = todo => {
  return {
    type: CREATE_TODO,
    todo
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const editTodo = todo => {
  return {
    type: EDIT_TODO,
    todo
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const createBucket = bucket => {
  return {
    type: CREATE_BUCKET,
    bucket
  }
}

export const deleteBucket = id => {
  return {
    type: DELETE_BUCKET,
    id
  }
}