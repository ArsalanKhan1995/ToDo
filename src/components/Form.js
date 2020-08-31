import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { createTodo } from 'redux/actions'

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [bucket, setBucket] = useState('no-bucket')
  const addedBuckets = useSelector(state => state.buckets.filter((bucket) => bucket.active))
  
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return
    dispatch(createTodo({
      id: Date.now().toString(),
      added:Date.now().toString(),
      edited:Date.now().toString(),
      title,
      description,
      completed: false,
      bucket
    }))
    setTitle('')
    setDescription('')
    setBucket('no-bucket')
  }

  return (
    <form className="form">
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
        <button className="btn btn-submit btn-success btn-block" onClick={ handleSubmit }>
          <span className="btn-icon iconify" data-icon="carbon:add-alt" data-inline="false"></span>
          <span className="btn-title">Add todo</span>
        </button>
      </div>
    </form>
  )
}

export default Form