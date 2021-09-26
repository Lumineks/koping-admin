import React from 'react';
import { Accordion } from 'react-bootstrap';
import ProductForm from '../pages/Catalog/forms/ProductForm';
import Product from '../pages/Catalog/interfaces/Product';

interface ProductAccordeonProps {
  products: Product[];
}

const ProductAccordeon = ({ products }: ProductAccordeonProps) => (
  <Accordion className="row m-0 gap-2 align-items-start" flush>
    {products.map((p, idx) => (
      <Accordion.Item
        className="col-xs-12 col-md-5 gx-1"
        eventKey={`${idx}`}
        key={p.title + p.imgPath}
      >
        <Accordion.Header>
          <div className="fw-medium fs-2 my-2">№{idx + 1}</div>
        </Accordion.Header>
        <Accordion.Body>
          <ProductForm product={p} />
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

export default ProductAccordeon;
