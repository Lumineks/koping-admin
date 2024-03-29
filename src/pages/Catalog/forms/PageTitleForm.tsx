import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import InputField from '../../../components/inputField';

interface PageTitleFormProps {
  value: string;
}

const PageTitleForm = ({value}: PageTitleFormProps) => {
  const [pageTitle, setPageTitle] = useState('');

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(pageTitle);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <InputField
        label="Заголовок страницы"
        value={value}
        onChange={(val) => {
          setPageTitle(val);
        }}
        isLarge
      />
      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default PageTitleForm;
