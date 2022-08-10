import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import "./home.scss";
import {MdKeyboardArrowRight} from "react-icons/md"


export const data = [
  {
    id: 1,
    title: "Nivea Lotion",
    lastRecommended: "Jan, 2022",
    recommendedBy: "Favour and 92 others"

  },
  {
    id: 2,
    title: "Vaseline", 
    lastRecommended: "Jan, 2022", 
    recommendedBy: "Dupe and 52 others"
  },
  {
    id: 3,
    title: "SilverLine Lotion",
    lastRecommended: "Dec, 2021", 
    recommendedBy: "Precious and 60 others",
  },
  {
    id: 4,
    title: "Jumpo Ori", 
    lastRecommended: "Dec, 2021", 
    recommendedBy: "Cynthia and 20 others"
  },
  {
    id: 5,
    title: "CarolWhite", 
    lastRecommended: "Aug, 2021", 
    recommendedBy: "Joshua and 42 others"
  }
]

function Home() {


  //mapping over the data  from above
  const products = data.map(product => {
    return <Product 
      key={product.id}
      {...product}
    />
  })

  return (
    <div>
      <Navbar />
      <Search />

      <section className="products-section">
        {products}
        <div className="see-more-rec">
          <h1><a href="">See More Recommendations <MdKeyboardArrowRight style={{verticalAlign: "middle"}} /></a></h1>
          <span><a href="">MamaCares</a></span>
          <span><a href="">SkinLight</a></span>
          <span><a href="">Smooth Body Cream</a></span>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
