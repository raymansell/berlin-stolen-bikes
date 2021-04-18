import React, { useState } from 'react';

const useForm = <T, V>(
  fields: T,
  validator: (fields: T) => V,
  onSubmit: (fields: T) => Promise<void> | void
) => {
  const [values, setValues] = useState<T>(fields);
  const [errors, setErrors] = useState<V | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    const validationErrors = validator(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error) {
        // server errors go here (e.g user not found, user already registered, incorrect password, etc)
        setErrors(({ serverError: error.message } as unknown) as V);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return [values, errors, handleChange, handleSubmit] as const;
};

export default useForm;
