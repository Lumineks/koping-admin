import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import InputField from '../../../components/inputField';

interface PageTitleFormProps {
  defaultValue: string;
}

const PageTitleForm = ({defaultValue}: PageTitleFormProps) => {
  const [pageTitle, setPageTitle] = useState('');

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(pageTitle);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <InputField
        label="Заголовок страницы"
        value={defaultValue}
        onChange={(value) => {
          setPageTitle(value);
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
