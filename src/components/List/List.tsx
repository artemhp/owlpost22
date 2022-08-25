import React, { FC } from 'react';
import styles from './List.module.css';
import Image from 'react-bootstrap/Image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { ListGroup, Button, Alert } from 'react-bootstrap';

interface ListProps {}

const List: FC<ListProps> = () => {
  let { house } = useParams();

  let navigate = useNavigate();
  const goBack = () => navigate(-1);

  const {
    data: studentsList,
    isError,
    isLoading,
  } = useQuery(['students'], () =>
    axios.get(`/.netlify/functions/api/students`, { params: { house } }).then(({ data }) => data),
  );
  if (!studentsList) {
    return null;
  }
  return (
    <>
      <div className="d-grid m-2">
        <Button variant={house} size="lg" className="mb-2" onClick={goBack}>
          Go back to <strong>Owl Post</strong>
        </Button>
      </div>
      <ListGroup variant="flush">
        {studentsList.map((el) => (
          <ListGroup.Item className={styles.listItem} key={el.id} onClick={() => navigate(`/order/${el.id}`)}>
            <span className="float-start" style={{ width: '60px' }}>
              <Image fluid src={`/assets/logo-${house}.png`} />
            </span>
            <span>{el.name}</span>
            <span className="float-end text-muted">{el.distance}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default List;
