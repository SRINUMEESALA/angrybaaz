import { Component } from "react"
import { v4 as gid } from "uuid"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./index.css"

const productProperties = [{ type: "color", value: "white", id: gid() }, { type: "Sleeves", value: "Full sleeves", id: gid() }, { type: "Neck", value: "Round Neck", id: gid() }, { type: "Fabric", value: "cotton", id: gid() }]

class ProductItem extends Component {
    state = { orderedId: 1 }

    cardbody = () => (
        <div className="card-body">
            <div className="d-flex">
                <div className="itemImage d-flex align-items-center">
                    <img src="https://img.freepik.com/premium-photo/man-white-background-copy-space-tshirt_236836-23493.jpg?w=740" alt="product" className="w-100 h-75" />
                </div>
                <ul className="list-unstyled d-flex flex-column infoCon">
                    {productProperties.map(obj => <li className="d-flex justify-content-between w-100" key={obj.id}><p className="type">{obj.type}</p><p>{obj.value}</p></li>)}
                </ul>
            </div>
            <div className=""><hr /></div>
            <div className="pricesCon">
                <div className="d-flex justify-content-between lineDec p-1 pl-2 pr-2 rounded mb-1">
                    <p className="type">Vinayl Print</p>
                    <p className="">300/t-shirt</p>
                </div>
                <div className="d-flex justify-content-between  p-1 pl-2 pr-2 rounded mb-1">
                    <p className="type">Screen Print</p>
                    <p className="">350/t-shirt</p>
                </div>
                <div className="d-flex justify-content-between lineDec p-1 pl-2 pr-2 rounded">
                    <p className="type">Sublimation Print</p>
                    <p className="">400/t-shirt</p>
                </div>
            </div>
        </div>
    )

    cardFooter = () => (
        <div className="card-footer d-flex justify-content-between">
            <h1 className="h6">Outflank Printer</h1>
            <BsFillArrowRightCircleFill className="arrrowIcon text-danger" />
        </div>
    )

    render() {
        const { eachItem } = this.props
        const { orderedId } = this.state
        return (
            <li className="col-md-5 col-lg-4 col-12 p-3">
                <div className="card" >
                    {this.cardbody()}
                    {this.cardFooter()}
                    <p className={orderedId === eachItem.card ? "bg-danger text-white orderPlacedEle" : "bg-secondary orderPlacedEle text-white"}>{orderedId === eachItem.card ? "Order Got Placed" : "Enquiry Deactivated"}</p>
                </div>
            </li>
        )
    }
}


export default ProductItem