import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ImageWidget from '../../../components/ImageWidget';
import InputField from '../../../components/inputField';
import Product from '../interfaces/Product';

interface ProductFormProps {
  product: Product;
}

const ProductForm = ({ product }: ProductFormProps) => {
  const [title, setTitle] = useState(product.title);
  const [width, setWidth] = useState(product.width);
  const [height, setHeight] = useState(product.height);
  const [price, setPrice] = useState(product.price);
  const [imgPath, setImgPath] = useState(product.imgPath);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updatedProduct: Product = {
      title,
      width,
      height,
      price,
      imgPath,
    };

    console.log(updatedProduct);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <InputField
        label="Название товара"
        value={title}
        onChange={(value) => {
          setTitle(value);
        }}
        isLarge={false}
      />
      <InputField
        label="Ширина в мм"
        value={width.toString()}
        onChange={(value) => {
          setWidth(parseInt(value));
        }}
        isLarge={false}
      />
      <InputField
        label="Длина в мм"
        value={height.toString()}
        onChange={(value) => {
          setHeight(parseInt(value));
        }}
        isLarge={false}
      />
      <InputField
        label="Стоимость"
        value={price.toString()}
        onChange={(value) => {
          setPrice(parseInt(value));
        }}
        isLarge={false}
      />
      <ImageWidget
        label="Изображение"
        isLarge={false}
        onChange={(path) => {
          setImgPath(path);
        }}
        imgPath={imgPath}
      />
      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default ProductForm;
