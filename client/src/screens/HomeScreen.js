import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import { listCategories } from '../actions/categoryActions';

const HomeScreen = () => {
  const params = useParams();
  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;
  const category = params.category;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
    dispatch(listProducts(keyword, pageNumber, category));
  }, [dispatch, keyword, pageNumber, category]);

  return (
    <>
      <Meta />
      {!keyword && !category ? (
        <>
          <ProductCarousel />
          <h1>Featured Categories</h1>
          <Row>
            {categories &&
              categories.map((cat) => (
                <Col key={cat._id} sm={12} md={6} lg={4} xl={3}>
                  <Link to={`/category/${cat._id}`}>
                    <div className='category-card'>
                      <img src={cat.image || '/images/placeholder.jpg'} alt={cat.name} />
                      <div className='category-name'>{cat.name}</div>
                    </div>
                  </Link>
                </Col>
              ))}
          </Row>
        </>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>{category ? (categories.find(c => c._id === category)?.name || 'Products') : 'Latest Products'}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
            category={category ? category : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
