import React from "react";

function List() {
  const someArr = ["Malva", "Malva", "Rebeca", "José", "Pablo"];

  // const someArrJSX = [<p>Malva</p>, <p>Rebeca</p>, <p>José</p>, <p>Pablo</p>]

  const someBooks = [
    { id: 123, title: "El Hobbit", author: "Tolkien" },
    { id: 555, title: "Harry Potter", author: "JK Rowling" }
  ]

  return (
    <div>
      <h4>List</h4>

      {someArr.map((eachElem, index) => {
        return <li key={eachElem+index}>{eachElem}</li>;
      })}

      <h5>Los libros</h5>

      {someBooks.map((eachElem) => {
        return (
        <div key={eachElem.id}>
          <p>titulo: {eachElem.title}</p>
          <p>autor: {eachElem.author}</p>
        </div>
        )
      })}

    </div>
  );
}

export default List;
