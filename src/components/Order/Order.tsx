import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Order.module.css';
import { useParams } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useQuery, useMutation } from '@tanstack/react-query';
import studentService from '../../services/students';
import mailService from '../../services/mails';
import Mail from '../../models/Mail';

export interface OrderProps {
  studentId: string | undefined;
}

const Order: FC<OrderProps> = ({ studentId }): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Mail>();

  const [showCongratulations, setShowCongratulation] = useState<boolean>(false);

  const { data, isError, isLoading } = useQuery([`student-${studentId}`], () =>
    studentService.getStudent(Number(studentId)),
  );

  const sendLetter = useMutation((api: Mail) => mailService.send(api), {
    onSuccess: () => setShowCongratulation(true),
  });

  const onSubmit = (data: Mail) => {
    sendLetter.mutate(data);
    reset();
  };

  if (isLoading || data === undefined) {
    return <Alert variant="info">Loading...</Alert>;
  }

  if (isError) {
    return <Alert variant="danger">Error</Alert>;
  }

  return (
    <div className={styles.Order}>
      <section className="p-4 bg-black bg-opacity-10 text-dark text-center">
        <p>Send an owl to:</p>
        <h1>{data.name}</h1>
        <p>
          from <span className={styles.houseTitle}>{data.house}</span>, <br />
          who is in {data.distance} from here.
        </p>
      </section>
      {showCongratulations && (
        <section className="p-5 mb-2 bg-success bg-opacity-10 text-success text-center">
          <h4>Congratulations!</h4>
          <div>Your owl is on the way to {data.name}</div>
        </section>
      )}
      <Form className="p-3" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Your name:</Form.Label>
          <Form.Control
            {...register('name', { required: true })}
            type="text"
            isValid={false}
            isInvalid={!!errors.name}
            placeholder="Albus Dumbledore"
          />
          <Form.Control.Feedback type="invalid">
            Please input your name.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            {...register('message', { required: true })}
            as="textarea"
            placeholder="The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution."
            rows={5}
            isValid={false}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            Please input your message.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <section className="d-grid gap-2">
          <Button type="submit" variant="gryffindor" className="mb-2 p-2">
            Send Owl
          </Button>
        </section>
      </Form>
    </div>
  );
};

export default Order;
