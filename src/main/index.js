import React from 'react';
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function () {
            axios.get("https://e12b0c5a-0121-4952-b42c-6419d901cc36.mock.pstmn.io/products").then(function (result) {
                const products = result.data.products;
                setProducts(products);
            }).catch(function (error) {
                console.error('에러 발생 : ', error)
            });
        }, [])
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="로고 이미지" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="배너 이미지" />
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function (product, index) {
                            return (
                                <div className="product-card">
                                    <Link className="product-link" to={`/products/${index}`}>
                                        <div>
                                            <img className="product-img" src={product.imageUrl} alt="상품 이미지" />
                                        </div>
                                        <div className="product-contents">
                                            <span className="product-name">{product.name}</span>
                                            <span className="product-price">{product.price}원</span>
                                            <div className="product-seller">
                                                <img className="product-avatar" src="images/icons/avatar.png" alt="아바타 이미지" />
                                                <span>{product.seller}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPage;