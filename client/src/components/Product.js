import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={product.images && product.images.length > 0 ? product.images[0].path : '/images/placeholder.jpg'} 
          variant='top' 
          className='product-image'
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='div' className='product-brand my-2'>
          <span className='text-muted'>{product.brand}</span>
        </Card.Text>

        {product.discount > 0 ? (
          <Card.Text as='h3' className='product-price'>
            <span className='discounted-price'>${((product.price * (100 - product.discount)) / 100).toFixed(2)}</span>
            <span className='original-price'>${product.price.toFixed(2)}</span>
            <span className='discount-badge'>{product.discount}% OFF</span>
          </Card.Text>
        ) : (
          <Card.Text as='h3' className='product-price'>
            ${product.price.toFixed(2)}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
