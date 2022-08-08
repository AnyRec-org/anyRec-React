import React from "react";
import "./product.scss";

function Product(props) {
    return (
        <div className="product-container">
            <div className="product">
                <h1 className="product-title">{props.title}</h1>
                <span>Last Recommended: {props.lastRecommended} </span>
                <span>By {props.recommendedBy} </span>
                <a href="#"><b>Buy from Jumia.NG </b></a>
            </div>
        </div>
    )
}

export default Product