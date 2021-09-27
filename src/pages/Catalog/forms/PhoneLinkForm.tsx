import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import InputField from '../../../components/inputField';

interface PhoneLinkProps {
  value: string;
}

const PhoneLinkForm = ({value}: PhoneLinkProps) => {
  const [link, setLink] = useState(value);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(link);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <InputField
        label="Номер телефона"
        value={link}
        onChange={(val) => {
          setLink(val);
        }}
        isLarge
      />
      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default PhoneLinkForm;
