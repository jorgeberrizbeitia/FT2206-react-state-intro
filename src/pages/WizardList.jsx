import allWizards from "../data/wizards.json"
import { useState } from "react"

function WizardList() {

  const [ wizardsToDisplay, setWizardsToDisplay ] = useState(allWizards.slice(0, 3))

  const addWizard = () => {

    // randomizar el elemento a buscar, vendrá del .json
    const randomNum = Math.random() * allWizards.length
    const randomPos = Math.floor(randomNum)

    console.log("random wizard", allWizards[randomPos])
    const wizardToAdd = allWizards[randomPos]

    // wizardsToDisplay.push(wizardToAdd) // por favor no hagan


    // cuando tengamos el elemento agregarlo al array
    // setWizardsToDisplay para actualizar el estado
    // setWizardsToDisplay( /* el valor anterior + el cambio */)

    const arryCopy = [...wizardsToDisplay]
    arryCopy.unshift(wizardToAdd)

    setWizardsToDisplay( arryCopy )

    // setWizardsToDisplay( [wizardToAdd, ...wizardsToDisplay] )
  }

  const addWizardAvanzado = () => {

    // clausula de guardia
    if (allWizards.length === wizardsToDisplay.length) {
      console.log("todos los hechiceron agregados")
      return
    }

    const randomNum = Math.random() * allWizards.length
    const randomPos = Math.floor(randomNum)

    console.log("random wizard", allWizards[randomPos])
    let wizardToAdd = allWizards[randomPos]

    const arrayOfIdsInState = wizardsToDisplay.map((eachWiz) => eachWiz.id)
    // [123, 22, 3, 44]

    let checkIfIsIncluded = arrayOfIdsInState.includes(wizardToAdd.id) // true o false

    while (checkIfIsIncluded) {
      console.log("hechicero repetido, haciendo while")
      const randomNum = Math.random() * allWizards.length
      const randomPos = Math.floor(randomNum)
      wizardToAdd = allWizards[randomPos]
      checkIfIsIncluded = arrayOfIdsInState.includes(wizardToAdd.id) // en algun momento esto será false
    }

    const arryCopy = [...wizardsToDisplay]
    arryCopy.unshift(wizardToAdd)

    setWizardsToDisplay( arryCopy )

  }

  const sortWizard = () => {

    const arrCopy = [...wizardsToDisplay]

    arrCopy.sort((wizard1, wizard2) => {
      if (wizard1.name > wizard2.name) {
        return -1
      } else {
        return 1
      }
    })

    // arrCopy.sort((wizard1, wizard2) => wizard1.name > wizard2.name ? -1 : 1 )

    setWizardsToDisplay(arrCopy)

  }

  const handleDelete = (id) => {

    // necesita el id
    console.log(id)

    // el filter filtra elementos bajo una condicion
    // el filter crea un nuevo array, no modifica el original
    // no incluyas el elemento del id que te voy a pasar

    const filteredArr = wizardsToDisplay.filter((eachWizard) => {
      return eachWizard.id !== id
    })
    
    setWizardsToDisplay(filteredArr)

  }

  return (
    <div>
 
        <h3>WizardList</h3>

        <button onClick={addWizard}>Agrega hechicero</button>
        <button onClick={sortWizard}>Ordenar por nombre</button>

        {wizardsToDisplay.map((eachWizard) => {
          return (
            <div key={eachWizard.id}>
              <hr />
              <h3>{eachWizard.name}</h3>
              <p>{eachWizard.description}</p>
              <button onClick={() => handleDelete(eachWizard.id)}>Borrar hechicero</button>
            </div>
          )
        })}


    </div>
  )
}

export default WizardList