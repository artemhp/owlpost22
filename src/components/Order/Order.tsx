import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Order.module.css';
import { useParams } from 'react-router-dom';
import { Alert, Form, Col, Button, InputGroup } from 'react-bootstrap';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  let { studentId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showCongratulations, setShowCongratulation] = useState(false);

  const { data: studentInfo } = useQuery(['getStudent'], () =>
    axios.get(`/.netlify/functions/api/students`, { params: { id: studentId } }).then(({ data }) => data),
  );

  const sendLetter = useMutation((api) => axios.post(`/.netlify/functions/api/students`, api));

  const onSubmit = (data) => {
    sendLetter.mutate(data);
    reset();
    setShowCongratulation(true);
  };

  if (!studentInfo) {
    return null;
  }

  return (
    <div className={styles.Order}>
      <section className="p-4 bg-black bg-opacity-10 text-dark text-center">
        <p>Send an owl to:</p>
        <h1>{studentInfo.name}</h1>
        <p>
          from <span className={styles.houseTitle}>{studentInfo.house}</span>, <br /> who is in {studentInfo.distance}{' '}
          from here.
        </p>
      </section>
      {showCongratulations && (
        <section className="p-5 mb-2 bg-success bg-opacity-10 text-success text-center">
          <h4>Congratulations!</h4>
          <div>Your owl is on the way to {studentInfo.name}</div>
        </section>
      )}

      <section className="p-3">
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group md="12" className="mb-3">
            <Form.Label>Your name:</Form.Label>
            <Form.Control
              {...register('name', { required: true })}
              type="text"
              isValid={false}
              isInvalid={errors.name}
              placeholder="Albus Dumbledore"
            />
            <Form.Control.Feedback type="invalid">Please input your name.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="12" className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              {...register('message', { required: true })}
              as="textarea"
              placeholder="The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution."
              rows={5}
              isValid={false}
              isInvalid={errors.message}
            />
            <Form.Control.Feedback type="invalid">Please input your message.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="gryffindor" className="mb-2 p-2">
              Send Owl
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default Order;
