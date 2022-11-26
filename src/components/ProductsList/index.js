
import ProductItem from "../ProductItem"
import { v4 as gid } from "uuid"
import "./index.css"

// Used for generating duplicate cards
const noOfCards = [{ card: 1 }, { card: 2 }, { card: 3 }, { card: 4 }, { card: 5 }, { card: 6 }]
const ProductsList = () => (
    <ul className="list-unstyled flex-wrap d-flex m-3 justify-content-around">
        {noOfCards.map(eachItem => <ProductItem key={gid()} eachItem={eachItem} />)}
    </ul>
)



export default ProductsList