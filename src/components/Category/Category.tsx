import React, { FC } from 'react';
import styles from './Category.module.css';
import { Button, ButtonGroup } from 'react-bootstrap';

export interface CategoryProps {
  navigate: (route: string) => void;
}

const Category: FC<CategoryProps> = ({ navigate }) => {
  return (
    <div className={styles.Category}>
      <ButtonGroup vertical className="fullScreen">
        <Button variant="gryffindor" size="lg" onClick={() => navigate(`/list/gryffindor`)}>
          Gryffindor
        </Button>
        <Button variant="hufflepuff" size="lg" onClick={() => navigate(`/list/hufflepuff`)}>
          Hufflepuff
        </Button>
        <Button variant="slytherin" size="lg" onClick={() => navigate(`/list/slytherin`)}>
          Slytherin
        </Button>
        <Button variant="ravenclaw" size="lg" onClick={() => navigate(`/list/ravenclaw`)}>
          Ravenclaw
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Category;
