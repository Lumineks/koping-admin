import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ProductAccordeon from '../../components/ProductAccordeon';
import PageTitleForm from './forms/PageTitleForm';
import Product from './interfaces/Product';

const Catalog = () => {
  const products: Product[] = [
    {
      title: 'Капля',
      width: 250,
      height: 500,
      price: 150,
      imgPath: 'https://ucarecdn.com/360ecd7b-061c-4bcc-924b-60fc133e3cbf/popular1.jpg',
    },
    {
      title: 'Капля',
      width: 250,
      height: 500,
      price: 150,
      imgPath: '',
    },
    {
      title: 'Капля',
      width: 250,
      height: 500,
      price: 150,
      imgPath: '',
    },
  ];

  // TODO: Spinner
  // TODO: Добавить поле для номера в ссылке "Позвонить"
  return (
    <main>
      <Container>
        <h1 className="my-4">Страница каталога</h1>

        <h2>Элементы страницы:</h2>

        <div className="my-4 w-75">
          <PageTitleForm defaultValue="Значение по умолчанию" />
        </div>
        <div className="my-4">
          <div className="row my-4">
            <h2 className="col-12 col-sm-8 col-dm-10">Карточки товаров</h2>
            <Button className="col-4 ms-3 col-sm-4 col-md-2" variant="success">Добавить</Button>
          </div>

          <ProductAccordeon products={products} />
        </div>
      </Container>
    </main>
  );
};

export default Catalog;
