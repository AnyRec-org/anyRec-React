import React from "react";
import Navbar from "../../components/Search/Search";
import "./searchedProduct.scss";
import Search from "../../components/Search/Search";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";


export default function SearchedProduct() {
    return (
        <div>
            <Search />
            <div className="searched-product-container">
                <div className="searched-product-image">
                    <img src="" alt="" />
                </div>
                <div className="searched-product-detail">
                    <span>product</span>
                    <h1>Adobe Creative Cloud</h1>
                    <span>Last Recommended: Dec, 2021</span>
                    <span> Recommended By: Precious, Clarke and 60 Others</span>
                </div>
            </div>

            <section>
                <div className="additional-details">
                    <h3>Addition details</h3>
                    <hr />
                    <div>
                        <div className="details-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia    deserunt mollit anim id est
                            </p>
                            <p>
                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia    deserunt mollit anim id est
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btn-container">
                    <Button />
                </div>
            </section>
        </div>
    )
}