import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ListGroup, Button, Alert } from 'react-bootstrap';

import styles from './List.module.css';
import studentService from '../../services/students'
import { house } from '../../models/Student';

export interface ListProps {
  navigate: (route: string | number) => void;
}

const List: FC<ListProps> = ({ navigate }): JSX.Element => {
  let { house } = useParams<{ house: house }>();
  const goBack = () => navigate('asd');

  const { data, isError, isLoading } = useQuery(
    [`students-list-${house}`],
    () => studentService.getStudents()
  );

  if (isLoading || data === undefined) return <Alert variant="info">Loading...</Alert>;
  if (isError) return <Alert variant="danger">Error</Alert>;
  

  return (
    <>
      <div className="d-grid m-2">
        <Button
          variant={house}
          size="lg" 
          className="mb-2"
          onClick={goBack}
        >
          Go back to <strong>Owl Post</strong>
        </Button>
      </div>
      <ListGroup variant="flush">
        {data.map((student) => (
          <ListGroup.Item
            className={styles.listItem}
            key={student.id}
            onClick={() => navigate(`/order/${student.id}`)}
          >
            <span className={`float-start ${styles.listItemImage}`}>
              <Image fluid src={`/assets/logo-${house}.png`} />
            </span>
            <span>{student.name}</span>
            <span className="float-end text-muted">
              {student.distance}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default List;
