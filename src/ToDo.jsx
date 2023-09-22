import { useState } from "react"



const ToDo = () => {
  const [value, setValue] = useState("value")
  const [ToDo, setTodo] = useState([])

    const handleClick = () => {
        setTodo([...ToDo, value])
    }

    const deleteItem = (index) => {
        const updatedList = [...ToDo]
        updatedList.splice(index, 1)
        setTodo(updatedList)
    }

    const updateItem = (index, newValue) => {
        const updatedList = [...ToDo]
        updatedList[index] = newValue
        setTodo(updatedList)
    }


  return (
    <div style={{backgroundColor: 'darkviolet'}}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <h1>{}</h1>
      <button onClick={handleClick}>Add to List</button>
      <div>
        <ol>
          {ToDo.map((ToDoItems, index) => (
            <li key={index}>
              {ToDoItems}
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button id="updateBtn"
                onClick={() => {
                  const newValue = prompt("Enter new value:")
                  if (newValue !== null) {
                    updateItem(index, newValue)
                  }
                }}
              >
                Update
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ToDo
