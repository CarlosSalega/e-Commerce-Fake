import './App.css'
import Parrafo from './Components/Parrafo'
import ContextoEjemploProvider from './Contexts/ContextoEjemploProvider'

function App() {
  return (
    <ContextoEjemploProvider>
      <div className="App">
        <Parrafo />
      </div>
    </ContextoEjemploProvider>
  )
}

export default App
