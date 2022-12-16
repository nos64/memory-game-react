import React from 'react';
import style from './ValidationErrorMessage.module.scss';

interface IErrorMessageProps {
  message?: string;
}

const ValidationErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  return <div className={style.errorMessage}>{message}</div>;
};

export default ValidationErrorMessage;
