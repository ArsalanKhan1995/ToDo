import * as actions from 'redux/actions'
import * as types from 'redux/types'
import {todosReducer} from 'redux/todoReducer'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const todo = {
      id: Date.now().toString(),
      added:Date.now().toString(),
      edited:Date.now().toString(),
      title:'My Task',
      description:'Description',
      completed: false,
      bucket:'no-bucket'
    }
    const expectedAction = {
      type: types.CREATE_TODO,
      todo
    }
    expect(actions.createTodo(todo)).toEqual(expectedAction)
  })
})

describe('todos reducer', () => {

  it('should handle CREATE_TODO', () => {
    expect(
      todosReducer([], {
        type: types.CREATE_TODO,
        todo:{
          title:'My Task',
          description:'Description',
          completed: false,
          bucket:'no-bucket'
        }
      })
    ).toEqual([
      {
        title:'My Task',
        description:'Description',
        completed: false,
        bucket:'no-bucket'
      }
    ])

    expect(
      todosReducer(
        [
          {
            title:'My Task 2',
            description:'Description 2',
            completed: false,
            bucket:'no-bucket'
          }
        ],
        {
          type: types.CREATE_TODO,
          todo:{
            title:'Run the tests',
            description:'Run the tests Description',
            completed: false,
            bucket:'no-bucket'
          }
        }
      )
    ).toEqual([
      {
        title:'My Task 2',
        description:'Description 2',
        completed: false,
        bucket:'no-bucket'
      },
      {
        title:'Run the tests',
        description:'Run the tests Description',
        completed: false,
        bucket:'no-bucket'
      }
    ])
  })
})
