import React from 'react';

import styles from './Container.module.scss';

interface IChildrenProps {
  children?: React.ReactNode;
}

const Container: React.FC<IChildrenProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
