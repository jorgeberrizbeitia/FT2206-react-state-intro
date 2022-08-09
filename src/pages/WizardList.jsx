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

  return (
    <div>

        <h3>WizardList</h3>

        <button onClick={addWizard}>Agrega hechicero</button>
        <button>Ordenar por nombre</button>


        {wizardsToDisplay.map((eachWizard) => {
          return (
            <div key={eachWizard.id}>
              <hr />
              <h3>{eachWizard.name}</h3>
              <p>{eachWizard.description}</p>
              <button>Borrar hechicero</button>
            </div>
          )
        })}


    </div>
  )
}

export default WizardList