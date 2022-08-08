import React from "react";
import "./search.scss";
import { FaSearch } from "react-icons/fa"

export default function Search(props) {
    return (
        <>
            <div className="search">
                <input  type="text" placeholder={props.placeholder} />
            </div>
            <div className="details">
                <span>Category: {props.category}</span>
                <span>Location: {props.location}</span>
            </div>
        </>
    )
}