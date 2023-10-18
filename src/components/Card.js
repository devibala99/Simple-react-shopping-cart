import React from 'react'

const Card = ({image, name, categoty, costPrice, sellingPrice}) => {
  return (
    <div id='card'>
      <img src={image} alt="book" />
      <h1>{name}</h1>
      <h2>{categoty}</h2>
    </div>
  )
}

export default Card
