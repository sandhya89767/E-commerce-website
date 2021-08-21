import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container_banner">
        <img
          src="https://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png"
          alt="your backg"
          className="home_banner"
        ></img>
        <div className="home_row">
          <Product
            id={"1"}
            title={"Potato chips"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51YjiYepQmL.jpg"
            }
            rating={5}
            price={30}
            info="Amazing chips of potato now sold by amazon just at rs 30 at a discount"
          />
          <Product
            id={"2"}
            title={"Camera"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91xnO7qHAeL._SL1500_.jpg"
            }
            rating={5}
            price={15000}
            info="Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)"
          />
        </div>
        <div className="home_row">
          <Product
            id={"3"}
            title={"One plus phones"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
            }
            rating={2}
            price={45999}
            info="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
          />
          <Product
            id={"4"}
            title={"Womens Kurta"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61Q4JoFovsL._UL1440_.jpg"
            }
            rating={3}
            price={289}
            info="Vaamsi Women's Poly Crepe straight Kurta (VPK1583Par_ Yellow_ Large)"
          />
          <Product
            id={"5"}
            title={"Womens Sandal"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61QHOfBAvPL._UL1500_.jpg"
            }
            rating={4}
            price={1399}
            info="crocs Women's Fashion Sandals"
          />
        </div>
        <div className="home_row">
          <Product
            id={6}
            title={"Guitar"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71y1TJbygLL._SL1500_.jpg"
            }
            rating={5}
            price={2490}
            info="Juârez Acoustic Guitar, 38 Inch Cutaway, 038C with Bag, Strings, Pick and Strap, Black"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
