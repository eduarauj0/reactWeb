import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';

function Bootstrap() {

  return (
	<div>
		  <Button variant="primary">Primary</Button>{' '}
		  <Button variant="secondary">Secondary</Button>{' '}
		  <Button variant="success">Success</Button>{' '}
		  <Button variant="warning">Warning</Button>{' '}
		  <Button variant="danger">Danger</Button>{' '}
		  <Button variant="info">Info</Button>{' '}
		  <Button variant="light">Light</Button>{' '}
		  <Button variant="dark">Dark</Button>
		  <Button variant="link">Link</Button>
		<Form.Select aria-label="Default select example">
		  <option>Open this select menu</option>
		  <option value="1">One</option>
		  <option value="2">Two</option>
		  <option value="3">Three</option>
		</Form.Select>
	</div>
  )
}

export default Bootstrap;