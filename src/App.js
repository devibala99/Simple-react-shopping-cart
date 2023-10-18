import './App.css';
import React, { useState} from 'react';
import Header from './components/Header';
import Products from './components/Products';
import ItemsList from './components/ItemsList';

function App() {
   
    // ! setting product state
    const [product, setProduct] = useState([]);

    // ! setting state for warning & (display cart)
    const [show, setShow] = useState(true);
    const [warning, setWarning] = useState(false);

    // ! add product set product in the cart
    const handleClick = (item)=>{
		let isPresent = false;
		product.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setProduct([...product, item]);
	}

    const handleChange = (item, d) =>{
		let ind = -1;
		product.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = product;
		tempArr[ind].count += d;
		
		if (tempArr[ind].count === 0)
			tempArr[ind].count = 1;
		setProduct([...tempArr])
	}
    const alertWarning=()=>{
        alert('Product is already in cart');
    }
    return (
        <React.Fragment>
            
            <Header title='Book Store' setShow={setShow} itemsCount={product.length}/>
            {
                show ? <Products
                    product={product}
                    setProduct={setProduct}
                    handleClick={handleClick}
                     /> :
                     <ItemsList product={product} setProduct={setProduct}
                     handleChange={handleChange} />
            }
            {
                warning && <div className='warning'>{alertWarning()}</div>
            }
        </React.Fragment>
    );
}

export default App;
