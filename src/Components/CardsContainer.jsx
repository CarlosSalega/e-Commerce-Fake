import { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductsContextProvider'

const CardsContainer = () => {
  const products = useContext(ProductsContext)

  return (
    <div className="CardsContainer">
      {products.map((product) => {
        return (
          <div
            className="Card"
            key={product.id}
          >
            <img
              className="Card-Image"
              src={product.images[0]}
              alt="Image"
            />
            <p className="Product-Name">{product.title}</p>
            <div className="Price-Container">
              <p className="Price">{product.price}</p>
              <button className="Call-to-Action">Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { CardsContainer }
