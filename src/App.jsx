import '../src/Stylesheets/Style.css'
import { CardsContainer } from './Components/CardsContainer'
import { ProductsContextProvider } from './Contexts/ProductsContextProvider'
import { Cart } from './Components/Cart'

function App() {
  return (
    <ProductsContextProvider>
      <div className="App">
        <CardsContainer />
        <Cart />
      </div>
    </ProductsContextProvider>
  )
}

export default App
