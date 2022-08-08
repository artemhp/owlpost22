import React, { FC } from 'react';
import styles from './List.module.css';
import Image from 'react-bootstrap/Image';

import { ListGroup, Button } from 'react-bootstrap';

interface ListProps {
  house: string;
  type: string;
}

const List: FC<ListProps> = ({ house, type }) => (
  <>
    <div className="d-grid m-2">
      <Button variant={type} block size="lg" className="mb-2">
        {house}
      </Button>
    </div>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <div className="d-grid gap-2" style={{ gridTemplateColumns: '60px 1fr auto', alignItems: 'center' }}>
          <span className="float-start" style={{ width: '60px' }}>
            <Image fluid src={`/assets/logo-${type}.png`} />
          </span>
          <span>ListGroup item</span>
          <span className="float-end text-muted">200m</span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  </>
);

export default List;
