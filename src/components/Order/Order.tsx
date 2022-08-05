import React, { FC } from 'react';
import styles from './Order.module.css';

interface OrderProps {}

const Order: FC<OrderProps> = () => (
  <div className={styles.Order}>
    Order Component
  </div>
);

export default Order;
