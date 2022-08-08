import React from "react";
import "./product.scss";
import { AiOutlineHeart} from "react-icons/ai"
import {TbHeartOff } from "react-icons/tb"

function Product(props) {
    return (
        <div className="product-container">
            <div className="product">
                <h1 className="product-title">{props.title}</h1>
                <span>Last Recommended: {props.lastRecommended} </span>
                <span>By {props.recommendedBy} </span>
                <a href="#"><b>Buy from Jumia </b></a>
            </div>
            <div className="action">
                <a href="#"> <AiOutlineHeart /> Recommend</a>
                <a href="#"> <TbHeartOff />Discourage</a>
            </div>
        </div>
    )
}

export default Product