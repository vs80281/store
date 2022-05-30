import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";

const Home = () => {
  return (
    <div className="fluid-container" >
      <div className="row">
        <nav className="col-md-12 ">
          <h1 style={{textAlign:"center" ,backgroundColor:"lightskyblue",}} >Mobile Store</h1>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4 ">
          <Cart />
        </div>
      </div>

    </div>

  );
};

export default Home;