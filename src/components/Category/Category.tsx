import React, { FC } from 'react';
import styles from './Category.module.css';

interface CategoryProps {}

const Category: FC<CategoryProps> = () => <div className={styles.Category}>Category Component</div>;

export default Category;
