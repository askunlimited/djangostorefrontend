import React from 'react'
import { Row, Col } from 'react-bootstrap';

import products from '../products';
import Product from '../components/Product';




function Home() {
  return (
    <Row>
      <h1>Latest Investments</h1>
     
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}

       
    </Row>
  )
}

export default Home