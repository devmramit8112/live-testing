import React from 'react'

const Header = (props) => {
  return (
    <div>
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}

export default Header
