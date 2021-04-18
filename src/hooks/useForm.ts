import React, { useState } from 'react';

const useForm = <T, V>(fields: T, validator: (fields: T) => V) => {
  const [values, setValues] = useState<T>(fields);
  const [errors, setErrors] = useState<V | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validator(values));
  };

  return [values, errors, handleChange, handleSubmit] as const;
};

export default useForm;
