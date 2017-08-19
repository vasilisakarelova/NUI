import React from 'react'
import page from 'page'

export default (props) => {
  function handleClick(e) {
    e.preventDefault()
    page(props.to)
  }

  return (
    <a href={ props.to } className={ props.className } onClick={ handleClick }>{ props.children }</a>
  )
}
