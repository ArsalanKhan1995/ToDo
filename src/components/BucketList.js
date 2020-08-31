import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteBucket } from 'redux/actions'

function BucketList() {
  const addedBuckets = useSelector(state => state.buckets.filter((bucket) => bucket.active))
  const dispatch = useDispatch()
  return(
    <div>
      {
        addedBuckets&&addedBuckets.length?
        <>
        {addedBuckets.map(bucket => {
          return (
            <div className="list-group-item" key={bucket.id}>
              <div className="d-flex w-100 justify-content-between">
                <div className="flex-fill">
                  <h5 className="mb-1">{ bucket.title }</h5>
                </div>
                {
                  bucket.value === "no-bucket" ? null :
                  <div className="dropdown ml-3">
                    <button className="btn btn-sm" type="button" id="bucketDropdown" data-toggle="dropdown" aria-expanded="false">
                      <span className="iconify" data-icon="ic:round-more-horiz" data-inline="false"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="bucketDropdown">
                      <li 
                        className="dropdown-item d-flex align-items-center"
                        onClick={ () => dispatch(deleteBucket(bucket.id)) } >
                        <span className="iconify mr-2" data-icon="ic:round-delete" data-inline="false"></span>
                        Delete
                      </li>
                    </ul>
                  </div>

                }
              </div>
            </div>
          )
        })}
        </>
        :
        <h3>Please add buckets!</h3>
      }
    </div>
  )
}
export default BucketList