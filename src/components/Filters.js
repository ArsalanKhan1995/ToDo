import React from 'react'
import FilterLink from 'redux/containers/fliterlink'
import { VisibilityFilters } from 'redux/types'

const Filters = () => (
  <div className="my-3">
    <span>Filter for ToDo list : </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>&nbsp;
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>&nbsp;
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Filters