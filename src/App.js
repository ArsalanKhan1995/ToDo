import React from 'react'
import 'assets/sass/App.sass'

import Header from 'components/Header'
import Form from 'components/Form'
import BucketForm from 'components/BucketForm'
import VisibleTodoList  from 'redux/containers/visibletodolist'
import Filters from 'components/Filters'
import BucketList from 'components/BucketList'

const App = ({ match: { params } }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <Filters/>
          <div className="row my-3 todo-area">
            <div className="col-12 col-md-6 order-md-1">
              <VisibleTodoList filter={params.filter?params.filter:'SHOW_ALL'}/>
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <h2>Add ToDo</h2>
              <Form />
            </div>
          </div>
          <div className="row my-3 bucket-area">
            <div className="col-12 col-md-6 order-md-3">
              <h2>Bucket List</h2>
              <BucketList/>
            </div>
            <div className="col-12 col-md-6 order-md-4">
              <h2>Add Bucket</h2>
              <BucketForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
