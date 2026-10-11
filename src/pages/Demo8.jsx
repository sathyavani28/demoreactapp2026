import React, { useState } from 'react'

export default function Demo8() {

    const [name,setName] = useState("") // null is initial value

    // here name is state variable
    // setName is a function to modify name variable
    // null is initial value of name.

    function change() {
              // alert("button is clicked")
              setName("fullstack") // "demo" will be assigned to name variable using setName() function
    }


  return (
    <div>
          <h3>Hooks Demo 1</h3>
          <p>NAME:{name}</p>
          <p>LENGTH:{name.length}</p>

          <button onClick={change}>Change</button>
    </div>
  )
}
