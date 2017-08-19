import React from 'react'
import page from 'page'

export default (props) => {
  function handleClick(e) {
    e.preventDefault()
    page(props.to)
  }

  let classes = props.className

  if (props.currentPage === props.to) {
    classes += ' is-active'
  }

  return (
    <a href={ props.to } className={ classes } onClick={ handleClick }>{ props.children }</a>
  )
}
