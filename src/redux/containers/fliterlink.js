import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    className="todolist-filter"
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: "none",
      borderRadius: "4px",
      padding: "5px",
      backgroundColor: "#20c997",
      color: "white",
      margin: "0px 5px"
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink