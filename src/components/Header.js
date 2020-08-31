import React from 'react'
import moment from 'moment'
import logo from 'assets/images/logo.svg'

const Header = () => {
  const dateTime = moment().format('dddd, Do MMMM')

  return (
    <header>
      <div className="container no-gutters d-flex justify-content-start align-items-center py-3">
        <img src={ logo } className="logo mr-3" alt="logo" />
        <div className="header-content">
          <span className="header-date text-muted">{ dateTime }</span>
          <h3 className="header-title">Your todos</h3>
        </div>
      </div>
    </header>
  )
}

export default Header