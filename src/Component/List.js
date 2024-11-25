import React from 'react'

export default function List() {
const fruits = ["Apple", "kiwi", "grapes", "Mango", "cranberry", "Strawberry"];
  return (
    <div>
    <h1>Fruit List</h1>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> 
      ))}
    </ul>
    </div>
  )
}
