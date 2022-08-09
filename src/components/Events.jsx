import React from 'react'

function Events() {

  const handleClick = () => {
    console.log( new Date())
  }

  const handleMouseEnter = (event) => {
    console.log("mouse sobre el div", event.target)
  }

  const handleMouseLeave = (event) => {
    console.log("mouse sale del div", event.target)
  }

  const handleChange = (event) => {
    console.log("escribiendo sobre el campo", event.target.value)
    inputValue = event.target.value
  }

  let inputValue;

  return (
    <div>
      
      <h3>Events</h3>

      <button onClick={() => console.log("Clickando")}>Click</button> SI
      {/* <button onClick={console.log("Clickando")}>Click</button> NO */}
      <button onDoubleClick={handleClick}>Ver la fecha</button>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2>Hola</h2>
      </div>

      <input type="text" onChange={handleChange} />

      <p>Aqui el valor que escribe del campo: {inputValue} </p>

    </div>
  )
}

export default Events