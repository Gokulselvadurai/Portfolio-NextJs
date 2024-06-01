import "./product.css";

const Product = ({ img, link, title }) => {
  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle product-circle1"></div>
        <div className="product-circle product-circle2"></div>
        <div className="product-circle product-circle3"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="product-link">
        <img src={img} alt={title} className="product-img" />
      </a>
      <h4 className="product-title">{title}</h4>
      <div className="product-overlay"></div>
    </div>
  );
};

export default Product;
