import React from 'react'
import { useState } from "react"
import ShowCounter from './ShowCounter'

function Counter() {

  const [counter, setCounter] = useState(0)
  //        |         |                  |
  //    el estado     |             valor inicial del estado
  //        la funcion que actualiza el estado

  const [message, setMessage] = useState("")


  const handleIncrease = () => {
    // incrementar el estado en 1
    // counter++ // no funciona, esto no renderiza de nuevo el comp

    // setCounter hace dos cosas:
    // 1. actualizar el valor del estado
    // 2. renderizar de nuevo el componente
    setCounter(counter + 1) // async 9
    // counter++ NO es lo mismo que counter + 1
    // counter++ SI es igual a counter = counter + 1
    if (counter === 9) {
      setMessage("llegamos a 10")
    }
    // lo cambia a 9 + 1 = 10
  }

  const handleDecrease = () => setCounter(counter - 1)

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div>

      <h4>Counter</h4>

      <h2>{counter}</h2>

      {/* ejemplo de pasar el estado a un componente hijo */}
      <ShowCounter counter={counter}/>

      <button disabled={counter <= 0 ? true : false} onClick={handleDecrease}>-</button>
      <button disabled={counter >= 10 ? true : false} onClick={handleIncrease}>+</button>

      <br />

      <input type="text" onChange={handleChange} />

      <p>El usuario escribe: {message} </p>

      <br />

    </div>
  )
}

export default Counter