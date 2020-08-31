import React,{useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { useSelector,useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo} from 'redux/actions'
import TodoEditForm from 'components/TodoEditForm'

const ListItem = ({ todo }) => {
  const dispatch = useDispatch()
  const [showEditForm, setShowEditForm] = useState(false)
  const [{title:bucketTitle}] = useSelector(state => state.buckets.filter((bucket) => bucket.value === todo.bucket))
  return (
    <div className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <input 
          className="form-check-input mr-3 flex-shrink-0" 
          type="checkbox" 
          defaultChecked={ todo.completed } 
          onChange={ () => dispatch(toggleTodo(todo.id)) } />
        <div className="flex-fill">
          <h5 className="mb-1">{ todo.title }</h5>
          <p className="mb-1">{ todo.description }</p>
          {bucketTitle!=="No Bucket"?<span className="my-2 p-2 listitem-bucket">{ bucketTitle }</span>:null}
          <small className="list-item-add-time text-muted">
            <span className="iconify" data-icon="ic:round-access-time" data-inline="false"></span>
            {todo.added===todo.edited?<span className="time mx-1">Added at { moment(parseInt(todo.added)).format('hh:mm a, MMMM Do') }</span>:<><span className="time mx-1">Added at { moment(parseInt(todo.id)).format('hh:mm a, MMMM Do') }</span> , <span className="time mx-1">Edited at { moment(parseInt(todo.edited)).format('hh:mm a, MMMM Do') }</span></>}
          </small>
        </div>
        <div className="dropdown ml-3">
          <button className="btn btn-sm" type="button" id="todoDropdown" data-toggle="dropdown" aria-expanded="false">
            <span className="iconify" data-icon="ic:round-more-horiz" data-inline="false"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="todoDropdown">
            <li 
              className="dropdown-item d-flex align-items-center"
              onClick={ ()=> setShowEditForm(!showEditForm) }>
              <span className="iconify mr-2" data-icon="ic:round-edit" data-inline="false"></span>
              {showEditForm?'Cancel Edit':'Edit'}
            </li>
            <li 
              className="dropdown-item d-flex align-items-center"
              onClick={ () => dispatch(deleteTodo(todo.id)) } >
              <span className="iconify mr-2" data-icon="ic:round-delete" data-inline="false"></span>
              Delete
            </li>
          </ul>
        </div>
      </div>
      <TodoEditForm todo={todo} showEditForm={showEditForm} setShowEditForm={setShowEditForm}/>
    </div>
  )
}

ListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bucket: PropTypes.string.isRequired,
    added: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired
  }).isRequired,
}
export default ListItem