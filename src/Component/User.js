import React from 'react'

export default function User() {
const users = [
    { id: 1, name: "ali" },
    { id: 2, name: "raza" },
    { id: 3, name: "hania" },
    { id: 4, name: "amir" },
      ];
  return (
    <div>
        <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} 
          </li>
        ))}
      </ul>
    </div>
  )
}
