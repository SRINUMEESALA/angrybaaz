
import ProductsList from "../ProductsList"
import "./index.css"

const Quote = () => (
    <div className="QuoteParentCon d-flex justify-content-center mt-3">
        <div className="QuoteCon bg-white p-3 rounded">
            <h1 className="h3">Quote</h1>
            <p className="">See quotes send by sellers for your order.Price differs based on printing price.</p>
            <ProductsList />
        </div>
    </div>
)


export default Quote