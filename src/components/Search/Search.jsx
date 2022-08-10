import React from "react";
import "./search.scss";
import { RiSearchLine } from "react-icons/ri"
import { MdOutlineCancel } from "react-icons/md"

export default function Search() {
    return (
        <>
            <form className="search">
                <input  type="text" placeholder="Body Cream For Men" />
                <MdOutlineCancel style={{ marginRight: "1em", cursor: "pointer" }} />
                <RiSearchLine style={{cursor: "pointer"}} />
            </form>
            <div className="details">
                <span>Category: Bodycare and Lifestyle</span>
                <span>Location: Nigeria</span>
            </div>
        </>
    )
}