import React, { FC } from 'react';
import styles from './List.module.css';
import Image from 'react-bootstrap/Image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ListGroup, Button } from 'react-bootstrap';

interface ListProps {
  house: Date;
  type: string;
}

const List: FC<ListProps> = ({ house, type }) => {
  let navigate = useNavigate();
  const { isLoading, data, isError } = useQuery(['getStudentsList'], () =>
    axios
      .get(`/.netlify/functions/api/students`, {
        params: {
          house: type,
        },
      })
      .then(({ data }) => data),
  );
  const handleClick = (id) => () => {
    navigate(`/order/${id}`);
  };
  return (
    <>
      <div className="d-grid m-2">
        <Button variant={type} size="lg" className="mb-2">
          {house}
        </Button>
      </div>
      <ListGroup variant="flush">
        {data &&
          data.map((el, index) => (
            <ListGroup.Item key={el.id} onClick={handleClick(el.id)}>
              <div className="d-grid gap-2" style={{ gridTemplateColumns: '60px 1fr auto', alignItems: 'center' }}>
                <span className="float-start" style={{ width: '60px' }}>
                  <Image fluid src={`/assets/logo-${type}.png`} />
                </span>
                <span>{el.name}</span>
                <span className="float-end text-muted">{el.distance}</span>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default List;
