import React from "react";
import "./product.scss";
import { Link } from "react-router-dom"

function Product(props) {
    return (
        <div className="product-container">
            <div className="product">
                <h1 className="product-title"> <Link to="./details"> {props.title} </Link> </h1>
                <span>Last Recommended: {props.lastRecommended} </span>
                <span>By {props.recommendedBy} </span>
                <a href="#"><b>Buy from Jumia.NG </b></a>
            </div>
        </div>
    )
}

export default Product