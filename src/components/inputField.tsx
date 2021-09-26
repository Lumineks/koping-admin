import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isLarge: boolean;
}

const InputField = ({ label, value, onChange, isLarge }: InputFieldProps) => (
  <InputGroup className="mb-3 m-0 row">
    <InputGroup.Text
      className={`col-xs-12 col-sm-6 ${isLarge ? 'col-lg-4' : 'col-lg-7'}`}
      id="inputGroup-sizing-default"
    >
      {label}
    </InputGroup.Text>
    <FormControl
      className={`col-xs-12 col-sm-6 ${isLarge ? 'col-lg-8' : 'col-lg-5'}`}
      onChange={(event) => {
        onChange(event.currentTarget.value);
      }}
      value={value}
      required
    />
  </InputGroup>
);

export default InputField;
