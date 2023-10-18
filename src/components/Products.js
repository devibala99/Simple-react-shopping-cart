import ProductContainer from './ProductContainer'
import list from './data';
const Products = ({handleClick}) => {

      return (
        <div className='body'>
            <div className='container'>
                {
                    list.map((item)=>(
                        <ProductContainer item={item} key={item.id}
                        handleClick={handleClick}/>
                    ))
                }
            </div>
           
        </div>

    )
}

export default Products
