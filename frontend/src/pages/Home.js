import React, { useEffect } from 'react';
import Product from '../components/Product.js';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/product.js';

function Home() {
  
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    
    dispatch(listProducts());
    return () => {};
  }, []);

  return loading? <div> กำลัง load อยู่นะครับ </div> :
          error? <div className="error"> ERRRR {error} </div> : (
    <div>
      <ul className="products">
        {products.map( (p) => 
          <li>
            <Product product={p} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Home;
