import { Link } from "react-router-dom";

import "./Product.css";

function Product(props) {
  const p = props.product;
  return (
    <Link to={`/product/${p._id}`}>
      <div className="product">
        <img className="product-image" src={p.url} alt="product" />
        <div className="product-name">{p.name}</div>
        <div className="product-brand">{p.brand}</div>
        <div className="product-price">$ {p.price}</div>
        <div className="product-rating">{p.stars} Stars (10 Reviews)</div>
      </div>
    </Link>
  );
}

export default Product;
