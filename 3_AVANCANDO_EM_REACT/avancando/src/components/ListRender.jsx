import { useState } from "react"

export const ListRender = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria'])

    const [users, setUsers] = useState([
        {id: 1, name: 'Flávio', age: 34},
        {id: 2, name: 'Dani', age: 35},
        {id: 3, name: 'Paula', age: 37},
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

