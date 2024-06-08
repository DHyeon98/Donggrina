import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './weight-input.module.scss';
import { FormInput } from '../input-type';

export default function WeightInput({ name, label, type = 'text' }: FormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const formatInputValue = (value: string): string => {
    return value.replace(/[^0-9.]/g, '');
  };
  const updateInputValue = (input: HTMLInputElement, value: string) => {
    input.value = value;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatInputValue(value);
    if (value !== formattedValue) {
      updateInputValue(e.target, formattedValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>|</span>
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          id={name}
          type={type}
          {...register(name as string, {
            required: '필수 정보입니다.',
          })}
          onInput={handleInput}
        />
        <span>KG</span>
      </div>
      {errors[name as string] && <p className={styles.error}>{errors[name as string]?.message as string}</p>}
    </div>
  );
}
