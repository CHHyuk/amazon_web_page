import React from "react";
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt="" />
                <div className="home_row">
                    <Product id="2323"
                        title="제품 1"
                        price={3000}
                        image="https://picsum.photos/id/250/292/158"
                        rating={5} />

                    <Product id="2320"
                        title="제품 2"
                        price={200}
                        image="https://picsum.photos/id/232/292/158"
                        rating={3} />
                </div>
                <div className="home_row">
                    <Product id="2321"
                        title="제품 3"
                        price={50020}
                        image="https://picsum.photos/id/12/292/158"
                        rating={1} />

                    <Product id="2322"
                        title="제품 4"
                        price={2143500}
                        image="https://picsum.photos/id/24/292/158"
                        rating={4} />
                </div>
                <div className="home_row">
                    <Product id="2324"
                        title="제품 5"
                        price={56400}
                        image="https://picsum.photos/id/55/292/158"
                        rating={3} />

                    <Product id="2325"
                        title="제품 6"
                        price={95340}
                        image="https://picsum.photos/id/240/292/158"
                        rating={4} />
                </div>
                <div className="home_row">
                    <Product id="2326"
                        title="제품 6"
                        price={55000}
                        image="https://picsum.photos/id/195/292/158"
                        rating={5} />
                        
                    <Product id="2327"
                        title="제품 6"
                        price={37900}
                        image="https://picsum.photos/id/221/292/158"
                        rating={1} />
                </div>
            </div>
        </div>
    )
}

export default Home;
