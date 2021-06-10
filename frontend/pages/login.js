import React from 'react';
import Link from 'next/link';
import { FormGroup, Input, Button, Form, FormText } from 'reactstrap';

function login() {
  return (
    <div className='container'>
      <Form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          border: '1px solid red',
        }}
      >
        <Button style={{ backgroundColor: 'rgb(202, 136, 136)' }}>
          <Link href='/register'>Register</Link>
        </Button>
        <FormGroup>
          <Input type='email' placeholder='email' name='email'></Input>
        </FormGroup>
        <FormGroup>
          <Input type='password' placeholder='password' name='password'></Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default login;
