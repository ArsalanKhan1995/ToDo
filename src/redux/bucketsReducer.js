import { CREATE_BUCKET, DELETE_BUCKET } from 'redux/types'

const initialState = [{
  id:"1",
  title: "No Bucket",
  value: "no-bucket",
  active: true
}]

export const bucketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BUCKET:
      return [ ...state, action.bucket ]
    
    case DELETE_BUCKET:
      return state.filter((bucket) => bucket.id !== action.id)

    default: 
      return state
  }
}