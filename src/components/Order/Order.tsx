import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Order.module.css';
import { useParams } from 'react-router-dom';
import { Alert, Form, Col, Button, InputGroup } from 'react-bootstrap';

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  let { studentId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showCongratulations, setShowCongratulation] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setShowCongratulation(true);
  };
  return (
    <div className={styles.Order}>
      <section className="p-4 bg-black bg-opacity-10 text-dark text-center">
        <p>Send an owl to:</p>
        <h1>studentName</h1>
        <p>
          from Griffindor, <br /> who is in studentDistance from here.
        </p>
      </section>
      {showCongratulations && (
        <section className="p-5 mb-2 bg-success bg-opacity-10 text-success text-center">
          <h4>Congratulations!</h4>
          <div>Your owl is on the way to Colin Creevey</div>
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
