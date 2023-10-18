import React from 'react'
import { FaPlus, FaHeart } from "react-icons/fa6";
const ProductContainer = ({ item, handleClick }) => {
    const { id, name, image, sellingPrice, costPrice, category, author } = item;

    const discount = (cp, sp) => {
        return (((cp - sp) / cp) * 100).toFixed(2);
    }
    return (
        <div className="products">
            <div className="productCard" key={id}>
                <img className="productImg" src={image} alt="" />
                <section>
                    <h2 className="productName">{name} - {category}</h2>
                    <h2 className='sp'>Price: Rs. {sellingPrice} &nbsp;
                        <span className='cp'>({costPrice})</span>
                    </h2>
                    <p>{author}</p>
                    <p>Discount: {discount(costPrice, sellingPrice)} %</p>
                    <div className="productBtn">
                        <button onClick={() => handleClick(item)}
                            className="btnAdd">
                            <FaPlus /> Add to Card
                        </button>
                        <button className='btnWish'><FaHeart /></button>
                    </div>

                </section>

            </div>
        </div>
    );
};
export default ProductContainer
