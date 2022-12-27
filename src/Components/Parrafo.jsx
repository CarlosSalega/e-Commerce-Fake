import { useContext } from 'react'
import { contextoEjemplo } from '../Contexts/ContextoEjemploProvider'

function Parrafo() {
  const numeroDesdeContexto = useContext(contextoEjemplo)
  return (
    <>
      <div>Parrafo</div>
      <p>Numero: {numeroDesdeContexto}</p>
    </>
  )
}

export default Parrafo
