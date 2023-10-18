import React, { useEffect, useState } from 'react';
import './list.css';
import { FaTrashAlt } from 'react-icons/fa';
const ItemsList = ({ product, setProduct, handleChange }) => {

    const [total, setTotal] = useState(0);

    const addTotal = () => {
        let sum = 0;
        product.map((item) => (
            sum += item.sellingPrice * item.count
        ))
        setTotal(sum);
    }
    useEffect(() => {
        addTotal();
    })
    const deleteItem = (id) => {
        const temp = product.filter((item) => item.id !== id)
        setProduct(temp);
    }
    return (
        <article>
            <h1>Cart Items</h1>
            <h4>Sub Total of ({product.length} items): {total}</h4>
            {
                product?.map((item) => (
                    <div className="itemBox" key={item.id}>
                        <img className="itemImg" src={item.image} alt="book" />

                        <div className='section'>
                            <p>{item.name}</p>
                            <p>{item.author}</p>
                            <button onClick={() => handleChange(item, +1)}> + </button>
                            <button>{item.count}</button>
                            <button onClick={() => handleChange(item, -1)}> - </button>
                        </div>
                        <div className='lastSection'>
                            <span>Rs.{item.sellingPrice}</span>
                            <button onClick={() => deleteItem(item.id)} ><FaTrashAlt /></button>
                        </div>
                    </div>
                ))}
        </article>
    )
}

export default ItemsList
