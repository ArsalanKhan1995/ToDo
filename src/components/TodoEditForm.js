import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector,useDispatch } from 'react-redux'
import { editTodo } from 'redux/actions'

function TodoEditForm({todo,showEditForm,setShowEditForm}) {
  const [title, setTitle] = useState(todo.title?todo.title:"")
  const [description, setDescription] = useState(todo.description?todo.description:"")
  const [bucket, setBucket] = useState(todo.bucket?todo.bucket:'no-bucket')
  const addedBuckets = useSelector(state => state.buckets.filter((bucket) => bucket.active))
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return
    dispatch(editTodo({
      id: todo.id,
      added:todo.added,
      edited:Date.now().toString(),
      title,
      description,
      completed:todo.completed,
      bucket
    }))
    setShowEditForm(!showEditForm)
  }
  return(
    <form className="form my-4" style={{display:`${showEditForm?'block':'none'}`}} onSubmit={ handleSubmit }>
      <div className="mb-3">
        <input required type="text" className="form-control" name="title-input" placeholder="Your todo title" value={ title } onChange={ e => setTitle(e.target.value) } />
      </div>
      <div className="mb-3">
        <textarea className="form-control" name="description-input" placeholder="What do you need to do? (optional)" value={ description } onChange={ e => setDescription(e.target.value) } ></textarea>
      </div>
      <div className="mb-3">
        <select className="form-control" name="todo-bucket" value ={ bucket } onChange={e=>setBucket(e.target.value)}>
          { !addedBuckets.length ? <option value="no-bucket">No Bucket</option> : addedBuckets.map(addedBucket => <option key={addedBucket.id} value={addedBucket.value}>{addedBucket.title}</option>) }
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-submit btn-success btn-block">
          <span className="iconify mr-2" data-icon="ic:round-edit" data-inline="false"></span>
          <span className="btn-title">Edit todo</span>
        </button>
      </div>
    </form>
  )
}

TodoEditForm.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bucket: PropTypes.string.isRequired,
    added: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired
  }).isRequired,
  showEditForm: PropTypes.bool.isRequired,
  setShowEditForm: PropTypes.func.isRequired
}
export default TodoEditForm