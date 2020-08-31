import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { createBucket } from 'redux/actions'

const Form = () => {
  const [title, setTitle] = useState('')
  const addedBuckets = useSelector(state => state.buckets.filter((bucket) => bucket.active))
  
  const dispatch = useDispatch()
  const toKebabCase = str => str && str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map(x=>x.toLowerCase())
  .join('-')
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return
    if (addedBuckets.filter(e => e.value === toKebabCase(title)).length > 0) {
      alert('This bucket already exists!')
    }
    else{
      dispatch(createBucket({
        id: Date.now().toString(),
        title,
        value:toKebabCase(title),
        active: true
      }))
    }
    setTitle('')
  }

  return (
    <form className="form">
      <div className="mb-3">
        <input required type="text" className="form-control"  name="title-input" placeholder="Your todo title" value={ title } list="buckets" onChange={ e => setTitle(e.target.value) }/>
        { !addedBuckets.length ? null : 
          <datalist id="buckets">
            {addedBuckets.map(addedBucket => <option key={addedBucket.id} value={addedBucket.value}>{addedBucket.title}</option>)}
          </datalist>
        }
      </div>
      <div className="mb-3">
        <button className="btn btn-submit btn-secondary btn-block" onClick={ handleSubmit }>
          <span className="btn-icon iconify" data-icon="ic-round-add-circle-outline" data-inline="false"></span>
          <span className="btn-title">Add bucket</span>
        </button>
      </div>
    </form>
  )
}

export default Form