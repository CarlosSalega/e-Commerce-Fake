import { createContext } from 'react'

export const contextoEjemplo = createContext()

const ContextoEjemploProvider = ({ children }) => {
  return (
    <contextoEjemplo.Provider value={10}>{children}</contextoEjemplo.Provider>
  )
}

export default ContextoEjemploProvider
