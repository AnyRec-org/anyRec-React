import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import "./home.scss";

function Home() {
  return (
    <div>
      <Navbar />
      <Search category="Bodycare & Lifestyle" location="Nigeria" placeholder="Body Cream for Men" />

      <section className="products-section">
        <Product title="Nivea Lotion" lastRecommended="Jan, 2022" recommendedBy="Favour and 92 others" />
        <Product title="Vaseline" lastRecommended="Jan, 2022" recommendedBy="Dupe and 52 others" />
        <Product title="SilverLine Lotion" lastRecommended="Dec, 2021" recommendedBy="Precious and 60 others" />
        <Product title="Jumpo Ori" lastRecommended="Dec, 2021" recommendedBy="Cynthia and others" />
        <Product title="CarolWhite" lastRecommended="Aug, 2021" recommendedBy="Joshua and 42 others" />
        <Product title="CarolWhite" lastRecommended="Aug, 2021" recommendedBy="Joshua and 42 others" />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
